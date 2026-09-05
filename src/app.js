import * as THREE from 'three';
import { TrailManager } from './managers/trailManager.js';
import { DEFAULT_IBL_STATE } from './core/state.js';
import { normalizeSettingsState } from './core/settings.js';
import { createSettingsPersistence } from './core/settingsPersistence.js';
import { createSettingsStateReader } from './core/settingsState.js';
import {
  applyModelSettings,
  applySceneSettings,
  applyTrailSettings,
} from './core/settingsAppliers.js';
import { applyPostProcessingSettings } from './core/postProcessingSettings.js';
import { createModelPersistenceController } from './core/modelPersistenceController.js';
import { bindSliderAndInput, exposeAppApi, registerParentMessageBridge } from './ui/uiBridge.js';
import { ProceduralIBLEditor } from './rendering/ibl.js';
import { setupIBLControls, applyIBLStateToUI } from './ui/iblControls.js';
import { createPostProcessing } from './rendering/postProcessing.js';
import { GamepadManager } from './managers/gamepadManager.js';
import { LightingManager } from './managers/lightingManager.js';
import { DiagnosticsManager } from './managers/diagnosticsManager.js';
import { ModelManager } from './managers/modelManager.js';
import { ButtonLabelManager, SVG_PRESETS } from './managers/buttonLabelManager.js';
import { CompositionManager } from './managers/compositionManager.js';
import { initializeColorPicker } from './ui/colorPicker.js';
import {
  clearStoredModel,
  getStoredBinaryModel,
  getStoredFileHandle,
  saveBinaryModel,
  saveFileHandle,
  verifyFilePermission,
} from './core/modelStorage.js';
import { setupNumberInputScrubbing } from './ui/numberInputScrubber.js';
import { setupSceneInteraction } from './ui/sceneInteraction.js';

function loadGoogleFont(url) {
  if (document.querySelector(`link[href="${url}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

function requireElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`TrailStudio startup failed: missing required element ${selector}`);
  }
  return element;
}

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
  getFpsLimitState,
} from './ui/cameraControls.js';

// Button names shared between functions
const BUTTON_NAMES = [
  'South / A / Cross',
  'East / B / Circle',
  'West / X / Square',
  'North / Y / Triangle',
  'L1 / LB',
  'R1 / RB',
  'L2 / LT',
  'R2 / RT',
  'Select / Back',
  'Start',
  'L3',
  'R3',
  'D-Pad Up',
  'D-Pad Down',
  'D-Pad Left',
  'D-Pad Right',
  'Home / Guide',
];

/* ================================================================= Three.js Scene & Engine Setup ================================================================= */
const app = requireElement('#app');
[
  '#inspector-shell',
  '#aaToggle',
  '#aaQualitySelect',
  '#shadowQualitySelect',
  '#bloomToggle',
  '#aoToggle',
  '#toneMappingSelect',
  '#modelScale',
  '#modelScaleInput',
  '#emissionIntensity',
  '#emissionIntensityInput',
  '#trailOffset',
  '#trailOffsetInput',
  '#trailRadius',
  '#trailRadiusInput',
  '#trailIntensity',
  '#trailIntensityInput',
  '#trailWidth',
  '#trailWidthInput',
  '#trailLength',
  '#trailLengthInput',
].forEach(requireElement);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  antialias: false,
  alpha: true,
  premultipliedAlpha: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
app.appendChild(renderer.domElement);
const compositionGrid = new CompositionManager();

const {
  composer,
  aoPass,
  bloomPass,
  postShaderPass,
  updateAntiAliasing,
  resize: resizePostProcessing,
  dispose: disposePostProcessing,
} = createPostProcessing(renderer, scene, camera);

// Managers Setup
const diagnosticsPanel = new DiagnosticsManager();
const lightingManager = new LightingManager(scene);
const proceduralIBLEditor = new ProceduralIBLEditor(renderer, scene);
const iblState = { ...DEFAULT_IBL_STATE };

const controllerGroup = new THREE.Group();
controllerGroup.rotation.x = 0.3;
scene.add(controllerGroup);
setTargetModelGroup(controllerGroup);

let buttonEmissionMultiplier = 1.0;
let buttonEmissionColor = new THREE.Color(0xffffff);
const trailManager = new TrailManager(scene, camera);
const modelManager = new ModelManager(controllerGroup, trailManager);

const gamepadManager = new GamepadManager({
  hudUI: diagnosticsPanel.getHudUI(),
  meshMappings: modelManager.MESH_MAPPINGS,
  onPadChange: () => {
    diagnosticsPanel.resetSnapshot();
  },
});

const modelPersistence = createModelPersistenceController({
  modelManager,
  clearStoredModel,
  getStoredFileHandle,
  getStoredBinaryModel,
  saveBinaryModel,
  saveFileHandle,
  verifyFilePermission,
});

setupNumberInputScrubbing();

// Button Label Manager
let buttonLabelManager = null;
async function createButtonLabelManager() {
  if (buttonLabelManager) {
    buttonLabelManager.dispose();
  }
  buttonLabelManager = new ButtonLabelManager(controllerGroup, camera, renderer, {
    onConfigChange: scheduleSave,
  });
  // Sync existing buttons
  for (const [index, entry] of Object.entries(modelManager.buttons3D)) {
    const idx = parseInt(index);
    buttonLabelManager.setButtonObject(idx, entry.node, modelManager.basePositions[idx]);
  }
  await wireButtonLabelUI();
}

modelManager.onModelLoaded(async () => {
  await createButtonLabelManager();
});

modelManager.onButtonRegistered((index, node) => {
  if (buttonLabelManager) {
    buttonLabelManager.setButtonObject(index, node, modelManager.basePositions[index]);
  }
});

/* ================================================================= UI & Inspector Event Bindings ================================================================= */

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
setupIBLControls(iblState, updateIBL, proceduralIBLEditor);
setupCameraInputs(saveToLocalStorage);
lightingManager.renderLightingDock();
if (window.CustomDropdown) window.CustomDropdown.bindAll();

// Post-processing UI Bindings
document.querySelector('#aaToggle').addEventListener('change', updateAntiAliasing);
document.querySelector('#aaQualitySelect').addEventListener('change', updateAntiAliasing);
document
  .querySelector('#shadowQualitySelect')
  .addEventListener('change', (e) => lightingManager.updateShadowQuality(e.target.value));

document.querySelector('#bloomToggle').addEventListener('change', (e) => {
  bloomPass.enabled = e.target.checked;
});
bindSliderAndInput(
  '#bloomStrength',
  '#bloomStrengthInput',
  (val) => {
    bloomPass.strength = val;
  },
  2
);
bindSliderAndInput(
  '#bloomRadius',
  '#bloomRadiusInput',
  (val) => {
    bloomPass.radius = val;
  },
  2
);
bindSliderAndInput(
  '#bloomThreshold',
  '#bloomThresholdInput',
  (val) => {
    bloomPass.threshold = val;
  },
  2
);

document.querySelector('#aoToggle').addEventListener('change', (e) => {
  aoPass.enabled = e.target.checked;
});
bindSliderAndInput(
  '#aoRadius',
  '#aoRadiusInput',
  (val) => {
    aoPass.kernelRadius = val;
  },
  2
);
bindSliderAndInput(
  '#aoMinDistance',
  '#aoMinDistanceInput',
  (val) => {
    aoPass.minDistance = val;
  },
  3
);
bindSliderAndInput(
  '#aoMaxDistance',
  '#aoMaxDistanceInput',
  (val) => {
    aoPass.maxDistance = val;
  },
  2
);

document.querySelector('#toneMappingSelect').addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'Linear':
      renderer.toneMapping = THREE.LinearToneMapping;
      break;
    case 'Reinhard':
      renderer.toneMapping = THREE.ReinhardToneMapping;
      break;
    case 'Cineon':
      renderer.toneMapping = THREE.CineonToneMapping;
      break;
    default:
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      break;
  }
});

bindSliderAndInput(
  '#exposureRange',
  '#exposureInput',
  (val) => {
    renderer.toneMappingExposure = val;
  },
  2
);
bindSliderAndInput(
  '#contrastRange',
  '#contrastInput',
  (val) => {
    postShaderPass.uniforms.contrast.value = val;
  },
  2
);
bindSliderAndInput(
  '#saturationRange',
  '#saturationInput',
  (val) => {
    postShaderPass.uniforms.saturation.value = val;
  },
  2
);

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
if (modelScaleInput)
  modelScaleInput.addEventListener('input', (e) => syncModelScale(e.target.value));

const emissionColorElem = document.querySelector('#emissionColor');
if (emissionColorElem) {
  initializeColorPicker(emissionColorElem, emissionColorElem.dataset.value, (color) =>
    buttonEmissionColor.set(color)
  );
}

bindSliderAndInput(
  '#trailOffset',
  '#trailOffsetInput',
  (val) => {
    trailManager.setOffsetY(val);
    trailManager.syncTarget(modelManager.leftStick3DGroup);
  },
  2
);

bindSliderAndInput(
  '#trailRadius',
  '#trailRadiusInput',
  (val) => {
    trailManager.setRadius(val);
  },
  2
);

bindSliderAndInput(
  '#trailIntensity',
  '#trailIntensityInput',
  (val) => {
    trailManager.setIntensity(val);
  },
  2
);

bindSliderAndInput(
  '#trailWidth',
  '#trailWidthInput',
  (val) => {
    trailManager.setWidth(val);
  },
  3
);

bindSliderAndInput(
  '#trailLength',
  '#trailLengthInput',
  (val) => {
    trailManager.setLength(val);
  },
  2
);

const trailColorStart = document.querySelector('#trailColorStart');
if (trailColorStart) {
  initializeColorPicker(trailColorStart, trailColorStart.dataset.value, (color) =>
    trailManager.setColorStart(color)
  );
}

const trailColorEnd = document.querySelector('#trailColorEnd');
if (trailColorEnd) {
  initializeColorPicker(trailColorEnd, trailColorEnd.dataset.value, (color) =>
    trailManager.setColorEnd(color)
  );
}

const trailEnabled = document.querySelector('#trailEnabled');
if (trailEnabled) {
  trailEnabled.addEventListener('change', (e) => {
    trailManager.setEnabled(e.target.checked);
  });
}

bindSliderAndInput(
  '#emissionIntensity',
  '#emissionIntensityInput',
  (val) => {
    buttonEmissionMultiplier = val;
  },
  2
);

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
async function wireButtonLabelUI() {
  if (!buttonLabelManager) return;
  await buttonLabelManager.glyphsReady;

  const enabledEl = document.querySelector('#buttonLabelsEnabled');
  if (enabledEl) {
    enabledEl.addEventListener('change', (e) => buttonLabelManager.setEnabled(e.target.checked));
  }

  const fontSelect = document.querySelector('#buttonLabelFont');
  let fontsData = [];
  if (fontSelect) {
    // Load fonts from JSON
    try {
      const response = await fetch('/assets/fonts.json');
      if (response.ok) {
        fontsData = await response.json();
        fontSelect.innerHTML = '';
        fontsData.forEach((font) => {
          const option = document.createElement('option');
          option.value = font.value;
          option.textContent = font.label;
          fontSelect.appendChild(option);
        });
      }
    } catch (error) {
      console.warn('Failed to load fonts:', error);
    }

    // Initialize dropdown with current font
    const config0 = buttonLabelManager.getConfig(0);
    if (config0 && config0.fontFamily) {
      fontSelect.value = config0.fontFamily;
    }
    fontSelect.addEventListener('change', (e) => {
      const selectedFont = fontsData.find((f) => f.value === e.target.value);
      if (selectedFont?.url) {
        loadGoogleFont(selectedFont.url);
      }
      buttonLabelManager.setGlobalConfig({ fontFamily: e.target.value });
    });
  }

  bindSliderAndInput(
    '#buttonLabelOffsetY',
    '#buttonLabelOffsetYInput',
    (val) => {
      buttonLabelManager.setGlobalConfig({ offset: { y: val } });
    },
    2
  );

  bindSliderAndInput(
    '#buttonLabelFontSize',
    '#buttonLabelFontSizeInput',
    (val) => {
      buttonLabelManager.setGlobalConfig({ fontSize: val });
    },
    0
  );

  const labelColorEl = document.querySelector('#buttonLabelColor');
  if (labelColorEl) {
    initializeColorPicker(labelColorEl, labelColorEl.dataset.value, (color) =>
      buttonLabelManager.setGlobalConfig({ color })
    );
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
    const inputValue = hasSvg ? '' : config.text || '';
    const inputPlaceholder = hasSvg ? '✕ SVG active — type to replace' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.index = i;
    checkbox.checked = config.visible;
    checkbox.style.cssText = 'width:14px;height:14px;flex-shrink:0;cursor:pointer;';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'btn-name';
    nameSpan.dataset.index = i;
    nameSpan.textContent = BUTTON_NAMES[i];
    nameSpan.style.cssText =
      'width:110px;color:#aaa;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;';

    const input = document.createElement('input');
    input.type = 'text';
    input.dataset.index = i;
    input.value = inputValue;
    input.placeholder = inputPlaceholder;
    input.readOnly = hasSvg;
    input.style.cssText = `flex:1;min-width:0;background:#1e1e22;border:1px solid #3a3a42;color:${hasSvg ? '#888' : '#fff'};padding:3px 6px;border-radius:4px;font-size:11px;font-family:inherit;height:22px;box-sizing:border-box;`;

    const svgBtn = document.createElement('button');
    svgBtn.type = 'button';
    svgBtn.className = 'svg-dropdown-btn';
    svgBtn.dataset.index = i;
    svgBtn.title = 'Select SVG glyph';
    svgBtn.textContent = '▼';
    svgBtn.style.cssText =
      'width:26px;height:22px;flex-shrink:0;background:#2a2a30;border:1px solid #3a3a42;color:#ccc;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;';

    const inputGroup = document.createElement('div');
    inputGroup.style.cssText = 'display:flex;flex:1;gap:2px;min-width:0;';
    inputGroup.append(input, svgBtn);
    row.append(checkbox, nameSpan, inputGroup);

    checkbox.addEventListener('change', (e) => {
      buttonLabelManager.setVisibility(parseInt(e.target.dataset.index), e.target.checked);
    });
    row.addEventListener('mouseenter', (e) => {
      buttonLabelManager.updateLabelHover(parseInt(e.currentTarget.dataset.index), true);
    });
    row.addEventListener('mouseleave', (e) => {
      buttonLabelManager.updateLabelHover(parseInt(e.currentTarget.dataset.index), false);
    });
    nameSpan.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.index);
      const currentConfig = buttonLabelManager.getConfig(idx);
      if (currentConfig) {
        buttonLabelManager.setVisibility(idx, !currentConfig.visible);
        checkbox.checked = !currentConfig.visible;
      }
    });
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
    svgBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSvgGlyphMenu(e.target, parseInt(e.target.dataset.index));
    });

    listEl.appendChild(row);
  }
}

function showSvgGlyphMenu(button, index) {
  // Remove any existing menu
  document.querySelectorAll('.svg-glyph-menu').forEach((m) => m.remove());

  // Get glyphs from ButtonLabelManager
  const glyphs = buttonLabelManager?.getGlyphs?.() || [];

  const glyphOptions = [{ label: 'None (text only)', svg: null, filename: null }];

  // Add glyphs from glyphs.json with their friendly names
  for (const glyph of glyphs) {
    glyphOptions.push({
      label: glyph.friendlyName,
      svg: null, // Will be loaded on selection
      filename: glyph.filename,
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

  glyphOptions.forEach((opt) => {
    const item = document.createElement('div');
    item.style.cssText = `
      display:flex;align-items:center;gap:8px;padding:6px 10px;cursor:pointer;border-radius:3px;
      color:#e0e0e0;white-space:nowrap;
    `;

    if (opt.svg) {
      // Preview SVG (for presets, if any)
      const preview = document.createElement('span');
      preview.innerHTML = opt.svg;
      preview.style.cssText =
        'width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#ccc;flex-shrink:0;';
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
  loadDefaultBtn.addEventListener('click', modelPersistence.resetToProcedural);
}

const fileInput = document.querySelector('#glbFile');
if (fileInput) {
  fileInput.addEventListener('change', async (e) => {
    try {
      await modelPersistence.loadSelectedFile(e.target.files[0]);
    } catch (error) {
      console.error('Failed to load model file:', error);
    }
  });
}

const openPickerBtn = document.querySelector('#openPickerBtn');
if (openPickerBtn) {
  openPickerBtn.addEventListener('click', modelPersistence.pickFile);
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
      await pad.vibrationActuator.playEffect('dual-rumble', {
        duration: 180,
        strongMagnitude: 0.65,
        weakMagnitude: 0.35,
      });
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
const getSettingsState = createSettingsStateReader({
  getCameraState,
  trailManager,
  lightingManager,
  iblState,
  getButtonLabelManager: () => buttonLabelManager,
});

function applySettingsState(state) {
  state = normalizeSettingsState(state);
  if (!state) return;

  if (state.ibl) applyIBLStateToUI(iblState, state.ibl, updateIBL);
  if (state.camera) applyCameraState(state.camera);

  if (state.model) {
    applyModelSettings(state.model, {
      modelManager,
      trailManager,
      syncModelScale,
      setEmissionMultiplier: (value) => {
        buttonEmissionMultiplier = value;
      },
      emissionColor: buttonEmissionColor,
    });
  }

  if (state.trail) {
    applyTrailSettings(state.trail, trailManager);
  }

  if (state.postProcessing) {
    applyPostProcessingSettings(state.postProcessing, {
      updateAntiAliasing,
      bloomPass,
      aoPass,
      renderer,
      postShaderPass,
    });
  }

  applySceneSettings(state, {
    lightingManager,
    getButtonLabelManager: () => buttonLabelManager,
    refreshButtonLabels: populateButtonLabelList,
  });

  updateCameraPosition();
}

const settingsPersistence = createSettingsPersistence({
  getState: getSettingsState,
  applyState: applySettingsState,
});
const { save: saveToLocalStorage, scheduleSave, load: loadFromLocalStorage } = settingsPersistence;

const disposeSceneInteraction = setupSceneInteraction({
  renderer,
  lightingManager,
  trailManager,
  compositionGrid,
  handleCameraMouseDown,
  handleCameraMouseMove,
  handleCameraWheel,
  handleCameraResize,
  resizePostProcessing,
  scheduleSave,
  saveSettings: saveToLocalStorage,
  getButtonLabelManager: () => buttonLabelManager,
});

/* ================================================================= Main Execution Loop & App API ================================================================= */
let lastFrameTime = performance.now();
let animationFrameId = null;

function loop() {
  if (document.hidden) {
    animationFrameId = null;
    return;
  }
  animationFrameId = requestAnimationFrame(loop);

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

function disposeApp() {
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
  settingsPersistence.dispose();
  disposeSceneInteraction();
  gamepadManager.stopPolling();
  buttonLabelManager?.dispose();
  modelManager.clearController3D();
  lightingManager.dispose();
  proceduralIBLEditor.dispose();
  disposePostProcessing();
  renderer.dispose();
}

window.addEventListener('pagehide', disposeApp, { once: true });

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && animationFrameId === null) {
    lastFrameTime = performance.now();
    loop();
  }
});

// Initializers Execution
updateIBL();
loadFromLocalStorage();
modelPersistence.loadStoredModel();
refreshPads();
updateCameraPosition();
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
  },
};

exposeAppApi(appApi);
registerParentMessageBridge(appApi);
