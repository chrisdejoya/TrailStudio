import * as THREE from 'three';
import { createLightConfigState } from './state.js';

export class LightingManager {
  constructor(scene) {
    this.scene = scene;
    this.activeLightId = null;
    this.lightsMap = new Map();
    this.lightConfigs = createLightConfigState();

    this.initLights();
  }

  getShadowResolution() {
    return parseInt(document.querySelector('#shadowQualitySelect')?.value || 2048, 10);
  }

  createLightInstance(config) {
    let light;
    const col = new THREE.Color(config.color);
    const currentRes = this.getShadowResolution();

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

  initLights() {
    this.lightConfigs.forEach((cfg) => {
      const light = this.createLightInstance(cfg);
      this.scene.add(light);
      this.lightsMap.set(cfg.id, { instance: light, config: cfg });
    });
  }

  setActiveLight(id) {
    if (this.activeLightId === id && id !== null) {
      this.activeLightId = null;
    } else {
      this.activeLightId = id;
    }

    document.querySelectorAll('.light-card').forEach((c) => c.classList.remove('active-light-target'));
    if (this.activeLightId) {
      const card = document.querySelector(`#light-card-${this.activeLightId}`);
      if (card) card.classList.add('active-light-target');
    }
  }

  updateShadowQuality(resolution) {
    const res = parseInt(resolution, 10);
    this.lightsMap.forEach((entry) => {
      if (entry.instance.shadow) {
        entry.instance.shadow.mapSize.width = res;
        entry.instance.shadow.mapSize.height = res;
        if (entry.instance.shadow.map) {
          entry.instance.shadow.map.dispose();
          entry.instance.shadow.map = null;
        }
      }
    });
  }

  renderLightingDock() {
    const container = document.querySelector('#dockContent');
    if (!container) return;
    container.innerHTML = '';

    this.lightConfigs.forEach((cfg) => {
      const entry = this.lightsMap.get(cfg.id);
      const card = document.createElement('div');
      card.className = 'light-card';
      card.id = `light-card-${cfg.id}`;

      card.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'LABEL') return;
        e.stopPropagation();
        this.setActiveLight(cfg.id);
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

      card.querySelector('.light-card-header').addEventListener('click', () => this.setActiveLight(cfg.id));
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
        this.scene.remove(entry.instance);
        if (entry.instance.dispose) entry.instance.dispose();
        const newLight = this.createLightInstance(cfg);
        this.scene.add(newLight);
        entry.instance = newLight;
        this.renderLightingDock();
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

  getLightingState() {
    return this.lightConfigs.map((cfg) => ({
      id: cfg.id,
      type: cfg.type,
      color: cfg.color,
      intensity: cfg.intensity,
      pos: [...cfg.pos],
      rot: [...cfg.rot],
      castShadow: cfg.castShadow,
      softShadow: cfg.softShadow
    }));
  }

  applyLightingState(savedLighting) {
    if (!savedLighting || !Array.isArray(savedLighting)) return;

    savedLighting.forEach((savedCfg) => {
      const match = this.lightConfigs.find((cfg) => cfg.id === savedCfg.id);
      if (match) {
        Object.assign(match, savedCfg);
        const entry = this.lightsMap.get(match.id);
        if (entry) {
          this.scene.remove(entry.instance);
          if (entry.instance.dispose) entry.instance.dispose();
          entry.instance = this.createLightInstance(match);
          this.scene.add(entry.instance);
        }
      }
    });
    this.renderLightingDock();
  }

  updateLightFromBridge(data) {
    if (!data || data.lightIndex === undefined) return;
    const config = this.lightConfigs[data.lightIndex];
    if (!config) return;
    const field = data.field || '';
    if (field.includes('Intensity')) {
      config.intensity = Number(data.value) || 0;
      const entry = this.lightsMap.get(config.id);
      if (entry) entry.instance.intensity = config.intensity;
    }
  }
}