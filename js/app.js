import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { LightTrail } from './trail.js';
import { DEFAULT_IBL_STATE, LOCAL_STORAGE_KEY, createLightConfigState } from './state.js';
import { bindSliderAndInput, exposeAppApi, registerParentMessageBridge } from './uiBridge.js';

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

const STANDARD_BUTTONS = [
  { id: 0, label: 'A / Cross' }, { id: 1, label: 'B / Circle' },
  { id: 2, label: 'X / Square' }, { id: 3, label: 'Y / Triangle' },
  { id: 4, label: 'L1 / LB' }, { id: 5, label: 'R1 / RB' },
  { id: 6, label: 'L2 / LT' }, { id: 7, label: 'R2 / RT' },
  { id: 8, label: 'Select' }, { id: 9, label: 'Start' },
  { id: 10, label: 'L3' }, { id: 11, label: 'R3' },
  { id: 12, label: 'D-Up' }, { id: 13, label: 'D-Down' },
  { id: 14, label: 'D-Left' }, { id: 15, label: 'D-Right' },
  { id: 16, label: 'Home' }
];

const MESH_MAPPINGS = {
  Btn_South: 0, Btn_A: 0, Btn_East: 1, Btn_B: 1,
  Btn_West: 2, Btn_X: 2, Btn_North: 3, Btn_Y: 3,
  Bumper_Left: 4, Bumper_Right: 5, Trigger_Left: 6, Trigger_Right: 7,
  Btn_Select: 8, Btn_Start: 9, Btn_L3: 10, Btn_R3: 11,
  DPad_Up: 12, DPad_Down: 13, DPad_Left: 14, DPad_Right: 15, Btn_Home: 16
};

function getButtonLabel(i) {
  return STANDARD_BUTTONS[i]?.label || `B${i}`;
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
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
const cameraTarget = new THREE.Vector3(0, 0, 0);
let radius = 6.5;
let theta = 0;
let phi = 0.85;
let isUpdatingRotUI = false;

function syncTargetInputs() {
  const x = document.querySelector('#camTargetX');
  const y = document.querySelector('#camTargetY');
  const z = document.querySelector('#camTargetZ');
  if (x) x.value = cameraTarget.x.toFixed(2);
  if (y) y.value = cameraTarget.y.toFixed(2);
  if (z) z.value = cameraTarget.z.toFixed(2);
}

function syncAnglesFromCameraPosition() {
  const offset = new THREE.Vector3().subVectors(camera.position, cameraTarget);
  radius = offset.length();
  if (radius > 0) {
    phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));
    theta = Math.atan2(offset.x, offset.z);
  }
}

function updateCameraPosition(skipRotationUpdate = false) {
  phi = Math.max(0.01, Math.min(Math.PI - 0.01, phi));
  camera.position.x = cameraTarget.x + radius * Math.sin(phi) * Math.sin(theta);
  camera.position.y = cameraTarget.y + radius * Math.cos(phi);
  camera.position.z = cameraTarget.z + radius * Math.sin(phi) * Math.cos(theta);
  camera.lookAt(cameraTarget);

  const camRadius = document.querySelector('#camRadius');
  const camRadiusInput = document.querySelector('#camRadiusInput');
  if (camRadius) camRadius.value = radius;
  if (camRadiusInput) camRadiusInput.value = radius.toFixed(1);

  if (!skipRotationUpdate) {
    isUpdatingRotUI = true;
    const rotX = document.querySelector('#camRotX');
    const rotY = document.querySelector('#camRotY');
    const rotZ = document.querySelector('#camRotZ');
    if (rotX) rotX.value = (camera.rotation.x * (180 / Math.PI)).toFixed(1);
    if (rotY) rotY.value = (camera.rotation.y * (180 / Math.PI)).toFixed(1);
    if (rotZ) rotZ.value = (camera.rotation.z * (180 / Math.PI)).toFixed(1);
    isUpdatingRotUI = false;
  }
}

const syncFov = (val, compensate = true) => {
  const oldFov = camera.fov;
  const fovVal = Math.max(1, Math.min(170, parseFloat(val) || 50));

  if (compensate && oldFov !== fovVal) {
    const toRad = Math.PI / 180;
    const oldHalfFovRad = (oldFov * 0.5) * toRad;
    const newHalfFovRad = (fovVal * 0.5) * toRad;
    radius = radius * (Math.tan(oldHalfFovRad) / Math.tan(newHalfFovRad));
    radius = Math.max(0.5, Math.min(50, radius));
    const camRadius = document.querySelector('#camRadius');
    const camRadiusInput = document.querySelector('#camRadiusInput');
    if (camRadius) camRadius.value = radius;
    if (camRadiusInput) camRadiusInput.value = radius.toFixed(1);
  }

  camera.fov = fovVal;
  camera.updateProjectionMatrix();
  const camFov = document.querySelector('#camFov');
  const camFovInput = document.querySelector('#camFovInput');
  if (camFov) camFov.value = fovVal;
  if (camFovInput) camFovInput.value = fovVal;

  updateCameraPosition(true);
};

const camFov = document.querySelector('#camFov');
const camFovInput = document.querySelector('#camFovInput');
if (camFov) camFov.addEventListener('input', (e) => syncFov(e.target.value));
if (camFovInput) camFovInput.addEventListener('input', (e) => syncFov(e.target.value));

const syncZoom = (val) => {
  radius = Math.max(0.5, Math.min(50, parseFloat(val) || 6.5));
  updateCameraPosition();
};

const camRadius = document.querySelector('#camRadius');
const camRadiusInput = document.querySelector('#camRadiusInput');
if (camRadius) camRadius.addEventListener('input', (e) => syncZoom(e.target.value));
if (camRadiusInput) camRadiusInput.addEventListener('input', (e) => syncZoom(e.target.value));

const updateRotFromInputs = () => {
  if (isUpdatingRotUI) return;
  const rotX = (parseFloat(document.querySelector('#camRotX').value) || 0) * (Math.PI / 180);
  const rotY = (parseFloat(document.querySelector('#camRotY').value) || 0) * (Math.PI / 180);
  const rotZ = (parseFloat(document.querySelector('#camRotZ').value) || 0) * (Math.PI / 180);

  const offset = new THREE.Vector3(0, 0, radius);
  const euler = new THREE.Euler(rotX, rotY, rotZ, 'YXZ');
  offset.applyEuler(euler);

  camera.position.copy(cameraTarget).add(offset);
  camera.lookAt(cameraTarget);
  syncAnglesFromCameraPosition();
};

['X', 'Y', 'Z'].forEach((axis) => {
  const input = document.querySelector(`#camRot${axis}`);
  if (input) input.addEventListener('input', updateRotFromInputs);
});

const updateCamTarget = () => {
  cameraTarget.x = parseFloat(document.querySelector('#camTargetX').value) || 0;
  cameraTarget.y = parseFloat(document.querySelector('#camTargetY').value) || 0;
  cameraTarget.z = parseFloat(document.querySelector('#camTargetZ').value) || 0;
  updateCameraPosition();
};

['X', 'Y', 'Z'].forEach((axis) => {
  const input = document.querySelector(`#camTarget${axis}`);
  if (input) input.addEventListener('input', updateCamTarget);
});

const resetCamBtn = document.querySelector('#resetCamBtn');
if (resetCamBtn) {
  resetCamBtn.addEventListener('click', () => {
    radius = 6.5; theta = 0; phi = 0.85;
    cameraTarget.set(0, 0, 0);
    syncFov(50);
    syncTargetInputs();
    updateCameraPosition();
    saveToLocalStorage();
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    setActiveLight(null);
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

function createMainRenderTarget(samples = 2) {
  return new THREE.WebGLRenderTarget(innerWidth, innerHeight, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    samples
  });
}

let composer = new EffectComposer(renderer, createMainRenderTarget(2));

const renderPass = new RenderPass(scene, camera);
renderPass.clear = true;
renderPass.clearColor = new THREE.Color(0, 0, 0);
renderPass.clearAlpha = 0;
composer.addPass(renderPass);

const aoPass = new SSAOPass(scene, camera, innerWidth, innerHeight);
aoPass.enabled = false; aoPass.kernelRadius = 8; aoPass.minDistance = 0.001; aoPass.maxDistance = 0.1; composer.addPass(aoPass);

const bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 1.0, 0.5, 0.95);
bloomPass.enabled = false; composer.addPass(bloomPass);

const ContrastSaturationShader = {
  uniforms: {
    tDiffuse: { value: null },
    contrast: { value: 1.0 },
    saturation: { value: 1.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float contrast;
    uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      vec3 color = (col.rgb - 0.5) * contrast + 0.5;
      float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
      vec3 grayscale = vec3(luminance);
      color = mix(grayscale, color, saturation);
      gl_FragColor = vec4(color, col.a);
    }`
};

const postShaderPass = new ShaderPass(ContrastSaturationShader);
composer.addPass(postShaderPass);

const fxaaPass = new ShaderPass(FXAAShader);
const pixelRatio = renderer.getPixelRatio();
fxaaPass.material.uniforms.resolution.value.x = 1 / (innerWidth * pixelRatio);
fxaaPass.material.uniforms.resolution.value.y = 1 / (innerHeight * pixelRatio);
composer.addPass(fxaaPass);

const outputPass = new OutputPass();
composer.addPass(outputPass);

const iblState = { ...DEFAULT_IBL_STATE };

class ProceduralIBLEditor {
  constructor(renderer) {
    this.pmremGenerator = new THREE.PMREMGenerator(renderer);
    this.pmremGenerator.compileCubemapShader();
    this.environmentScene = new THREE.Scene();
    this.currentTarget = null;
    this.skyUniforms = {
      skyColor: { value: new THREE.Color() },
      horizonColor: { value: new THREE.Color() },
      groundColor: { value: new THREE.Color() },
      skyLevel: { value: 0 },
      horizonLevel: { value: 0 },
      groundLevel: { value: 0 },
      sun1Color: { value: new THREE.Color() },
      sun1Position: { value: new THREE.Vector3() },
      sun1Size: { value: 1 },
      sun1Intensity: { value: 0 },
      sun1Atmosphere: { value: 0 },
      sun2Color: { value: new THREE.Color() },
      sun2Position: { value: new THREE.Vector3() },
      sun2Size: { value: 1.25 },
      sun2Intensity: { value: 0 },
      sun2Atmosphere: { value: 0.5 }
    };

    const material = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 skyColor, horizonColor, groundColor;
        uniform float skyLevel, horizonLevel, groundLevel;
        uniform vec3 sun1Color, sun1Position, sun2Color, sun2Position;
        uniform float sun1Size, sun1Intensity, sun1Atmosphere;
        uniform float sun2Size, sun2Intensity, sun2Atmosphere;
        varying vec3 vWorldPosition;
        vec3 sun(vec3 direction, vec3 position, vec3 color, float size, float intensity, float atmosphere) {
          float alignment = dot(direction, normalize(position));
          float exponent = mix(8000.0 / (size * size), 2.0 / size, clamp(atmosphere, 0.0, 1.0));
          float glow = pow(max(alignment, 0.0), exponent);
          float disk = step(1.0 - (0.0005 * size), alignment);
          return color * intensity * mix(disk, glow * (1.0 + atmosphere * 3.0), atmosphere);
        }
        void main() {
          vec3 direction = normalize(vWorldPosition);
          float height = direction.y;
          vec3 upper = mix(horizonColor, skyColor, smoothstep(horizonLevel, skyLevel, height));
          vec3 lower = mix(horizonColor, groundColor, smoothstep(horizonLevel, groundLevel, height));
          vec3 color = height >= horizonLevel ? upper : lower;
          color += sun(direction, sun1Position, sun1Color, sun1Size, sun1Intensity, sun1Atmosphere);
          color += sun(direction, sun2Position, sun2Color, sun2Size, sun2Intensity, sun2Atmosphere);
          gl_FragColor = vec4(color, 1.0);
        }`
    });

    this.environmentScene.add(new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), material));
    this.ringGeometry = new THREE.TorusGeometry(1.5, 0.05, 16, 64);
    this.ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.ringMesh = new THREE.Mesh(this.ringGeometry, this.ringMaterial);
    this.ringMesh.rotation.x = Math.PI / 2;
    this.environmentScene.add(this.ringMesh);
  }

  update(state) {
    const u = this.skyUniforms;
    u.skyColor.value.set(state.skyColor);
    u.horizonColor.value.set(state.horizonColor);
    u.groundColor.value.set(state.groundColor);
    u.skyLevel.value = state.skyLevel;
    u.horizonLevel.value = state.horizonLevel;
    u.groundLevel.value = state.groundLevel;

    [1, 2].forEach((index) => {
      const elevation = THREE.MathUtils.degToRad(90 - state[`sun${index}Elevation`]);
      const azimuth = THREE.MathUtils.degToRad(state[`sun${index}Azimuth`]);
      u[`sun${index}Position`].value.setFromSphericalCoords(100, elevation, azimuth);
      u[`sun${index}Color`].value.set(state[`sun${index}Color`]);
      u[`sun${index}Size`].value = state[`sun${index}Size`] ?? (index === 1 ? 1 : 1.5);
      u[`sun${index}Intensity`].value = state[`sun${index}Visible`] ? state[`sun${index}Intensity`] : 0;
      u[`sun${index}Atmosphere`].value = state[`sun${index}Atmosphere`] ?? (index === 1 ? 0.5 : 0.7);
    });

    this.ringMesh.visible = state.ringVisible;
    this.ringMesh.position.y = state.ringHeight;
    this.ringMaterial.color.set(state.ringColor).multiplyScalar(state.ringIntensity);

    const newTarget = this.pmremGenerator.fromScene(this.environmentScene);
    if (this.currentTarget) this.currentTarget.dispose();
    this.currentTarget = newTarget;

    scene.environment = state.enabled ? newTarget.texture : null;
    scene.environmentIntensity = state.enabled ? state.intensity : 0;
    scene.background = state.enabled && state.background ? newTarget.texture : null;
    this.renderPreview(state);
  }

  renderPreview(state) {
    const canvas = document.querySelector('#iblPreview');
    if (!canvas) return;
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, state.skyColor);
    gradient.addColorStop(Math.max(0, Math.min(1, 0.5 - state.horizonLevel / 2)), state.horizonColor);
    gradient.addColorStop(1, state.groundColor);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}

const proceduralIBLEditor = new ProceduralIBLEditor(renderer);

function updateIBL() {
  proceduralIBLEditor.update(iblState);
}

function bindIBLControl(id, key, type = 'float') {
  const element = document.querySelector(`#${id}`);
  const valueElement = document.querySelector(`#${id}Value`);
  if (!element) return;
  element.addEventListener(type === 'boolean' ? 'change' : 'input', () => {
    iblState[key] = type === 'boolean' ? element.checked : (type === 'color' ? element.value : parseFloat(element.value));
    if (valueElement) valueElement.textContent = type === 'integer' ? String(iblState[key]) : iblState[key].toFixed(type === 'float' ? 2 : 1);
    updateIBL();
  });
}

[
  ['iblEnabled', 'enabled', 'boolean'], ['iblBackground', 'background', 'boolean'],
  ['iblSkyColor', 'skyColor', 'color'], ['iblSkyLevel', 'skyLevel'],
  ['iblHorizonColor', 'horizonColor', 'color'], ['iblHorizonLevel', 'horizonLevel'],
  ['iblGroundColor', 'groundColor', 'color'], ['iblGroundLevel', 'groundLevel'],
  ['iblSun1Visible', 'sun1Visible', 'boolean'], ['iblSun1Color', 'sun1Color', 'color'],
  ['iblSun1Elevation', 'sun1Elevation', 'integer'], ['iblSun1Azimuth', 'sun1Azimuth', 'integer'],
  ['iblSun1Size', 'sun1Size'], ['iblSun1Intensity', 'sun1Intensity'], ['iblSun1Atmosphere', 'sun1Atmosphere'],
  ['iblSun2Visible', 'sun2Visible', 'boolean'], ['iblSun2Color', 'sun2Color', 'color'],
  ['iblSun2Elevation', 'sun2Elevation', 'integer'], ['iblSun2Azimuth', 'sun2Azimuth', 'integer'],
  ['iblSun2Size', 'sun2Size'], ['iblSun2Intensity', 'sun2Intensity'], ['iblSun2Atmosphere', 'sun2Atmosphere'],
  ['iblRingVisible', 'ringVisible', 'boolean'], ['iblRingColor', 'ringColor', 'color'], ['iblRingHeight', 'ringHeight'], ['iblRingIntensity', 'ringIntensity']
].forEach(([id, key, type]) => bindIBLControl(id, key, type));

bindSliderAndInput('#iblIntensity', '#iblIntensityInput', (value) => {
  iblState.intensity = value;
  updateIBL();
}, 2);

function updateAntiAliasing() {
  const enabled = document.querySelector('#aaToggle').checked;
  const mode = document.querySelector('#aaQualitySelect').value;

  fxaaPass.enabled = enabled;

  let samples = 0;
  if (enabled) {
    if (mode.includes('2msaa')) samples = 2;
    else if (mode.includes('4msaa')) samples = 4;
    else if (mode.includes('8msaa')) samples = 8;
  }

  const oldTarget = composer.renderTarget1;
  composer.reset(createMainRenderTarget(samples));
  oldTarget.dispose();
}

document.querySelector('#aaToggle').addEventListener('change', updateAntiAliasing);
document.querySelector('#aaQualitySelect').addEventListener('change', updateAntiAliasing);

document.querySelector('#shadowQualitySelect').addEventListener('change', (e) => {
  const res = parseInt(e.target.value, 10);
  lightsMap.forEach((entry) => {
    if (entry.instance.shadow) {
      entry.instance.shadow.mapSize.width = res;
      entry.instance.shadow.mapSize.height = res;
      if (entry.instance.shadow.map) {
        entry.instance.shadow.map.dispose();
        entry.instance.shadow.map = null;
      }
    }
  });
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

updateCameraPosition();

let isMouseDown = false;
let activeMouseButton = -1;
let previousMousePosition = { x: 0, y: 0 };
let activeLightId = null;
const lightSpherical = new THREE.Spherical();
const panRight = new THREE.Vector3();
const panUp = new THREE.Vector3();
const panForward = new THREE.Vector3();

window.addEventListener('contextmenu', (e) => e.preventDefault());
renderer.domElement.addEventListener('mousedown', (e) => {
  setActiveLight(null);

  isMouseDown = true;
  activeMouseButton = e.button;
  previousMousePosition = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mouseup', () => {
  if (isMouseDown) saveToLocalStorage();
  isMouseDown = false;
  activeMouseButton = -1;
});

window.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const deltaX = e.clientX - previousMousePosition.x;
  const deltaY = e.clientY - previousMousePosition.y;

  if (activeMouseButton === 0) {
    if (activeLightId && lightsMap.has(activeLightId)) {
      const entry = lightsMap.get(activeLightId);
      const light = entry.instance;
      const rotSpeed = 0.01;

      lightSpherical.setFromVector3(light.position);
      lightSpherical.theta -= deltaX * rotSpeed;
      lightSpherical.phi = Math.max(0.01, Math.min(Math.PI - 0.01, lightSpherical.phi + deltaY * rotSpeed));
      light.position.setFromSpherical(lightSpherical);

      entry.config.pos = [light.position.x, light.position.y, light.position.z];
      const card = document.querySelector(`#light-card-${activeLightId}`);
      if (card) {
        const posX = card.querySelector(`#${activeLightId}-pos-x`);
        const posY = card.querySelector(`#${activeLightId}-pos-y`);
        const posZ = card.querySelector(`#${activeLightId}-pos-z`);
        if (posX) posX.value = light.position.x.toFixed(1);
        if (posY) posY.value = light.position.y.toFixed(1);
        if (posZ) posZ.value = light.position.z.toFixed(1);
      }
    } else {
      theta -= deltaX * 0.008;
      phi -= deltaY * 0.008;
      updateCameraPosition();
    }
  } else if (activeMouseButton === 1) {
    const panSpeed = radius * 0.0015;
    camera.matrix.extractBasis(panRight, panUp, panForward);

    panRight.multiplyScalar(-deltaX * panSpeed);
    panUp.multiplyScalar(deltaY * panSpeed);

    cameraTarget.add(panRight).add(panUp);
    syncTargetInputs();
    updateCameraPosition();
  } else if (activeMouseButton === 2) {
    syncFov(camera.fov + deltaY * 0.1);
  }
  previousMousePosition = { x: e.clientX, y: e.clientY };
});

renderer.domElement.addEventListener('wheel', (e) => {
  e.preventDefault();
  syncZoom(radius + e.deltaY * 0.0075);
  scheduleSave();
}, { passive: false });

const lightsMap = new Map();
const lightConfigs = createLightConfigState();

function createLightInstance(config) {
  let light;
  const col = new THREE.Color(config.color);
  const currentRes = parseInt(document.querySelector('#shadowQualitySelect')?.value || 2048, 10);

  switch (config.type) {
    case 'DirectionalLight':
      light = new THREE.DirectionalLight(col, config.intensity);
      break;
    case 'PointLight':
      light = new THREE.PointLight(col, config.intensity, 10);
      break;
    case 'SpotLight':
      light = new THREE.SpotLight(col, config.intensity);
      break;
    default:
      light = new THREE.HemisphereLight(col, new THREE.Color(config.groundColor || 0x080b12), config.intensity);
      break;
  }

  light.position.set(...config.pos);
  if (config.rot) light.rotation.set(...config.rot);

  if (light.shadow) {
    light.castShadow = !!config.castShadow;
    light.shadow.mapSize.width = currentRes;
    light.shadow.mapSize.height = currentRes;
    light.shadow.bias = config.softShadow ? -0.0005 : -0.001;
    light.shadow.radius = config.softShadow ? 3 : 1;
  }
  return light;
}

lightConfigs.forEach((cfg) => {
  const light = createLightInstance(cfg);
  scene.add(light);
  lightsMap.set(cfg.id, { instance: light, config: cfg });
});

function setActiveLight(id) {
  if (activeLightId === id && id !== null) {
    activeLightId = null;
  } else {
    activeLightId = id;
  }

  document.querySelectorAll('.light-card').forEach((c) => c.classList.remove('active-light-target'));
  if (activeLightId) {
    const card = document.querySelector(`#light-card-${activeLightId}`);
    if (card) card.classList.add('active-light-target');
  }
}

function renderLightingDock() {
  const container = document.querySelector('#dockContent');
  if (!container) return;
  container.innerHTML = '';

  lightConfigs.forEach((cfg) => {
    const entry = lightsMap.get(cfg.id);
    const card = document.createElement('div');
    card.className = 'light-card';
    card.id = `light-card-${cfg.id}`;

    card.addEventListener('mousedown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'LABEL') return;
      e.stopPropagation();
      setActiveLight(cfg.id);
    });

    const supportsShadow = cfg.type !== 'HemisphereLight';
    card.innerHTML = `
      <div class="light-card-header" style="cursor:pointer;">
        <label><input type="checkbox" id="${cfg.id}-toggle" checked> ${cfg.name}</label>
      </div>
      <div class="control-row">
        <label>Type</label>
        <select id="${cfg.id}-type" class="light-type-select">
          <option value="DirectionalLight" ${cfg.type === 'DirectionalLight' ? 'selected' : ''}>Directional</option>
          <option value="PointLight" ${cfg.type === 'PointLight' ? 'selected' : ''}>Point</option>
          <option value="SpotLight" ${cfg.type === 'SpotLight' ? 'selected' : ''}>Spot</option>
          <option value="HemisphereLight" ${cfg.type === 'HemisphereLight' ? 'selected' : ''}>Hemisphere</option>
        </select>
      </div>
      <div class="control-row">
        <label>Intensity</label>
        <input type="range" id="${cfg.id}-intensity" min="0" max="5" step="0.1" value="${cfg.intensity}">
        <input type="number" id="${cfg.id}-intensity-input" min="0" max="10" step="0.1" value="${cfg.intensity.toFixed(1)}" style="width:50px; text-align:right; cursor:ew-resize;">
      </div>
      <div class="control-row"><label>Color</label><input type="color" id="${cfg.id}-color" value="${cfg.color}"></div>
      <div class="control-row">
        <label>Pos (X,Y,Z)</label>
        <div class="pos-inputs">
          <input type="number" id="${cfg.id}-pos-x" value="${cfg.pos[0]}" step="0.5">
          <input type="number" id="${cfg.id}-pos-y" value="${cfg.pos[1]}" step="0.5">
          <input type="number" id="${cfg.id}-pos-z" value="${cfg.pos[2]}" step="0.5">
        </div>
      </div>
      <div class="control-row">
        <label>Rot (X,Y,Z)</label>
        <div class="pos-inputs">
          <input type="number" id="${cfg.id}-rot-x" value="${Math.round((cfg.rot?.[0] || 0) * 180 / Math.PI)}" step="5">
          <input type="number" id="${cfg.id}-rot-y" value="${Math.round((cfg.rot?.[1] || 0) * 180 / Math.PI)}" step="5">
          <input type="number" id="${cfg.id}-rot-z" value="${Math.round((cfg.rot?.[2] || 0) * 180 / Math.PI)}" step="5">
        </div>
      </div>
      ${supportsShadow ? `
      <div class="control-row" style="margin-top:4px; border-top: 1px solid #1a202a; padding-top:4px;">
        <label>Shadows</label>
        <input type="checkbox" id="${cfg.id}-shadow" ${cfg.castShadow ? 'checked' : ''}>
      </div>
      <div class="control-row">
        <label>Soft Shadows</label>
        <input type="checkbox" id="${cfg.id}-soft-shadow" ${cfg.softShadow ? 'checked' : ''} ${!cfg.castShadow ? 'disabled' : ''}>
      </div>
      ` : ''}
    `;

    container.appendChild(card);

    card.querySelector('.light-card-header').addEventListener('click', () => setActiveLight(cfg.id));
    card.querySelector(`#${cfg.id}-toggle`).addEventListener('change', (e) => { entry.instance.visible = e.target.checked; });

    const intRange = card.querySelector(`#${cfg.id}-intensity`);
    const intInput = card.querySelector(`#${cfg.id}-intensity-input`);

    intRange.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      entry.instance.intensity = val;
      cfg.intensity = val;
      intInput.value = val.toFixed(1);
    });

    intInput.addEventListener('input', (e) => {
      const val = Math.max(0, Math.min(10, parseFloat(e.target.value) || 0));
      entry.instance.intensity = val;
      cfg.intensity = val;
      intRange.value = val;
    });

    card.querySelector(`#${cfg.id}-color`).addEventListener('input', (e) => {
      cfg.color = e.target.value;
      entry.instance.color.set(e.target.value);
    });

    card.querySelector(`#${cfg.id}-type`).addEventListener('change', (e) => {
      cfg.type = e.target.value;
      scene.remove(entry.instance);
      if (entry.instance.dispose) entry.instance.dispose();
      const newLight = createLightInstance(cfg);
      scene.add(newLight);
      entry.instance = newLight;
      renderLightingDock();
    });

    const updatePos = () => {
      const x = parseFloat(card.querySelector(`#${cfg.id}-pos-x`).value) || 0;
      const y = parseFloat(card.querySelector(`#${cfg.id}-pos-y`).value) || 0;
      const z = parseFloat(card.querySelector(`#${cfg.id}-pos-z`).value) || 0;
      cfg.pos = [x, y, z];
      entry.instance.position.set(x, y, z);
    };
    ['x', 'y', 'z'].forEach((axis) => card.querySelector(`#${cfg.id}-pos-${axis}`).addEventListener('input', updatePos));

    const updateRot = () => {
      const rx = (parseFloat(card.querySelector(`#${cfg.id}-rot-x`).value) || 0) * Math.PI / 180;
      const ry = (parseFloat(card.querySelector(`#${cfg.id}-rot-y`).value) || 0) * Math.PI / 180;
      const rz = (parseFloat(card.querySelector(`#${cfg.id}-rot-z`).value) || 0) * Math.PI / 180;
      cfg.rot = [rx, ry, rz];
      entry.instance.rotation.set(rx, ry, rz);
    };
    ['x', 'y', 'z'].forEach((axis) => card.querySelector(`#${cfg.id}-rot-${axis}`).addEventListener('input', updateRot));

    if (supportsShadow) {
      const shadowCb = card.querySelector(`#${cfg.id}-shadow`);
      const softCb = card.querySelector(`#${cfg.id}-soft-shadow`);

      shadowCb.addEventListener('change', (e) => {
        cfg.castShadow = e.target.checked;
        entry.instance.castShadow = cfg.castShadow;
        softCb.disabled = !cfg.castShadow;
      });

      softCb.addEventListener('change', (e) => {
        cfg.softShadow = e.target.checked;
        if (entry.instance.shadow) {
          entry.instance.shadow.radius = cfg.softShadow ? 3 : 1;
          entry.instance.shadow.bias = cfg.softShadow ? -0.0005 : -0.001;
        }
      });
    }
  });
}

renderLightingDock();

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
let trailOffsetY = 1.8;
let trail = null;
let trailAnchor = null;

let buttonEmissionColor = new THREE.Color(0xffffff);
const emissionColor = document.querySelector('#emissionColor');
if (emissionColor) emissionColor.addEventListener('input', (e) => {
  buttonEmissionColor.set(e.target.value);
});

function destroyTrail() {
  if (!trail) return;
  trail.destroy();
  trail = null;
  trailAnchor = null;
}

function syncTrailTarget() {
  const target = leftStick3DGroup || null;

  if (!target) {
    destroyTrail();
    return;
  }

  if (!trailAnchor) {
    trailAnchor = new THREE.Object3D();
    trailAnchor.position.set(0, trailOffsetY, 0);
    trail = new LightTrail(trailAnchor, scene, {
      camera,
      length: 10,
      width: 0.05,
      colorStart: 0xaa0022,
      colorEnd: 0x00aaaa
    });
  }

  if (trailAnchor.parent !== target) {
    if (trailAnchor.parent) trailAnchor.parent.remove(trailAnchor);
    target.add(trailAnchor);
  }

  trailAnchor.position.set(0, trailOffsetY, 0);
  trail.mesh.visible = true;
}

bindSliderAndInput('#trailOffset', '#trailOffsetInput', (val) => {
  trailOffsetY = val;
  if (trailAnchor) trailAnchor.position.y = trailOffsetY;
  if (trail) trail.mesh.visible = !!leftStick3DGroup;
  if (leftStick3DGroup) syncTrailTarget();
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
  destroyTrail();
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
  syncTrailTarget();

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
    syncTrailTarget();
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

let pads = [], selectedIndex = null, lastSnapshot = null;

function refreshPads() {
  pads = navigator.getGamepads ? Array.from(navigator.getGamepads()).filter(Boolean) : [];
  const sel = document.querySelector('#padSelect');
  const old = selectedIndex;
  if (!sel) return;
  sel.innerHTML = '';
  if (!pads.length) {
    sel.innerHTML = '<option>No controller detected</option>';
    selectedIndex = null; setStatus(false); return;
  }
  pads.forEach((pad) => {
    const option = document.createElement('option');
    option.value = pad.index; option.textContent = `#${pad.index} — ${pad.id}`;
    sel.appendChild(option);
  });
  selectedIndex = pads.some((pad) => pad.index === old) ? old : pads[0].index;
  sel.value = selectedIndex;
  setStatus(true);
}

function selectedPad() {
  return navigator.getGamepads?.()[selectedIndex] || null;
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
  const gamepads = navigator.getGamepads?.() || [];
  const pad = selectedIndex === null ? null : gamepads[selectedIndex] || null;
  if (pad) {
    setStatus(true);
    processPad(pad);
  } else if (selectedIndex !== null) {
    setStatus(false);
  }

  if (trail) trail.update();
  composer.render();
}

const padSelect = document.querySelector('#padSelect');
if (padSelect) padSelect.addEventListener('change', (e) => { selectedIndex = Number(e.target.value); lastSnapshot = null; });

const scanBtn = document.querySelector('#scan');
if (scanBtn) scanBtn.onclick = refreshPads;

const rumbleBtn = document.querySelector('#rumble');
if (rumbleBtn) {
  rumbleBtn.onclick = async () => {
    const pad = selectedPad();
    if (!pad?.vibrationActuator) return;
    try {
      await pad.vibrationActuator.playEffect('dual-rumble', { duration: 180, strongMagnitude: 0.65, weakMagnitude: 0.35 });
    } catch (err) {
      console.warn('Rumble failed:', err);
    }
  };
}

window.addEventListener('gamepadconnected', () => refreshPads());
window.addEventListener('gamepaddisconnected', () => refreshPads());
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  aoPass.setSize(innerWidth, innerHeight);

  const pr = renderer.getPixelRatio();
  fxaaPass.material.uniforms.resolution.value.x = 1 / (innerWidth * pr);
  fxaaPass.material.uniforms.resolution.value.y = 1 / (innerHeight * pr);
});

function getSettingsState() {
  return {
    camera: {
      fov: parseFloat(document.querySelector('#camFov').value),
      radius,
      theta,
      phi,
      target: [cameraTarget.x, cameraTarget.y, cameraTarget.z]
    },
    model: {
      scale: parseFloat(document.querySelector('#modelScale').value),
      emissionIntensity: parseFloat(document.querySelector('#emissionIntensity').value),
      trailOffsetY,
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
    lighting: lightConfigs.map((cfg) => ({
      id: cfg.id,
      type: cfg.type,
      color: cfg.color,
      intensity: cfg.intensity,
      pos: [...cfg.pos],
      rot: [...cfg.rot],
      castShadow: cfg.castShadow,
      softShadow: cfg.softShadow
    })),
    ibl: { ...iblState }
  };
}

function applyIBLState(state) {
  Object.assign(iblState, DEFAULT_IBL_STATE, state || {});
  Object.entries(iblState).forEach(([key, value]) => {
    const elementMap = {
      enabled: 'iblEnabled', background: 'iblBackground', intensity: 'iblIntensity',
      skyColor: 'iblSkyColor', skyLevel: 'iblSkyLevel', horizonColor: 'iblHorizonColor',
      horizonLevel: 'iblHorizonLevel', groundColor: 'iblGroundColor', groundLevel: 'iblGroundLevel',
      sun1Visible: 'iblSun1Visible', sun1Color: 'iblSun1Color', sun1Elevation: 'iblSun1Elevation',
      sun1Azimuth: 'iblSun1Azimuth', sun1Size: 'iblSun1Size', sun1Intensity: 'iblSun1Intensity',
      sun1Atmosphere: 'iblSun1Atmosphere', sun2Visible: 'iblSun2Visible', sun2Color: 'iblSun2Color',
      sun2Elevation: 'iblSun2Elevation', sun2Azimuth: 'iblSun2Azimuth', sun2Size: 'iblSun2Size',
      sun2Intensity: 'iblSun2Intensity', sun2Atmosphere: 'iblSun2Atmosphere',
      ringVisible: 'iblRingVisible', ringColor: 'iblRingColor', ringHeight: 'iblRingHeight', ringIntensity: 'iblRingIntensity'
    };
    const element = document.querySelector(`#${elementMap[key] || ''}`);
    if (element) {
      if (element.type === 'checkbox') element.checked = value;
      else element.value = value;
    }
    const valueElement = document.querySelector(`#${elementMap[key] || ''}Value`);
    if (valueElement && typeof value === 'number') valueElement.textContent = Number.isInteger(value) ? String(value) : value.toFixed(2);
  });

  const iblIntensityInput = document.querySelector('#iblIntensityInput');
  if (iblIntensityInput) iblIntensityInput.value = iblState.intensity.toFixed(2);
  updateIBL();
}

function applySettingsState(state) {
  if (!state) return;

  if (state.ibl) applyIBLState(state.ibl);

  if (state.camera) {
    if (state.camera.fov !== undefined) syncFov(state.camera.fov, false);
    if (state.camera.radius !== undefined) radius = state.camera.radius;
    if (state.camera.theta !== undefined) theta = state.camera.theta;
    if (state.camera.phi !== undefined) phi = state.camera.phi;
    if (state.camera.target) {
      cameraTarget.set(...state.camera.target);
      syncTargetInputs();
    }
  }

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
      trailOffsetY = state.model.trailOffsetY;
      const trailOffset = document.querySelector('#trailOffset');
      const trailOffsetInput = document.querySelector('#trailOffsetInput');
      if (trailOffset) trailOffset.value = trailOffsetY;
      if (trailOffsetInput) trailOffsetInput.value = trailOffsetY.toFixed(2);
      if (trailAnchor) trailAnchor.position.y = trailOffsetY;
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

  if (state.lighting && Array.isArray(state.lighting)) {
    state.lighting.forEach((savedCfg) => {
      const match = lightConfigs.find((cfg) => cfg.id === savedCfg.id);
      if (match) {
        Object.assign(match, savedCfg);
        const entry = lightsMap.get(match.id);
        if (entry) {
          scene.remove(entry.instance);
          if (entry.instance.dispose) entry.instance.dispose();
          entry.instance = createLightInstance(match);
          scene.add(entry.instance);
        }
      }
    });
    renderLightingDock();
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
  resetCamera() {
    radius = 6.5; theta = 0; phi = 0.85;
    cameraTarget.set(0, 0, 0);
    syncFov(50);
    syncTargetInputs();
    updateCameraPosition();
    saveToLocalStorage();
  },
  updateCameraFromBridge(data) {
    if (data.value !== undefined && typeof data.value === 'number') {
      if (data.control === 'camera-fov') syncFov(data.value);
      if (data.control === 'camera-zoom') syncZoom(data.value);
    }
  },
  updateLightFromBridge(data) {
    if (!data || data.lightIndex === undefined) return;
    const config = lightConfigs[data.lightIndex];
    if (!config) return;
    const field = data.field || '';
    if (field.includes('Intensity')) {
      config.intensity = Number(data.value) || 0;
      const entry = lightsMap.get(config.id);
      if (entry) entry.instance.intensity = config.intensity;
    }
  }
};

exposeAppApi(appApi);
registerParentMessageBridge(appApi);
