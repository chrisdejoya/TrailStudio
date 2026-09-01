import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const DEFAULT_LABEL_CONFIG = {
  text: '',
  visible: true,
  fontFamily: 'Rubik, system-ui, sans-serif',
  fontSize: 20,
  fontWeight: 600,
  fontStyle: 'normal',
  color: '#ffffffcc',
  labelScale: 1,
  dropShadow: { enabled: true, x: 0, y: 0, blur: 2, color: '#000000dd' },
  offset: { x: 0, y: 0.15, z: 0 },
  activation: {
    brightness: 2.0,
    glow: { enabled: true, blur: 4, color: '#ffffff', layers: 1 },
    scale: 1.1,
    colorShift: false,
    transition: '0.05s ease-out'
  },
  hover: {
    enabled: true,
    glow: { enabled: true, blur: 6, color: '#ffffff', layers: 1 },
    transition: '0.1s ease-out'
  }
};

const BUTTON_NAMES = [
  'South / A / Cross', 'East / B / Circle', 'West / X / Square', 'North / Y / Triangle',
  'L1 / LB', 'R1 / RB', 'L2 / LT', 'R2 / RT',
  'Select / Back', 'Start', 'L3', 'R3',
  'D-Pad Up', 'D-Pad Down', 'D-Pad Left', 'D-Pad Right', 'Home / Guide'
];

const PS_SYMBOLS = {
  'South / A / Cross': '×',
  'East / B / Circle': '○',
  'West / X / Square': '□',
  'North / Y / Triangle': '△',
  'L1 / LB': 'L1',
  'R1 / RB': 'R1',
  'L2 / LT': 'L2',
  'R2 / RT': 'R2',
  'Select / Back': '⬚',
  'Start': '≡',
  'L3': 'L3',
  'R3': 'R3',
  'D-Pad Up': '▲',
  'D-Pad Down': '▼',
  'D-Pad Left': '◀',
  'D-Pad Right': '▶',
  'Home / Guide': '⬤'
};

const XBOX_SYMBOLS = {
  'South / A / Cross': 'A',
  'East / B / Circle': 'B',
  'West / X / Square': 'X',
  'North / Y / Triangle': 'Y',
  'L1 / LB': 'LB',
  'R1 / RB': 'RB',
  'L2 / LT': 'LT',
  'R2 / RT': 'RT',
  'Select / Back': '⬚',
  'Start': '≡',
  'L3': 'L3',
  'R3': 'R3',
  'D-Pad Up': '▲',
  'D-Pad Down': '▼',
  'D-Pad Left': '◀',
  'D-Pad Right': '▶',
  'Home / Guide': '⬤'
};

const DEFAULT_SYMBOLS = {
  'South / A / Cross': '●',
  'East / B / Circle': '●',
  'West / X / Square': '●',
  'North / Y / Triangle': '●',
  'L1 / LB': 'L1',
  'R1 / RB': 'R1',
  'L2 / LT': 'L2',
  'R2 / RT': 'R2',
  'Select / Back': '◼',
  'Start': '▶',
  'L3': 'L3',
  'R3': 'R3',
  'D-Pad Up': '▲',
  'D-Pad Down': '▼',
  'D-Pad Left': '◀',
  'D-Pad Right': '▶',
  'Home / Guide': '◆'
};

export class ButtonLabelManager {
  constructor(controllerGroup, camera, renderer, options = {}) {
    this.controllerGroup = controllerGroup;
    this.camera = camera;
    this.renderer = renderer;
    this.onConfigChange = options.onConfigChange || (() => {});

    this.cssRenderer = new CSS2DRenderer();
    this.cssRenderer.setSize(window.innerWidth, window.innerHeight);
    this.cssRenderer.domElement.style.position = 'absolute';
    this.cssRenderer.domElement.style.top = '0';
    this.cssRenderer.domElement.style.left = '0';
    this.cssRenderer.domElement.style.pointerEvents = 'none';
    this.cssRenderer.domElement.style.zIndex = '10';
    const appContainer = document.querySelector('#app') || document.body;
    appContainer.appendChild(this.cssRenderer.domElement);

    this.labelGroup = new THREE.Group();
    const scene = controllerGroup.parent || controllerGroup;
    scene.add(this.labelGroup);

    this.labels = new Map();
    this.configs = new Map();
    this.buttonObjects = new Map();
    this.basePositions = new Map();

    this.enabled = true;

    for (let i = 0; i < 17; i++) {
      this.configs.set(i, { ...DEFAULT_LABEL_CONFIG, text: this.getDefaultSymbol(i) });
    }

    window.addEventListener('resize', () => this.onResize());
  }

  getDefaultSymbol(index) {
    const name = BUTTON_NAMES[index];
    return PS_SYMBOLS[name] || DEFAULT_SYMBOLS[name] || '';
  }

  setButtonObject(index, object, basePosition) {
    this.buttonObjects.set(index, object);
    this.basePositions.set(index, basePosition.clone());
    this.createOrUpdateLabel(index);
  }

  createOrUpdateLabel(index) {
    const config = this.configs.get(index);
    if (!config) return;

    // Check if this button index has a 3D object registered
    const hasButtonObject = this.buttonObjects.has(index);
    if (!hasButtonObject) {
      // Hide label if it exists but button object doesn't
      const existingLabel = this.labels.get(index);
      if (existingLabel) {
        existingLabel.visible = false;
      }
      return;
    }

    let label = this.labels.get(index);

    if (!label) {
      // Create wrapper div that CSS2DRenderer will position
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'pointer-events: none; user-select: none;';

      // Create inner content div that we style
      const div = document.createElement('div');
      div.style.cssText = this.buildStyle(config, false, false);
      div.textContent = config.text;
      div.dataset.buttonIndex = index;

      wrapper.appendChild(div);

      label = new CSS2DObject(wrapper);
      label.center.set(0.5, 0.5);
      this.labels.set(index, label);
      this.labelGroup.add(label);
      
      // Store reference to inner content element for updates
      label.userData.contentElement = div;
      label.userData.isHovered = false;
    } else {
      const contentEl = label.userData.contentElement;
      if (contentEl) {
        contentEl.textContent = config.text;
        contentEl.style.cssText = this.buildStyle(config, false, label.userData.isHovered || false);
      }
    }

    this.updateLabelPosition(index);
    label.visible = this.enabled && config.visible;
  }

  buildStyle(config, isPressed, isHovered) {
    const styles = [];

    styles.push(`font-family: "${config.fontFamily}"`);
    styles.push(`font-size: ${config.fontSize}px`);
    styles.push(`font-weight: ${config.fontWeight}`);
    styles.push(`font-style: ${config.fontStyle}`);
    styles.push(`color: ${config.color}`);
    styles.push(`white-space: nowrap`);
    styles.push(`pointer-events: none`);
    styles.push(`user-select: none`);
    styles.push(`line-height: 1`);
    styles.push(`transition: ${config.activation.transition}`);

    // Apply label scale as base transform
    if (config.labelScale !== 1) {
      styles.push(`transform: scale(${config.labelScale})`);
    }

    const filters = [];
    if (config.dropShadow.enabled && !isHovered) {
      const ds = config.dropShadow;
      filters.push(`drop-shadow(${ds.x}px ${ds.y}px ${ds.blur}px ${ds.color})`);
    }
    if ((isPressed && config.activation.glow?.enabled) || (isHovered && config.hover.glow?.enabled)) {
      const glow = isPressed ? config.activation.glow : config.hover.glow;
      const blur = glow.blur ?? 4;
      const color = glow.color ?? config.color;
      const layers = glow.layers ?? 1;
      for (let i = 1; i <= layers; i++) {
        filters.push(`drop-shadow(0 0 ${blur * i}px ${color})`);
      }
    }
    if (isPressed) {
      const brightness = config.activation.brightness;
      filters.push(`brightness(${brightness})`);
    }
    if (filters.length) {
      styles.push(`filter: ${filters.join(' ')}`);
    }

    if (isPressed) {
      const combinedScale = (config.labelScale || 1) * (config.activation.scale || 1);
      if (combinedScale !== 1) {
        styles.push(`transform: scale(${combinedScale})`);
      }
    }

    return styles.join('; ');
  }

  updateLabelPosition(index) {
    const label = this.labels.get(index);
    const object = this.buttonObjects.get(index);
    const basePos = this.basePositions.get(index);
    const config = this.configs.get(index);

    if (!label || !object || !basePos || !config) return;

    const worldPos = new THREE.Vector3();
    object.getWorldPosition(worldPos);

    const offset = new THREE.Vector3(config.offset.x, config.offset.y, config.offset.z);
    const labelPos = worldPos.clone().add(offset);

    label.position.copy(labelPos);
  }

  updateButtonState(index, isPressed, pressure = 0) {
    const label = this.labels.get(index);
    const config = this.configs.get(index);
    if (!label || !config) return;

    const contentEl = label.userData.contentElement;
    if (contentEl) {
      contentEl.style.cssText = this.buildStyle(config, isPressed, label.userData.isHovered || false);
    }
  }

  updateLabelHover(index, isHovered) {
    const label = this.labels.get(index);
    const config = this.configs.get(index);
    if (!label || !config) return;

    label.userData.isHovered = isHovered;

    const contentEl = label.userData.contentElement;
    if (contentEl) {
      contentEl.style.cssText = this.buildStyle(config, false, isHovered);
    }
  }

  updateAllPositions() {
    for (const index of this.buttonObjects.keys()) {
      this.updateLabelPosition(index);
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    for (const [index, label] of this.labels) {
      const config = this.configs.get(index);
      label.visible = enabled && (config?.visible ?? true);
    }
  }

  updateConfig(index, partialConfig) {
    const current = this.configs.get(index) || { ...DEFAULT_LABEL_CONFIG };
    const merged = { ...current, ...partialConfig };

    if (partialConfig.activation) {
      merged.activation = { ...current.activation, ...partialConfig.activation };
    }
    if (partialConfig.dropShadow) {
      merged.dropShadow = { ...current.dropShadow, ...partialConfig.dropShadow };
    }
    if (partialConfig.offset) {
      merged.offset = { ...current.offset, ...partialConfig.offset };
    }

    this.configs.set(index, merged);
    this.createOrUpdateLabel(index);
    this.onConfigChange(this.getAllConfigs());
  }

  setGlobalConfig(partialConfig) {
    for (let i = 0; i < 17; i++) {
      this.updateConfig(i, partialConfig);
    }
  }

  getConfig(index) {
    return this.configs.get(index) ? { ...this.configs.get(index) } : null;
  }

  getAllConfigs() {
    const result = {};
    for (const [index, config] of this.configs) {
      result[index] = { ...config };
    }
    return result;
  }

  setVisibility(index, visible) {
    const config = this.configs.get(index);
    if (!config) return;
    config.visible = visible;
    const label = this.labels.get(index);
    if (label) label.visible = this.enabled && visible;
    this.onConfigChange(this.getAllConfigs());
  }

  setText(index, text) {
    this.updateConfig(index, { text });
  }

  applyPreset(preset) {
    const symbols = preset === 'playstation' ? PS_SYMBOLS :
                   preset === 'xbox' ? XBOX_SYMBOLS :
                   DEFAULT_SYMBOLS;

    for (let i = 0; i < 17; i++) {
      const name = BUTTON_NAMES[i];
      this.updateConfig(i, { text: symbols[name] || '' });
    }
  }

  render() {
    if (!this.enabled) return;
    this.updateAllPositions();
    this.cssRenderer.render(this.labelGroup, this.camera);
  }

  onResize() {
    this.cssRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  dispose() {
    this.cssRenderer.domElement.remove();
    this.labelGroup.clear();
    this.labels.clear();
    this.configs.clear();
    this.buttonObjects.clear();
    this.basePositions.clear();
  }

  toJSON() {
    const configs = {};
    for (const [index, config] of this.configs) {
      configs[index] = { ...config };
    }
    return {
      enabled: this.enabled,
      configs
    };
  }

  fromJSON(data) {
    if (!data) return;
    if (data.enabled !== undefined) this.setEnabled(data.enabled);
    if (data.configs) {
      for (const [index, config] of Object.entries(data.configs)) {
        const idx = parseInt(index);
        if (this.configs.has(idx)) {
          this.configs.set(idx, { ...this.configs.get(idx), ...config });
          this.createOrUpdateLabel(idx);
        }
      }
    }
  }
}