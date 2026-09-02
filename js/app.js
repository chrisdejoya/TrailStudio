import * as THREE from 'three';
import { TrailManager } from './trail.js';
import { DEFAULT_IBL_STATE, LOCAL_STORAGE_KEY } from './state.js';
import { bindSliderAndInput, exposeAppApi, registerParentMessageBridge } from './uiBridge.js';
import { ProceduralIBLEditor } from './ibl.js';
import { setupIBLControls, applyIBLStateToUI } from './iblControls.js';
import { createPostProcessing } from './postProcessing.js';
import { GamepadManager } from './gamepadManager.js';
import { LightingManager } from './lightingManager.js';
import { DiagnosticsPanel } from './diagnosticsPanel.js';
import { ModelManager } from './modelManager.js';
import { ButtonLabelManager, SVG_PRESETS } from './buttonLabels.js';

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
  cameraApi,
  setTargetModelGroup,
  getFpsLimitState
} from './cameraControls.js';

// Button names shared between functions
const BUTTON_NAMES = [
  'South / A / Cross', 'East / B / Circle', 'West / X / Square', 'North / Y / Triangle',
  'L1 / LB', 'R1 / RB', 'L2 / LT', 'R2 / RT',
  'Select / Back', 'Start', 'L3', 'R3',
  'D-Pad Up', 'D-Pad Down', 'D-Pad Left', 'D-Pad Right', 'Home / Guide'
];

/* ================================================================= IndexedDB Storage ================================================================= */
const DB_NAME = 'TrailStudio';
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

async function verifyPermission(fileHandle) {
  const options = { mode: 'read' };
  if ((await fileHandle.queryPermission(options)) === 'granted') return true;
  if ((await fileHandle.requestPermission(options)) === 'granted') return true;
  return false;
}

/* ================================================================= Three.js Scene & Engine Setup ================================================================= */
const app = document.querySelector('#app');
const scene = new THREE.Scene();

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

// Managers Setup
const diagnosticsPanel = new DiagnosticsPanel();
const lightingManager = new LightingManager(scene);
const proceduralIBLEditor = new ProceduralIBLEditor(renderer, scene);
const iblState = { ...DEFAULT_IBL_STATE };

const controllerGroup = new THREE.Group();
controllerGroup.rotation.x = 0.30;
scene.add(controllerGroup);
setTargetModelGroup(controllerGroup);

let buttonEmissionMultiplier = 1.0;
let buttonEmissionColor = new THREE.Color(0xffffff);
const trailManager = new TrailManager(scene, camera);
const modelManager = new ModelManager(controllerGroup, trailManager, () => {});

const gamepadManager = new GamepadManager({
  hudUI: diagnosticsPanel.getHudUI(),
  meshMappings: modelManager.MESH_MAPPINGS,
  onPadChange: () => {
    refreshPads();
    diagnosticsPanel.resetSnapshot();
  }
});

// Button Label Manager
let buttonLabelManager = null;
function createButtonLabelManager() {
  if (buttonLabelManager) {
    buttonLabelManager.dispose();
  }
  buttonLabelManager = new ButtonLabelManager(controllerGroup, camera, renderer, {
    onConfigChange: scheduleSave
  });
  // Sync existing buttons
  for (const [index, entry] of Object.entries(modelManager.buttons3D)) {
    const idx = parseInt(index);
    buttonLabelManager.setButtonObject(idx, entry.node, modelManager.basePositions[idx]);
  }
  wireButtonLabelUI();
}

// Call after model is loaded
const originalOnModelLoaded = modelManager.onModelLoaded;
modelManager.onModelLoaded = () => {
  if (originalOnModelLoaded) originalOnModelLoaded();
  createButtonLabelManager();
};

// Also sync when register3DButton is called (for dynamic additions)
const originalRegister3DButton = modelManager.register3DButton.bind(modelManager);
modelManager.register3DButton = (index, node, isStick, emissiveTargets) => {
  originalRegister3DButton(index, node, isStick, emissiveTargets);
  if (buttonLabelManager) {
    buttonLabelManager.setButtonObject(index, node, modelManager.basePositions[index]);
  }
};

/* ================================================================= Global Number Input Scrubbing Logic ================================================================= */
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

/* ================================================================= UI & Inspector Event Bindings ================================================================= */

// Shortcut Listeners
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightingManager.setActiveLight(null);
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const hud = document.querySelector('#hud');
    const inspector = document.querySelector('#inspector-shell');
    const isHidden = (hud && hud.style.display === 'none');
    if (hud) hud.style.display = isHidden ? 'flex' : 'none';
    if (inspector) inspector.style.display = isHidden ? 'flex' : 'none';
  }
});

window.addEventListener('contextmenu', (e) => e.preventDefault());

renderer.domElement.addEventListener('mousedown', (e) => {
  lightingManager.setActiveLight(null);
  handleCameraMouseDown(e);
  trailManager.setDragging(true);
});

window.addEventListener('mouseup', () => {
  trailManager.setDragging(false);
  saveToLocalStorage();
});

window.addEventListener('mousemove', (e) => {
  handleCameraMouseMove(e, lightingManager.activeLightId, lightingManager.lightsMap);
});

renderer.domElement.addEventListener('wheel', (e) => {
  handleCameraWheel(e, scheduleSave);
}, { passive: false });

window.addEventListener('resize', () => {
  handleCameraResize();
  renderer.setSize(innerWidth, innerHeight);
  resizePostProcessing(innerWidth, innerHeight);
  if (buttonLabelManager) buttonLabelManager.onResize();
});

// Settings / LocalStorage Triggers
const inspectorShellElem = document.querySelector('#inspector-shell');
if (inspectorShellElem) {
  inspectorShellElem.addEventListener('input', scheduleSave);
  inspectorShellElem.addEventListener('change', scheduleSave);
}

/* ================================================================= Control Wiring & Configuration ================================================================= */
function updateIBL() {
  proceduralIBLEditor.update(iblState);
}
setupIBLControls(iblState, updateIBL);
setupCameraInputs(saveToLocalStorage);
lightingManager.renderLightingDock();

// Post-processing UI Bindings
document.querySelector('#aaToggle').addEventListener('change', updateAntiAliasing);
document.querySelector('#aaQualitySelect').addEventListener('change', updateAntiAliasing);
document.querySelector('#shadowQualitySelect').addEventListener('change', (e) => lightingManager.updateShadowQuality(e.target.value));

document.querySelector('#bloomToggle').addEventListener('change', (e) => { bloomPass.enabled = e.target.checked; });
bindSliderAndInput('#bloomStrength', '#bloomStrengthInput', (val) => { bloomPass.strength = val; }, 2);
bindSliderAndInput('#bloomRadius', '#bloomRadiusInput', (val) => { bloomPass.radius = val; }, 2);
bindSliderAndInput('#bloomThreshold', '#bloomThresholdInput', (val) => { bloomPass.threshold = val; }, 2);

document.querySelector('#aoToggle').addEventListener('change', (e) => { aoPass.enabled = e.target.checked; });
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

// Model Control UI Bindings
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

const emissionColorElem = document.querySelector('#emissionColor');
if (emissionColorElem) {
  emissionColorElem.addEventListener('input', (e) => {
    buttonEmissionColor.set(e.target.value);
  });
}

bindSliderAndInput('#trailOffset', '#trailOffsetInput', (val) => {
  trailManager.setOffsetY(val);
  trailManager.syncTarget(modelManager.leftStick3DGroup);
}, 2);

bindSliderAndInput('#trailRadius', '#trailRadiusInput', (val) => {
  trailManager.setRadius(val);
}, 2);

bindSliderAndInput('#trailIntensity', '#trailIntensityInput', (val) => {
  trailManager.setIntensity(val);
}, 2);

bindSliderAndInput('#trailWidth', '#trailWidthInput', (val) => {
  trailManager.setWidth(val);
}, 3);

bindSliderAndInput('#trailLength', '#trailLengthInput', (val) => {
  trailManager.setLength(val);
}, 2);

const trailColorStart = document.querySelector('#trailColorStart');
if (trailColorStart) {
  trailColorStart.addEventListener('input', (e) => {
    trailManager.setColorStart(e.target.value);
  });
}

const trailColorEnd = document.querySelector('#trailColorEnd');
if (trailColorEnd) {
  trailColorEnd.addEventListener('input', (e) => {
    trailManager.setColorEnd(e.target.value);
  });
}

const trailEnabled = document.querySelector('#trailEnabled');
if (trailEnabled) {
  trailEnabled.addEventListener('change', (e) => {
    trailManager.setEnabled(e.target.checked);
  });
}

bindSliderAndInput('#emissionIntensity', '#emissionIntensityInput', (val) => {
  buttonEmissionMultiplier = val;
}, 2);

const boneVisibilityToggle = document.querySelector('#boneVisibilityToggle');
if (boneVisibilityToggle) {
  boneVisibilityToggle.addEventListener('change', (e) => {
    modelManager.setBoneVisibility(e.target.checked);
  });
}

const syncLeftStickDpadToggle = document.querySelector('#syncLeftStickDpadToggle');
if (syncLeftStickDpadToggle) {
  syncLeftStickDpadToggle.addEventListener('change', (e) => {
    modelManager.setSyncLeftStickDpad(e.target.checked);
  });
}

// Button Labels UI Wiring
function wireButtonLabelUI() {
  if (!buttonLabelManager) return;

  const enabledEl = document.querySelector('#buttonLabelsEnabled');
  if (enabledEl) {
    enabledEl.addEventListener('change', (e) => buttonLabelManager.setEnabled(e.target.checked));
  }

  const fontSelect = document.querySelector('#buttonLabelFont');
  if (fontSelect) {
    // Initialize dropdown with current font
    const config0 = buttonLabelManager.getConfig(0);
    if (config0 && config0.fontFamily) {
      fontSelect.value = config0.fontFamily;
    }
    fontSelect.addEventListener('change', (e) => {
      buttonLabelManager.setGlobalConfig({ fontFamily: e.target.value });
    });
  }

  bindSliderAndInput('#buttonLabelOffsetY', '#buttonLabelOffsetYInput', (val) => {
    buttonLabelManager.setGlobalConfig({ offset: { y: val } });
  }, 2);

  bindSliderAndInput('#buttonLabelFontSize', '#buttonLabelFontSizeInput', (val) => {
    buttonLabelManager.setGlobalConfig({ fontSize: val });
  }, 0);

  const labelColorEl = document.querySelector('#buttonLabelColor');
  if (labelColorEl) {
    labelColorEl.addEventListener('input', (e) => buttonLabelManager.setGlobalConfig({ color: e.target.value }));
  }

  // Populate label list with editable inputs
  populateButtonLabelList();
}

function populateButtonLabelList() {
  const listEl = document.querySelector('#buttonLabelList');
  if (!listEl || !buttonLabelManager) return;

  listEl.innerHTML = '';

  for (let i = 0; i < 17; i++) {
    const config = buttonLabelManager.getConfig(i);
    if (!config) continue;

    // Hide labels that don't have a button object registered (not in current model)
    const hasButtonObject = buttonLabelManager.buttonObjects?.has(i);
    if (!hasButtonObject) {
      // Still create a hidden placeholder to maintain indexing
      const placeholder = document.createElement('div');
      placeholder.style.display = 'none';
      placeholder.dataset.index = i;
      listEl.appendChild(placeholder);
      continue;
    }

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:12px;min-height:24px;';
    row.dataset.index = i;
    
    const hasSvg = config.svg && config.svg.trim() !== '';
    const inputValue = hasSvg ? '' : (config.text || '');
    const inputPlaceholder = hasSvg ? '✕ SVG active — type to replace' : '';
    
    row.innerHTML = `
      <input type="checkbox" data-index="${i}" ${config.visible ? 'checked' : ''} style="width:14px;height:14px;flex-shrink:0;cursor:pointer;">
      <span class="btn-name" data-index="${i}" style="width:110px;color:#aaa;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;">${BUTTON_NAMES[i]}</span>
      <div style="display:flex;flex:1;gap:2px;min-width:0;">
        <input type="text" data-index="${i}" value="${inputValue}" placeholder="${inputPlaceholder}" ${hasSvg ? 'readonly' : ''} style="flex:1;min-width:0;background:#1e1e22;border:1px solid #3a3a42;color:${hasSvg ? '#888' : '#fff'};padding:3px 6px;border-radius:4px;font-size:11px;font-family:inherit;height:22px;box-sizing:border-box;">
        <button type="button" class="svg-dropdown-btn" data-index="${i}" title="Select SVG glyph" style="width:26px;height:22px;flex-shrink:0;background:#2a2a30;border:1px solid #3a3a42;color:#ccc;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;">▼</button>
      </div>
    `;

    const checkbox = row.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (e) => {
      buttonLabelManager.setVisibility(parseInt(e.target.dataset.index), e.target.checked);
    });
    row.addEventListener('mouseenter', (e) => {
      buttonLabelManager.updateLabelHover(parseInt(e.currentTarget.dataset.index), true);
    });
    row.addEventListener('mouseleave', (e) => {
      buttonLabelManager.updateLabelHover(parseInt(e.currentTarget.dataset.index), false);
    });
    const nameSpan = row.querySelector('.btn-name');
    nameSpan.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.index);
      const currentConfig = buttonLabelManager.getConfig(idx);
      if (currentConfig) {
        buttonLabelManager.setVisibility(idx, !currentConfig.visible);
        checkbox.checked = !currentConfig.visible;
      }
    });
    const input = row.querySelector('input[type="text"]');
    input.addEventListener('change', (e) => {
      const idx = parseInt(e.target.dataset.index);
      const text = e.target.value;
      if (text) {
        buttonLabelManager.setText(idx, text);
      } else {
        buttonLabelManager.updateConfig(idx, { text: '' });
      }
      refreshButtonLabelRow(idx);
    });
    
    // SVG dropdown button
    const svgBtn = row.querySelector('.svg-dropdown-btn');
    svgBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSvgGlyphMenu(e.target, parseInt(e.target.dataset.index));
    });

    listEl.appendChild(row);
  }
}

function showSvgGlyphMenu(button, index) {
  // Remove any existing menu
  document.querySelectorAll('.svg-glyph-menu').forEach(m => m.remove());

  // Get glyphs from ButtonLabelManager
  const glyphs = buttonLabelManager?.getGlyphs?.() || [];
  
  const glyphOptions = [
    { label: 'None (text only)', svg: null, filename: null }
  ];

  // Add glyphs from glyphs.json with their friendly names
  for (const glyph of glyphs) {
    glyphOptions.push({
      label: glyph.friendlyName,
      svg: null, // Will be loaded on selection
      filename: glyph.filename
    });
  }

  const menu = document.createElement('div');
  menu.className = 'svg-glyph-menu';
  menu.style.cssText = `
    position:fixed;top:0;left:0;z-index:1000;
    background:#1e1e22;border:1px solid #3a3a42;border-radius:6px;
    box-shadow:0 8px 24px rgba(0,0,0,0.5);min-width:180px;padding:4px;
    font-size:11px;font-family:inherit;
  `;

  glyphOptions.forEach(opt => {
    const item = document.createElement('div');
    item.style.cssText = `
      display:flex;align-items:center;gap:8px;padding:6px 10px;cursor:pointer;border-radius:3px;
      color:#e0e0e0;white-space:nowrap;
    `;
    
    if (opt.svg) {
      // Preview SVG (for presets, if any)
      const preview = document.createElement('span');
      preview.innerHTML = opt.svg;
      preview.style.cssText = 'width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#ccc;flex-shrink:0;';
      item.appendChild(preview);
    }

    const label = document.createElement('span');
    label.textContent = opt.label;
    item.appendChild(label);

    item.addEventListener('mouseenter', () => {
      item.style.background = '#3a3a42';
    });
    item.addEventListener('mouseleave', () => {
      item.style.background = 'transparent';
    });
    item.addEventListener('click', async () => {
      if (opt.filename) {
        // Load SVG from file and assign
        const success = await buttonLabelManager.setButtonGlyph(index, opt.filename);
        if (success) {
          menu.remove();
          refreshButtonLabelRow(index);
        }
      } else {
        // None selected - clear SVG
        buttonLabelManager.updateConfig(index, { svg: null });
        menu.remove();
        refreshButtonLabelRow(index);
      }
    });
    menu.appendChild(item);
  });

  document.body.appendChild(menu);

  const rect = button.getBoundingClientRect();
  menu.style.top = `${rect.bottom + 4}px`;
  menu.style.left = `${rect.left}px`;

  // Close on outside click
  const closeMenu = (e) => {
    if (!menu.contains(e.target) && e.target !== button) {
      menu.remove();
      document.removeEventListener('click', closeMenu);
    }
  };
  setTimeout(() => document.addEventListener('click', closeMenu), 0);
}

function refreshButtonLabelRow(index) {
  const row = document.querySelector(`#buttonLabelList [data-index="${index}"]`);
  if (!row) return;
  
  const config = buttonLabelManager.getConfig(index);
  if (!config) return;

  const input = row.querySelector('input[type="text"]');
  const hasSvg = config.svg && config.svg.trim() !== '';
  
  if (hasSvg) {
    input.value = '';
    input.placeholder = '✕ SVG active — type to replace';
    input.readOnly = true;
    input.style.color = '#888';
  } else {
    input.value = config.text || '';
    input.placeholder = '';
    input.readOnly = false;
    input.style.color = '#fff';
  }
}

// File I/O Actions
const loadDefaultBtn = document.querySelector('#loadDefaultBtn');
if (loadDefaultBtn) {
  loadDefaultBtn.addEventListener('click', async () => {
    await clearStoredModel();
    modelManager.buildProceduralController();
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
      modelManager.parseAndLoadGLTF(buffer);
      await saveBinaryModel(buffer, file.name);
    };
    reader.readAsArrayBuffer(file);
  });
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
      modelManager.parseAndLoadGLTF(buffer);
      await saveBinaryModel(buffer, file.name);
      await saveFileHandle(handle);
    } catch (err) {
      // Ignore user cancellation errors.
    }
  });
}

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

/* ================================================================= Gamepad & Diagnostics Integration ================================================================= */
const padSelect = document.querySelector('#padSelect');
if (padSelect) {
  padSelect.addEventListener('change', (e) => { 
    gamepadManager.selectPad(Number(e.target.value)); 
    diagnosticsPanel.resetSnapshot(); 
  });
}

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

function refreshPads() {
  const pads = gamepadManager.refreshPads();
  const sel = document.querySelector('#padSelect');
  const old = gamepadManager.activePadIndex;
  if (!sel) return;
  
  sel.innerHTML = '';
  if (!pads.length) {
    sel.innerHTML = '<option>No controller detected</option>';
    gamepadManager.activePadIndex = null;
    diagnosticsPanel.setStatus(false);
    return;
  }
  
  pads.forEach((pad) => {
    const option = document.createElement('option');
    option.value = pad.index; 
    option.textContent = `#${pad.index} — ${pad.id}`;
    sel.appendChild(option);
  });

  const newIndex = pads.some((pad) => pad.index === old) ? old : pads[0].index;
  gamepadManager.selectPad(newIndex);
  sel.value = newIndex;
  diagnosticsPanel.setStatus(true);
}

/* ================================================================= State Serialization & Persistence ================================================================= */
function getSettingsState() {
  const trailConfig = trailManager.getTrailConfig ? trailManager.getTrailConfig() : {
    colorStart: 0xaa0022,
    colorEnd: 0x00aaaa,
    intensity: 1.25,
    width: 0.05,
    length: 10
  };
  return {
    camera: getCameraState(),
    model: {
      scale: parseFloat(document.querySelector('#modelScale').value),
      emissionIntensity: parseFloat(document.querySelector('#emissionIntensity').value),
      trailOffsetY: trailManager.getOffsetY(),
      emissionColor: document.querySelector('#emissionColor').value,
      syncLeftStickDpad: document.querySelector('#syncLeftStickDpadToggle')?.checked ?? false
    },
    trail: {
      enabled: document.querySelector('#trailEnabled')?.checked ?? true,
      colorStart: '#' + trailConfig.colorStart.toString(16).padStart(6, '0'),
      colorEnd: '#' + trailConfig.colorEnd.toString(16).padStart(6, '0'),
      intensity: trailConfig.intensity,
      width: trailConfig.width,
      length: trailConfig.length,
      radius: trailConfig.radius
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
    ibl: { ...iblState },
    buttonLabels: buttonLabelManager ? buttonLabelManager.toJSON() : {}
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
    if (state.model.syncLeftStickDpad !== undefined) {
      const toggle = document.querySelector('#syncLeftStickDpadToggle');
      if (toggle) toggle.checked = state.model.syncLeftStickDpad;
      modelManager.setSyncLeftStickDpad(state.model.syncLeftStickDpad);
    }
  }

  if (state.trail) {
    const t = state.trail;
    const trailEnabled = document.querySelector('#trailEnabled');
    if (trailEnabled) trailEnabled.checked = t.enabled;
    trailManager.setEnabled(t.enabled);

    if (t.colorStart) {
      trailManager.setColorStart(t.colorStart);
      const trailColorStart = document.querySelector('#trailColorStart');
      if (trailColorStart) trailColorStart.value = t.colorStart;
    }
    if (t.colorEnd) {
      trailManager.setColorEnd(t.colorEnd);
      const trailColorEnd = document.querySelector('#trailColorEnd');
      if (trailColorEnd) trailColorEnd.value = t.colorEnd;
    }
    if (t.intensity !== undefined) {
      trailManager.setIntensity(t.intensity);
      const trailIntensity = document.querySelector('#trailIntensity');
      const trailIntensityInput = document.querySelector('#trailIntensityInput');
      if (trailIntensity) trailIntensity.value = t.intensity;
      if (trailIntensityInput) trailIntensityInput.value = t.intensity.toFixed(2);
    }
    if (t.width !== undefined) {
      trailManager.setWidth(t.width);
      const trailWidth = document.querySelector('#trailWidth');
      const trailWidthInput = document.querySelector('#trailWidthInput');
      if (trailWidth) trailWidth.value = t.width;
      if (trailWidthInput) trailWidthInput.value = t.width.toFixed(3);
    }
    if (t.length !== undefined) {
      trailManager.setLength(t.length);
      const trailLength = document.querySelector('#trailLength');
      const trailLengthInput = document.querySelector('#trailLengthInput');
      if (trailLength) trailLength.value = t.length;
      if (trailLengthInput) trailLengthInput.value = t.length.toFixed(1);
    }
    if (t.radius !== undefined) {
      trailManager.setRadius(t.radius);
      const trailRadius = document.querySelector('#trailRadius');
      const trailRadiusInput = document.querySelector('#trailRadiusInput');
      if (trailRadius) trailRadius.value = t.radius;
      if (trailRadiusInput) trailRadiusInput.value = t.radius.toFixed(2);
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

  if (state.buttonLabels && buttonLabelManager) {
    buttonLabelManager.fromJSON(state.buttonLabels);
    // Re-populate the label list after loading
    populateButtonLabelList();
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

async function initModelPersistence() {
  const handle = await getStoredFileHandle();
  if (handle) {
    try {
      if (await verifyPermission(handle)) {
        const file = await handle.getFile();
        const buffer = await file.arrayBuffer();
        modelManager.parseAndLoadGLTF(buffer);
        return;
      }
    } catch (err) {
      console.warn('File handle load error:', err);
    }
  }

  const stored = await getStoredBinaryModel();
  if (stored && stored.buffer) {
    modelManager.parseAndLoadGLTF(stored.buffer);
    return;
  }

  modelManager.buildProceduralController();
}

/* ================================================================= Main Execution Loop & App API ================================================================= */
let lastFrameTime = performance.now();

function loop() {
  requestAnimationFrame(loop);

  const { enabled, fps } = getFpsLimitState();

  if (enabled) {
    const now = performance.now();
    const interval = 1000 / fps;
    const delta = now - lastFrameTime;

    if (delta < interval) return;
    lastFrameTime = now - (delta % interval);
  }

  const pad = gamepadManager.getSelectedPad();
  if (pad) {
    diagnosticsPanel.setStatus(true);
    diagnosticsPanel.update(pad);
    modelManager.applyGamepadInput(pad, buttonEmissionColor, buttonEmissionMultiplier);

    const ax = pad.axes || [];
    const stickMag = Math.hypot(ax[0] || 0, ax[1] || 0);
    trailManager.setLeftStickActive(stickMag > 0.1);
  } else if (gamepadManager.activePadIndex !== null) {
    diagnosticsPanel.setStatus(false);
    trailManager.setLeftStickActive(false);
  }

  trailManager.update();
  if (buttonLabelManager) buttonLabelManager.render();
  composer.render();
}

// Initializers Execution
updateIBL();
loadFromLocalStorage();
initModelPersistence();
refreshPads();
loop();

// Expose Application APIs
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
    modelManager.buildProceduralController();
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