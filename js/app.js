import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TrailManager } from './trail.js';
import { DEFAULT_IBL_STATE, LOCAL_STORAGE_KEY } from './state.js';
import { bindSliderAndInput, exposeAppApi, registerParentMessageBridge } from './uiBridge.js';
import { ProceduralIBLEditor } from './ibl.js';
import { setupIBLControls, applyIBLStateToUI } from './iblControls.js';
import { createPostProcessing } from './postProcessing.js';
import { GamepadManager, STANDARD_BUTTONS } from './gamepadManager.js';
import { LightingManager } from './lightingManager.js';

// Import isolated camera module
import {
  camera,
  cameraTarget,
  getCameraState,
  applyCameraState,
  syncFov,
  syncZoom,
  updateCameraPosition,
  setupCameraInputs,
  handleCameraMouseDown,
  handleCameraMouseMove,
  handleCameraWheel,
  handleCameraResize,
  cameraApi
} from './cameraControls.js';

const DB_NAME = 'TrailpadStudio';
const DB_VERSION = 1;
const STORE_NAME = 'models';
const MODEL_KEY = 'current_glb';
const HANDLE_KEY = 'current_file_handle';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveBinaryModel(buffer, name) {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put({ buffer, name }, MODEL_KEY);
  } catch (err) {
    console.error('Failed to save model to IndexedDB:', err);
  }
}

async function getStoredBinaryModel() {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(MODEL_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    return null;
  }
}

async function saveFileHandle(handle) {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(handle, HANDLE_KEY);
  } catch (err) {
    console.error('Failed to save handle to IndexedDB:', err);
  }
}

async function getStoredFileHandle() {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(HANDLE_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    return null;
  }
}

async function clearStoredModel() {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(MODEL_KEY);
    tx.objectStore(STORE_NAME).delete(HANDLE_KEY);
  } catch (err) {
    console.error('Failed to clear model from IndexedDB:', err);
  }
}

let isPotentialScrub = false;
let isScrubbing = false;
let scrubInput = null;
let scrubStartX = 0;
let scrubStartY = 0;
let scrubStartVal = 0;
let scrubStep = 1;

document.addEventListener('mousedown', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
    isPotentialScrub = true;
    scrubInput = e.target;
    scrubStartX = e.clientX;
    scrubStartY = e.clientY;
    scrubStartVal = parseFloat(scrubInput.value) || 0;
    scrubStep = parseFloat(scrubInput.step) || 1;
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isPotentialScrub || !scrubInput) return;

  const deltaX = e.clientX - scrubStartX;

  if (!isScrubbing && Math.abs(deltaX) > 4) {
    isScrubbing = true;
    scrubInput.blur();
  }

  if (isScrubbing) {
    let modMultiplier = 1.0;
    if (e.ctrlKey) modMultiplier = 0.2;
    else if (e.shiftKey) modMultiplier = 5.0;

    const sensitivity = scrubStep < 0.1 ? 0.005 : (scrubStep < 1 ? 0.02 : 0.1);
    let newVal = scrubStartVal + (deltaX * scrubStep * sensitivity * 5 * modMultiplier);

    const min = scrubInput.min !== '' ? parseFloat(scrubInput.min) : -Infinity;
    const max = scrubInput.max !== '' ? parseFloat(scrubInput.max) : Infinity;
    newVal = Math.max(min, Math.min(max, newVal));

    const decimals = (scrubStep.toString().split('.')[1] || '').length;
    scrubInput.value = newVal.toFixed(decimals > 0 ? decimals : 2);
    scrubInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
});

window.addEventListener('mouseup', () => {
  isPotentialScrub = false;
  isScrubbing = false;
  scrubInput = null;
});

document.querySelectorAll('.dock-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dock-tab-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.dock-tab-content').forEach((c) => c.classList.remove('active'));

    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');

    const dock = document.querySelector('#bottom-dock');
    if (dock) {
      dock.classList.remove('collapsed');
      const toggle = document.querySelector('#toggleDockBtn');
      if (toggle) toggle.textContent = 'Collapse Dock';
    }
  });
});

const toggleDockBtn = document.querySelector('#toggleDockBtn');
if (toggleDockBtn) {
  toggleDockBtn.addEventListener('click', () => {
    const dock = document.querySelector('#bottom-dock');
    dock.classList.toggle('collapsed');
    toggleDockBtn.textContent = dock.classList.contains('collapsed') ? 'Expand Dock' : 'Collapse Dock';
  });
}

const MESH_MAPPINGS = {
  Btn_South: 0, Btn_A: 0, Btn_East: 1, Btn_B: 1,
  Btn_West: 2, Btn_X: 2, Btn_North: 3, Btn_Y: 3,
  Bumper_Left: 4, Bumper_Right: 5, Trigger_Left: 6, Trigger_Right: 7,
  Btn_Select: 8, Btn_Start: 9, Btn_L3: 10, Btn_R3: 11,
  DPad_Up: 12, DPad_Down: 13, DPad_Left: 14, DPad_Right: 15, Btn_Home: 16
};

function getButtonLabel(i) {
  return STANDARD_BUTTONS[i] || `B${i}`;
}

const hudUI = {
  mapping: document.querySelector('#mapping'),
  axisCount: document.querySelector('#axisCount'),
  buttonCount: document.querySelector('#buttonCount'),
  leftValue: document.querySelector('#lx'),
  rightValue: document.querySelector('#rx'),
  leftBar: document.querySelector('#lxBar'),
  rightBar: document.querySelector('#rxBar'),
  leftDot: document.querySelector('#leftDot'),
  rightDot: document.querySelector('#rightDot'),
  status: document.querySelector('#status'),
  buttons: document.querySelector('#buttons'),
  buttonElements: [],
  buttonValues: [],
  buttonPressureBars: []
};

const app = document.querySelector('#app');
const scene = new THREE.Scene();

// Initialize Camera inputs/listeners from module
setupCameraInputs(saveToLocalStorage);

// Initialize Lighting Manager
const lightingManager = new LightingManager(scene);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightingManager.setActiveLight(null);
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const hud = document.querySelector('#hud');
    const bottomDock = document.querySelector('#bottom-dock');
    const isHidden = (hud && hud.style.display === 'none');
    if (hud) hud.style.display = isHidden ? 'flex' : 'none';
    if (bottomDock) bottomDock.style.display = isHidden ? 'flex' : 'none';
  }
});

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
app.appendChild(renderer.domElement);

const {
  composer,
  aoPass,
  bloomPass,
  postShaderPass,
  updateAntiAliasing,
  resize: resizePostProcessing
} = createPostProcessing(renderer, scene, camera);

const iblState = { ...DEFAULT_IBL_STATE };
const proceduralIBLEditor = new ProceduralIBLEditor(renderer, scene);

function updateIBL() {
  proceduralIBLEditor.update(iblState);
}

setupIBLControls(iblState, updateIBL);

document.querySelector('#aaToggle').addEventListener('change', updateAntiAliasing);
document.querySelector('#aaQualitySelect').addEventListener('change', updateAntiAliasing);

document.querySelector('#shadowQualitySelect').addEventListener('change', (e) => {
  lightingManager.updateShadowQuality(e.target.value);
});

document.querySelector('#bloomToggle').addEventListener('change', (e) => {
  bloomPass.enabled = e.target.checked;
});

bindSliderAndInput('#bloomStrength', '#bloomStrengthInput', (val) => { bloomPass.strength = val; }, 2);
bindSliderAndInput('#bloomRadius', '#bloomRadiusInput', (val) => { bloomPass.radius = val; }, 2);
bindSliderAndInput('#bloomThreshold', '#bloomThresholdInput', (val) => { bloomPass.threshold = val; }, 2);

document.querySelector('#aoToggle').addEventListener('change', (e) => {
  aoPass.enabled = e.target.checked;
});
bindSliderAndInput('#aoRadius', '#aoRadiusInput', (val) => { aoPass.kernelRadius = val; }, 2);
bindSliderAndInput('#aoMinDistance', '#aoMinDistanceInput', (val) => { aoPass.minDistance = val; }, 3);
bindSliderAndInput('#aoMaxDistance', '#aoMaxDistanceInput', (val) => { aoPass.maxDistance = val; }, 2);

document.querySelector('#toneMappingSelect').addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'Linear': renderer.toneMapping = THREE.LinearToneMapping; break;
    case 'Reinhard': renderer.toneMapping = THREE.ReinhardToneMapping; break;
    case 'Cineon': renderer.toneMapping = THREE.CineonToneMapping; break;
    default: renderer.toneMapping = THREE.ACESFilmicToneMapping; break;
  }
});

bindSliderAndInput('#exposureRange', '#exposureInput', (val) => { renderer.toneMappingExposure = val; }, 2);
bindSliderAndInput('#contrastRange', '#contrastInput', (val) => { postShaderPass.uniforms.contrast.value = val; }, 2);
bindSliderAndInput('#saturationRange', '#saturationInput', (val) => { postShaderPass.uniforms.saturation.value = val; }, 2);

window.addEventListener('contextmenu', (e) => e.preventDefault());
renderer.domElement.addEventListener('mousedown', (e) => {
  lightingManager.setActiveLight(null);
  handleCameraMouseDown(e);
});

window.addEventListener('mouseup', () => {
  saveToLocalStorage();
});

window.addEventListener('mousemove', (e) => {
  handleCameraMouseMove(e, lightingManager.activeLightId, lightingManager.lightsMap);
});

renderer.domElement.addEventListener('wheel', (e) => {
  handleCameraWheel(e, scheduleSave);
}, { passive: false });

lightingManager.renderLightingDock();

const controllerGroup = new THREE.Group();
controllerGroup.rotation.x = 0.55;
scene.add(controllerGroup);

const syncModelScale = (val) => {
  const s = Math.max(0.01, parseFloat(val) || 1);
  controllerGroup.scale.set(s, s, s);
  const modelScale = document.querySelector('#modelScale');
  const modelScaleInput = document.querySelector('#modelScaleInput');
  if (modelScale) modelScale.value = s;
  if (modelScaleInput) modelScaleInput.value = s.toFixed(2);
};

const modelScale = document.querySelector('#modelScale');
const modelScaleInput = document.querySelector('#modelScaleInput');
if (modelScale) modelScale.addEventListener('input', (e) => syncModelScale(e.target.value));
if (modelScaleInput) modelScaleInput.addEventListener('input', (e) => syncModelScale(e.target.value));

let buttonEmissionMultiplier = 1.0;
const trailManager = new TrailManager(scene, camera);

let buttonEmissionColor = new THREE.Color(0xffffff);
const emissionColor = document.querySelector('#emissionColor');
if (emissionColor) emissionColor.addEventListener('input', (e) => {
  buttonEmissionColor.set(e.target.value);
});

bindSliderAndInput('#trailOffset', '#trailOffsetInput', (val) => {
  trailManager.setOffsetY(val);
  trailManager.syncTarget(leftStick3DGroup);
}, 2);

const baseBtnMat = new THREE.MeshPhysicalMaterial({ color: 0x333333, roughness: 0.35, metalness: 0 });
let buttons3D = [], basePositions = [], currentModel = null, leftStick3DGroup = null, rightStick3DGroup = null, dpadRockerPivot = null;
const motionBaseQuaternions = new WeakMap();
let boneHelpers = [];
let showBones = false;

function registerMotionNode(node) {
  motionBaseQuaternions.set(node, node.quaternion.clone());
}

function cloneNodeMaterials(node) {
  if (!node?.material) return [];

  const materials = Array.isArray(node.material) ? node.material : [node.material];
  const clonedMaterials = materials.map((material) => material.clone());
  node.material = Array.isArray(node.material) ? clonedMaterials : clonedMaterials[0];
  return clonedMaterials;
}

function findBoneEmissiveTargets(root, bone) {
  const targets = [];
  root.traverse((node) => {
    if (node.isSkinnedMesh && node.skeleton?.bones.includes(bone)) {
      targets.push(node);
    }
  });
  return targets;
}

function register3DButton(index, node, parent = controllerGroup, isStick = false, emissiveTargets = null) {
  const targets = emissiveTargets || (node.isMesh ? [node] : []);
  const materials = targets.flatMap((target) => cloneNodeMaterials(target));

  buttons3D[index] = { node, isStick, emissiveMaterials: materials };
  basePositions[index] = node.position.clone();
}

function clearController3D() {
  trailManager.destroy();
  boneHelpers.forEach((helper) => {
    controllerGroup.remove(helper);
    helper.geometry.dispose();
    helper.material.dispose();
  });
  boneHelpers = [];
  if (currentModel) controllerGroup.remove(currentModel);
  buttons3D = []; basePositions = []; leftStick3DGroup = null; rightStick3DGroup = null; dpadRockerPivot = null;
}

function addBoneHelper(skinnedMesh) {
  if (!skinnedMesh.skeleton || boneHelpers.some((helper) => helper.userData.skeleton === skinnedMesh.skeleton)) return;
  const helper = new THREE.SkeletonHelper(skinnedMesh);
  helper.userData.skeleton = skinnedMesh.skeleton;
  helper.material.color.set(0xffd166);
  helper.material.depthTest = false;
  helper.material.depthWrite = false;
  helper.visible = showBones;
  boneHelpers.push(helper);
  controllerGroup.add(helper);
}

const boneVisibilityToggle = document.querySelector('#boneVisibilityToggle');
if (boneVisibilityToggle) {
  boneVisibilityToggle.addEventListener('change', (e) => {
    showBones = e.target.checked;
    boneHelpers.forEach((helper) => { helper.visible = showBones; });
  });
}

function buildProceduralController() {
  clearController3D();
  const proceduralGroup = new THREE.Group();
  const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0x1b202a, roughness: 0.35, metalness: 0.4 });
  const rockerMat = new THREE.MeshPhysicalMaterial({ color: 0x222a36, roughness: 0.2, metalness: 0.6 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.6, 2.2), bodyMat);
  body.castShadow = true; body.receiveShadow = true;
  proceduralGroup.add(body);

  const leftHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 1.8), bodyMat);
  leftHandle.position.set(-1.7, -0.4, 0.6); leftHandle.rotation.z = 0.4; leftHandle.rotation.x = 0.2;
  leftHandle.castShadow = true; leftHandle.receiveShadow = true;
  proceduralGroup.add(leftHandle);

  const rightHandle = leftHandle.clone();
  rightHandle.position.set(1.7, -0.4, 0.6); rightHandle.rotation.z = -0.4;
  proceduralGroup.add(rightHandle);

  function makeMesh(geo, pos, mat = baseBtnMat) {
    const mesh = new THREE.Mesh(geo, mat.clone());
    mesh.position.copy(pos); mesh.castShadow = true; mesh.receiveShadow = true;
    proceduralGroup.add(mesh);
    return mesh;
  }

  const faceCenter = new THREE.Vector3(1.1, 0.35, 0.2);
  register3DButton(0, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x, faceCenter.y, faceCenter.z + 0.28)));
  register3DButton(1, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x + 0.28, faceCenter.y, faceCenter.z)));
  register3DButton(2, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x - 0.28, faceCenter.y, faceCenter.z)));
  register3DButton(3, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x, faceCenter.y, faceCenter.z - 0.28)));
  register3DButton(4, makeMesh(new THREE.BoxGeometry(0.7, 0.18, 0.35), new THREE.Vector3(-1.1, 0.3, -0.95)));
  register3DButton(5, makeMesh(new THREE.BoxGeometry(0.7, 0.18, 0.35), new THREE.Vector3(1.1, 0.3, -0.95)));
  register3DButton(6, makeMesh(new THREE.BoxGeometry(0.65, 0.3, 0.45), new THREE.Vector3(-1.1, 0.1, -1.3)));
  register3DButton(7, makeMesh(new THREE.BoxGeometry(0.65, 0.3, 0.45), new THREE.Vector3(1.1, 0.1, -1.3)));
  register3DButton(8, makeMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 16), new THREE.Vector3(-0.45, 0.33, -0.2)));
  register3DButton(9, makeMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 16), new THREE.Vector3(0.45, 0.33, -0.2)));
  register3DButton(16, makeMesh(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 24), new THREE.Vector3(0, 0.33, -0.2)));

  function createStick(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0.25, z);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35, 16), new THREE.MeshPhysicalMaterial({ color: 0x505b6d, roughness: 0.5 }));
    stem.position.y = 0.15; stem.castShadow = true; group.add(stem);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.32, 0.1, 32), new THREE.MeshPhysicalMaterial({ color: 0x62d8ff, roughness: 0.3, metalness: 0.6 }));
    cap.position.y = 0.32; cap.castShadow = true; group.add(cap);
    proceduralGroup.add(group);
    return { group, cap };
  }

  const lStick = createStick(-0.5, 0.45); const rStick = createStick(0.5, 0.45);
  leftStick3DGroup = lStick.group; rightStick3DGroup = rStick.group;
  registerMotionNode(leftStick3DGroup); registerMotionNode(rightStick3DGroup);
  register3DButton(10, lStick.cap, lStick.group, true);
  register3DButton(11, rStick.cap, rStick.group, true);
  trailManager.syncTarget(leftStick3DGroup);

  const dpadBasePos = new THREE.Vector3(-1.1, 0.32, 0.2);
  dpadRockerPivot = new THREE.Group(); dpadRockerPivot.position.copy(dpadBasePos); dpadRockerPivot.position.y += 0.08;
  registerMotionNode(dpadRockerPivot);
  proceduralGroup.add(dpadRockerPivot);

  const dpadCrossV = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.62), rockerMat);
  const dpadCrossH = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.06, 0.22), rockerMat);
  dpadCrossV.castShadow = true; dpadCrossH.castShadow = true;
  dpadRockerPivot.add(dpadCrossV); dpadRockerPivot.add(dpadCrossH);

  const btnDist = 0.22;
  register3DButton(12, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x, dpadBasePos.y, dpadBasePos.z - btnDist)));
  register3DButton(13, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x, dpadBasePos.y, dpadBasePos.z + btnDist)));
  register3DButton(14, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x - btnDist, dpadBasePos.y, dpadBasePos.z)));
  register3DButton(15, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x + btnDist, dpadBasePos.y, dpadBasePos.z)));

  currentModel = proceduralGroup;
  controllerGroup.add(currentModel);
}

function processModelNode(node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);

  if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; }
  if (node.isSkinnedMesh) addBoneHelper(node);
  if (node.isMesh || node.isBone || node.isGroup) {
    const buttonIndex = MESH_MAPPINGS[node.name];
    if (buttonIndex !== undefined) {
      const isStick = (buttonIndex === 10 || buttonIndex === 11);
      const emissiveTargets = node.isBone ? findBoneEmissiveTargets(currentModel, node) : [node];
      register3DButton(buttonIndex, node, node.parent, isStick, emissiveTargets);
    }

    if (node.name === 'Stick_Left') {
      leftStick3DGroup = node;
      registerMotionNode(node);
    }
    if (node.name === 'Stick_Right') {
      rightStick3DGroup = node;
      registerMotionNode(node);
    }
    if (node.name === 'DPad_Rocker') {
      dpadRockerPivot = node;
      registerMotionNode(node);
    }
  }

  node.children.forEach((child) => processModelNode(child, visited));
  if (node.isSkinnedMesh && node.skeleton) {
    node.skeleton.bones.forEach((bone) => processModelNode(bone, visited));
  }
}

function parseAndLoadGLTF(buffer, fileName = 'Model') {
  const loader = new GLTFLoader();
  loader.parse(buffer, '', (gltf) => {
    clearController3D();
    currentModel = gltf.scene;
    controllerGroup.add(currentModel);
    processModelNode(currentModel);
    trailManager.syncTarget(leftStick3DGroup);
  }, (err) => {
    console.error('Error parsing GLB:', err);
  });
}

const loadDefaultBtn = document.querySelector('#loadDefaultBtn');
if (loadDefaultBtn) {
  loadDefaultBtn.addEventListener('click', async () => {
    await clearStoredModel();
    buildProceduralController();
  });
}

const fileInput = document.querySelector('#glbFile');
if (fileInput) {
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const buffer = evt.target.result;
      parseAndLoadGLTF(buffer, file.name);
      await saveBinaryModel(buffer, file.name);
    };
    reader.readAsArrayBuffer(file);
  });
}

async function verifyPermission(fileHandle) {
  const options = { mode: 'read' };
  if ((await fileHandle.queryPermission(options)) === 'granted') return true;
  if ((await fileHandle.requestPermission(options)) === 'granted') return true;
  return false;
}

const openPickerBtn = document.querySelector('#openPickerBtn');
if (openPickerBtn) {
  openPickerBtn.addEventListener('click', async () => {
    if (!window.showOpenFilePicker) return;

    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{ description: '3D Models', accept: { 'model/gltf-binary': ['.glb'] } }],
        multiple: false
      });

      if (!handle) return;

      const file = await handle.getFile();
      const buffer = await file.arrayBuffer();
      parseAndLoadGLTF(buffer, file.name);
      await saveBinaryModel(buffer, file.name);
      await saveFileHandle(handle);
    } catch (err) {
      // Ignore cancellation errors.
    }
  });
}

async function initModelPersistence() {
  const handle = await getStoredFileHandle();
  if (handle) {
    try {
      if (await verifyPermission(handle)) {
        const file = await handle.getFile();
        const buffer = await file.arrayBuffer();
        parseAndLoadGLTF(buffer, file.name);
        return;
      }
    } catch (err) {
      console.warn('File handle load error:', err);
    }
  }

  const stored = await getStoredBinaryModel();
  if (stored && stored.buffer) {
    parseAndLoadGLTF(stored.buffer, stored.name || 'Cached Model');
    return;
  }

  buildProceduralController();
}

let lastSnapshot = null;

const gamepadManager = new GamepadManager({
  hudUI,
  meshMappings: MESH_MAPPINGS
});

function refreshPads() {
  const pads = gamepadManager.refreshPads();
  const sel = document.querySelector('#padSelect');
  const old = gamepadManager.activePadIndex;
  if (!sel) return;
  sel.innerHTML = '';
  if (!pads.length) {
    sel.innerHTML = '<option>No controller detected</option>';
    gamepadManager.activePadIndex = null;
    setStatus(false);
    return;
  }
  pads.forEach((pad) => {
    const option = document.createElement('option');
    option.value = pad.index; option.textContent = `#${pad.index} — ${pad.id}`;
    sel.appendChild(option);
  });
  const newIndex = pads.some((pad) => pad.index === old) ? old : pads[0].index;
  gamepadManager.selectPad(newIndex);
  sel.value = newIndex;
  setStatus(true);
}

function setStatus(ok) {
  const text = ok ? 'Connected' : 'Waiting';
  const className = 'status ' + (ok ? 'connected' : '');
  if (hudUI.status) {
    hudUI.status.textContent = text;
    hudUI.status.className = className;
  }
}

function fmt(v) {
  return Number(v || 0).toFixed(3);
}

function setDot(id, x, y) {
  const dot = id === 'leftDot' ? hudUI.leftDot : hudUI.rightDot;
  if (!dot) return;
  dot.style.left = `${50 + Math.max(-1, Math.min(1, x)) * 45}%`;
  dot.style.top = `${50 + Math.max(-1, Math.min(1, y)) * 45}%`;
}

function buildUI(pad) {
  if (!hudUI.buttons) return;
  hudUI.buttons.innerHTML = '';
  hudUI.buttonElements = [];
  hudUI.buttonValues = [];
  hudUI.buttonPressureBars = [];

  pad.buttons.forEach((button, i) => {
    const el = document.createElement('div');
    el.className = 'btn' + (button.pressed ? ' on' : '');
    el.dataset.button = i;
    el.innerHTML = `
      <div class="btn-header"><span class="b-name">${getButtonLabel(i)}</span><span class="b-val">${fmt(button.value)}</span></div>
      <div class="pressure-bar" style="width:${(button.value || 0) * 100}%"></div>
    `;
    hudUI.buttons.appendChild(el);
    hudUI.buttonElements[i] = el;
    hudUI.buttonValues[i] = el.querySelector('.b-val');
    hudUI.buttonPressureBars[i] = el.querySelector('.pressure-bar');
  });
}

function processPad(pad) {
  if (!pad) return;

  const mapping = pad.mapping || 'non-standard';
  if (hudUI.mapping) hudUI.mapping.textContent = mapping;
  if (hudUI.axisCount) hudUI.axisCount.textContent = String(pad.axes.length);
  if (hudUI.buttonCount) hudUI.buttonCount.textContent = String(pad.buttons.length);

  const ax = pad.axes;
  const lx = ax[0] || 0, ly = ax[1] || 0, rx = ax[2] || 0, ry = ax[3] || 0;

  if (hudUI.leftValue) hudUI.leftValue.textContent = `${fmt(lx)}, ${fmt(ly)}`;
  if (hudUI.rightValue) hudUI.rightValue.textContent = `${fmt(rx)}, ${fmt(ry)}`;
  if (hudUI.leftBar) hudUI.leftBar.style.width = `${Math.min(100, Math.hypot(lx, ly) * 100)}%`;
  if (hudUI.rightBar) hudUI.rightBar.style.width = `${Math.min(100, Math.hypot(rx, ry) * 100)}%`;

  setDot('leftDot', lx, ly); setDot('rightDot', rx, ry);

  const maxTilt = 0.35;
  const leftStickRotation = new THREE.Euler(ly * maxTilt, 0, -lx * maxTilt);
  const rightStickRotation = new THREE.Euler(ry * maxTilt, 0, -rx * maxTilt);
  if (leftStick3DGroup) {
    leftStick3DGroup.quaternion.copy(motionBaseQuaternions.get(leftStick3DGroup)).multiply(new THREE.Quaternion().setFromEuler(leftStickRotation));
  }
  if (rightStick3DGroup) {
    rightStick3DGroup.quaternion.copy(motionBaseQuaternions.get(rightStick3DGroup)).multiply(new THREE.Quaternion().setFromEuler(rightStickRotation));
  }

  if (dpadRockerPivot) {
    const dpadUp = pad.buttons[12]?.value || 0;
    const dpadDown = pad.buttons[13]?.value || 0;
    const dpadLeft = pad.buttons[14]?.value || 0;
    const dpadRight = pad.buttons[15]?.value || 0;

    const rockerTiltMax = 0.22;
    const dpadRotation = new THREE.Euler(
      (dpadDown - dpadUp) * rockerTiltMax,
      0,
      (dpadLeft - dpadRight) * rockerTiltMax
    );
    dpadRockerPivot.quaternion.copy(motionBaseQuaternions.get(dpadRockerPivot)).multiply(new THREE.Quaternion().setFromEuler(dpadRotation));
  }

  if (!lastSnapshot || lastSnapshot.id !== pad.id || lastSnapshot.buttons.length !== pad.buttons.length) {
    buildUI(pad);
    lastSnapshot = { id: pad.id, axes: [], buttons: pad.buttons.map((button) => button.value) };
  }

  pad.buttons.forEach((button, i) => {
    const val = button.value;
    const isPressed = button.pressed || val > 0.1;

    const visual = hudUI.buttonElements[i];
    if (visual) {
      if (visual.classList.contains('on') !== isPressed) visual.classList.toggle('on', isPressed);
      const valueText = fmt(val);
      const pressureWidth = `${(val || 0) * 100}%`;
      if (hudUI.buttonValues[i]) hudUI.buttonValues[i].textContent = valueText;
      if (hudUI.buttonPressureBars[i]) hudUI.buttonPressureBars[i].style.width = pressureWidth;
    }

    if (buttons3D[i]) {
      const { node, isStick, emissiveMaterials } = buttons3D[i];
      const basePos = basePositions[i];
      const maxTravel = isStick ? 0.04 : 0.03;
      const pressDepth = isStick ? (isPressed ? maxTravel : 0) : val * maxTravel;

      node.position.y = basePos.y - pressDepth;

      emissiveMaterials.forEach((material) => {
        if (!material.emissive) return;
        if (isPressed) {
          material.emissive.copy(buttonEmissionColor);
          material.emissiveIntensity = 0.5 * val * buttonEmissionMultiplier;
        } else {
          material.emissive.setHex(0x000000);
          material.emissiveIntensity = 0;
        }
      });
    }
  });

  lastSnapshot.axes = pad.axes.slice();
  lastSnapshot.buttons = pad.buttons.map((button) => button.value);
}

function loop() {
  requestAnimationFrame(loop);
  const pad = gamepadManager.getSelectedPad();
  if (pad) {
    setStatus(true);
    processPad(pad);
  } else if (gamepadManager.activePadIndex !== null) {
    setStatus(false);
  }

  trailManager.update();
  composer.render();
}

const padSelect = document.querySelector('#padSelect');
if (padSelect) padSelect.addEventListener('change', (e) => { 
  gamepadManager.selectPad(Number(e.target.value)); 
  lastSnapshot = null; 
});

const scanBtn = document.querySelector('#scan');
if (scanBtn) scanBtn.onclick = refreshPads;

const rumbleBtn = document.querySelector('#rumble');
if (rumbleBtn) {
  rumbleBtn.onclick = async () => {
    const pad = gamepadManager.getSelectedPad();
    if (!pad?.vibrationActuator) return;
    try {
      await pad.vibrationActuator.playEffect('dual-rumble', { duration: 180, strongMagnitude: 0.65, weakMagnitude: 0.35 });
    } catch (err) {
      console.warn('Rumble failed:', err);
    }
  };
}

window.addEventListener('resize', () => {
  handleCameraResize();
  renderer.setSize(innerWidth, innerHeight);
  resizePostProcessing(innerWidth, innerHeight);
});

function getSettingsState() {
  return {
    camera: getCameraState(),
    model: {
      scale: parseFloat(document.querySelector('#modelScale').value),
      emissionIntensity: parseFloat(document.querySelector('#emissionIntensity').value),
      trailOffsetY: trailManager.getOffsetY(),
      emissionColor: document.querySelector('#emissionColor').value
    },
    postProcessing: {
      aaEnabled: document.querySelector('#aaToggle').checked,
      aaQuality: document.querySelector('#aaQualitySelect').value,
      shadowQuality: document.querySelector('#shadowQualitySelect').value,
      bloom: {
        enabled: document.querySelector('#bloomToggle').checked,
        strength: parseFloat(document.querySelector('#bloomStrength').value),
        radius: parseFloat(document.querySelector('#bloomRadius').value),
        threshold: parseFloat(document.querySelector('#bloomThreshold').value)
      },
      ambientOcclusion: {
        enabled: document.querySelector('#aoToggle').checked,
        radius: parseFloat(document.querySelector('#aoRadius').value),
        minDistance: parseFloat(document.querySelector('#aoMinDistance').value),
        maxDistance: parseFloat(document.querySelector('#aoMaxDistance').value)
      },
      color: {
        toneMapping: document.querySelector('#toneMappingSelect').value,
        exposure: parseFloat(document.querySelector('#exposureRange').value),
        contrast: parseFloat(document.querySelector('#contrastRange').value),
        saturation: parseFloat(document.querySelector('#saturationRange').value)
      }
    },
    lighting: lightingManager.getLightingState(),
    ibl: { ...iblState }
  };
}

function applySettingsState(state) {
  if (!state) return;

  if (state.ibl) applyIBLStateToUI(iblState, state.ibl, updateIBL);
  if (state.camera) applyCameraState(state.camera);

  if (state.model) {
    if (state.model.scale !== undefined) syncModelScale(state.model.scale);
    if (state.model.emissionIntensity !== undefined) {
      buttonEmissionMultiplier = state.model.emissionIntensity;
      const emissionIntensity = document.querySelector('#emissionIntensity');
      const emissionIntensityInput = document.querySelector('#emissionIntensityInput');
      if (emissionIntensity) emissionIntensity.value = buttonEmissionMultiplier;
      if (emissionIntensityInput) emissionIntensityInput.value = buttonEmissionMultiplier.toFixed(2);
    }
    if (state.model.trailOffsetY !== undefined) {
      trailManager.setOffsetY(state.model.trailOffsetY);
      const trailOffset = document.querySelector('#trailOffset');
      const trailOffsetInput = document.querySelector('#trailOffsetInput');
      if (trailOffset) trailOffset.value = state.model.trailOffsetY;
      if (trailOffsetInput) trailOffsetInput.value = state.model.trailOffsetY.toFixed(2);
    }
    if (state.model.emissionColor) {
      const emissionColorInput = document.querySelector('#emissionColor');
      if (emissionColorInput) emissionColorInput.value = state.model.emissionColor;
      buttonEmissionColor.set(state.model.emissionColor);
    }
  }

  if (state.postProcessing) {
    const pp = state.postProcessing;
    if (pp.aaEnabled !== undefined) {
      const aaToggle = document.querySelector('#aaToggle');
      if (aaToggle) aaToggle.checked = pp.aaEnabled;
    }
    if (pp.aaQuality) {
      const aaQualitySelect = document.querySelector('#aaQualitySelect');
      if (aaQualitySelect) aaQualitySelect.value = pp.aaQuality;
    }
    updateAntiAliasing();

    if (pp.shadowQuality) {
      const sel = document.querySelector('#shadowQualitySelect');
      if (sel) {
        sel.value = pp.shadowQuality;
        sel.dispatchEvent(new Event('change'));
      }
    }

    if (pp.bloom) {
      const bloomToggle = document.querySelector('#bloomToggle');
      if (bloomToggle) bloomToggle.checked = pp.bloom.enabled;
      bloomPass.enabled = pp.bloom.enabled;
      bloomPass.strength = pp.bloom.strength;
      bloomPass.radius = pp.bloom.radius;
      bloomPass.threshold = pp.bloom.threshold;

      const bloomStrength = document.querySelector('#bloomStrength');
      const bloomStrengthInput = document.querySelector('#bloomStrengthInput');
      if (bloomStrength) bloomStrength.value = pp.bloom.strength;
      if (bloomStrengthInput) bloomStrengthInput.value = pp.bloom.strength.toFixed(2);

      const bloomRadius = document.querySelector('#bloomRadius');
      const bloomRadiusInput = document.querySelector('#bloomRadiusInput');
      if (bloomRadius) bloomRadius.value = pp.bloom.radius;
      if (bloomRadiusInput) bloomRadiusInput.value = pp.bloom.radius.toFixed(2);

      const bloomThreshold = document.querySelector('#bloomThreshold');
      const bloomThresholdInput = document.querySelector('#bloomThresholdInput');
      if (bloomThreshold) bloomThreshold.value = pp.bloom.threshold;
      if (bloomThresholdInput) bloomThresholdInput.value = pp.bloom.threshold.toFixed(2);
    }

    if (pp.ambientOcclusion) {
      const ao = pp.ambientOcclusion;
      const aoToggle = document.querySelector('#aoToggle');
      if (aoToggle) aoToggle.checked = ao.enabled;
      aoPass.enabled = ao.enabled;
      aoPass.kernelRadius = ao.radius;
      aoPass.minDistance = ao.minDistance;
      aoPass.maxDistance = ao.maxDistance;

      const aoRadius = document.querySelector('#aoRadius');
      const aoRadiusInput = document.querySelector('#aoRadiusInput');
      if (aoRadius) aoRadius.value = ao.radius;
      if (aoRadiusInput) aoRadiusInput.value = ao.radius.toFixed(2);

      const aoMinDistance = document.querySelector('#aoMinDistance');
      const aoMinDistanceInput = document.querySelector('#aoMinDistanceInput');
      if (aoMinDistance) aoMinDistance.value = ao.minDistance;
      if (aoMinDistanceInput) aoMinDistanceInput.value = ao.minDistance.toFixed(3);

      const aoMaxDistance = document.querySelector('#aoMaxDistance');
      const aoMaxDistanceInput = document.querySelector('#aoMaxDistanceInput');
      if (aoMaxDistance) aoMaxDistance.value = ao.maxDistance;
      if (aoMaxDistanceInput) aoMaxDistanceInput.value = ao.maxDistance.toFixed(2);
    }

    if (pp.color) {
      const toneMappingSelect = document.querySelector('#toneMappingSelect');
      if (toneMappingSelect) {
        toneMappingSelect.value = pp.color.toneMapping;
        toneMappingSelect.dispatchEvent(new Event('change'));
      }

      const exposureRange = document.querySelector('#exposureRange');
      const exposureInput = document.querySelector('#exposureInput');
      if (exposureRange) exposureRange.value = pp.color.exposure;
      if (exposureInput) exposureInput.value = pp.color.exposure.toFixed(2);
      renderer.toneMappingExposure = pp.color.exposure;

      const contrastRange = document.querySelector('#contrastRange');
      const contrastInput = document.querySelector('#contrastInput');
      if (contrastRange) contrastRange.value = pp.color.contrast;
      if (contrastInput) contrastInput.value = pp.color.contrast.toFixed(2);
      postShaderPass.uniforms.contrast.value = pp.color.contrast;

      const saturationRange = document.querySelector('#saturationRange');
      const saturationInput = document.querySelector('#saturationInput');
      if (saturationRange) saturationRange.value = pp.color.saturation;
      if (saturationInput) saturationInput.value = pp.color.saturation.toFixed(2);
      postShaderPass.uniforms.saturation.value = pp.color.saturation;
    }
  }

  if (state.lighting) {
    lightingManager.applyLightingState(state.lighting);
  }

  updateCameraPosition();
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getSettingsState()));
  } catch (err) {
    console.error('Failed to save settings:', err);
  }
}

let saveTimer = null;
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveToLocalStorage, 150);
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) applySettingsState(JSON.parse(raw));
  } catch (err) {
    console.error('Failed to parse settings from localStorage:', err);
  }
}

document.querySelector('#bottom-dock').addEventListener('input', scheduleSave);
document.querySelector('#bottom-dock').addEventListener('change', scheduleSave);

const exportSettingsBtn = document.querySelector('#exportSettingsBtn');
if (exportSettingsBtn) {
  exportSettingsBtn.addEventListener('click', () => {
    const data = JSON.stringify(getSettingsState(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `trailpad-settings-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

const importSettingsInput = document.querySelector('#importSettingsInput');
if (importSettingsInput) {
  importSettingsInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target.result);
        applySettingsState(parsed);
        saveToLocalStorage();
      } catch (err) {
        console.warn('Could not import settings:', err);
      }
    };
    reader.readAsText(file);
  });
}

bindSliderAndInput('#emissionIntensity', '#emissionIntensityInput', (val) => {
  buttonEmissionMultiplier = val;
}, 2);

updateIBL();
loadFromLocalStorage();
initModelPersistence();
refreshPads();
loop();

const appApi = {
  setMode(groupId) {
    const activeGroup = document.querySelector('.inspector-group.active');
    const targetGroup = document.getElementById(groupId);
    const inspectorScroll = document.getElementById('inspectorScroll');

    if (activeGroup === targetGroup) {
      if (inspectorScroll) inspectorScroll.scrollTop = 0;
      return;
    }

    if (inspectorScroll) inspectorScroll.scrollTop = 0;

    if (activeGroup && targetGroup) {
      activeGroup.classList.remove('is-visible');
      setTimeout(() => {
        activeGroup.classList.remove('active');
        targetGroup.classList.add('active');
        requestAnimationFrame(() => targetGroup.classList.add('is-visible'));
      }, 0);
    } else if (targetGroup) {
      targetGroup.classList.add('active');
      requestAnimationFrame(() => targetGroup.classList.add('is-visible'));
    }
  },
  loadDefaultScene() {
    clearStoredModel();
    buildProceduralController();
  },
  exportSettings() {
    const data = JSON.stringify(getSettingsState(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trailpad-settings-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },
  resetCamera: cameraApi.resetCamera,
  updateCameraFromBridge: cameraApi.updateCameraFromBridge,
  updateLightFromBridge(data) {
    lightingManager.updateLightFromBridge(data);
  }
};

exposeAppApi(appApi);
registerParentMessageBridge(appApi);