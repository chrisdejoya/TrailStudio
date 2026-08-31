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
        light = new THREE.PointLight(col, config.intensity, config.distance ?? 0, config.decay ?? 2);
        break;
      case 'SpotLight':
        light = new THREE.SpotLight(
          col, 
          config.intensity, 
          config.distance ?? 0, 
          config.angle ?? Math.PI / 3, 
          config.penumbra ?? 0, 
          config.decay ?? 2
        );
        break;
      default:
        light = new THREE.HemisphereLight(
          col, 
          new THREE.Color(config.groundColor || 0x080b12), 
          config.intensity
        );
        break;
    }

    if (config.type !== 'HemisphereLight') {
      light.position.set(...config.pos);
    }

    if (config.type === 'DirectionalLight' || config.type === 'SpotLight') {
      const targetPos = config.target || [0, 0, 0];
      light.target.position.set(...targetPos);
      this.scene.add(light.target);
    }

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
    this.activeLightId = (this.activeLightId === id && id !== null) ? null : id;

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

  disposeLightEntry(entry) {
    if (entry.instance.target) {
      this.scene.remove(entry.instance.target);
    }
    this.scene.remove(entry.instance);
    if (entry.instance.dispose) entry.instance.dispose();
    if (entry.instance.shadow?.map) {
      entry.instance.shadow.map.dispose();
    }
  }

  replaceLightInstance(cfg) {
    const entry = this.lightsMap.get(cfg.id);
    if (!entry) return;

    this.disposeLightEntry(entry);
    const newLight = this.createLightInstance(cfg);
    this.scene.add(newLight);
    entry.instance = newLight;
  }

  renderLightingDock() {
    const container = document.querySelector('#dockContent');
    if (!container) return;
    container.innerHTML = '';

    this.lightConfigs.forEach((cfg) => {
      const entry = this.lightsMap.get(cfg.id);
      const card = document.createElement('div');
      card.className = 'panel light-card';
      card.id = `light-card-${cfg.id}`;

      card.addEventListener('mousedown', (e) => {
        if (['INPUT', 'SELECT', 'LABEL'].includes(e.target.tagName)) return;
        e.stopPropagation();
        this.setActiveLight(cfg.id);
      });

      const isHemisphere = cfg.type === 'HemisphereLight';
      const isPoint = cfg.type === 'PointLight';
      const isSpot = cfg.type === 'SpotLight';
      const supportsShadow = !isHemisphere;

      card.innerHTML = `
        <div class="panel-header" onclick="togglePanel(this)">
          <div class="panel-header-left">
            <input type="checkbox" id="${cfg.id}-toggle" checked onclick="event.stopPropagation()">
            <label for="${cfg.id}-toggle" onclick="event.stopPropagation()">${cfg.name}</label>
          </div>
          <svg class="caret" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,8 20,16 4,16"/></svg>
        </div>
        <div class="panel-body"><div class="panel-body-content">
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
          <input type="number" id="${cfg.id}-intensity-input" min="0" max="10" step="0.1" value="${cfg.intensity.toFixed(1)}">
        </div>
        
        <div class="control-row">
          <label>${isHemisphere ? 'Sky Color' : 'Color'}</label>
          <input type="color" id="${cfg.id}-color" value="${cfg.color}">
        </div>

        ${isHemisphere ? `
        <div class="control-row">
          <label>Ground Color</label>
          <input type="color" id="${cfg.id}-ground-color" value="${cfg.groundColor || '#080b12'}">
        </div>
        ` : ''}

        ${!isHemisphere ? `
        <div class="control-row">
          <label>Pos (X,Y,Z)</label>
          <div class="pos-inputs">
            <input type="number" id="${cfg.id}-pos-x" value="${cfg.pos[0]}" step="0.5">
            <input type="number" id="${cfg.id}-pos-y" value="${cfg.pos[1]}" step="0.5">
            <input type="number" id="${cfg.id}-pos-z" value="${cfg.pos[2]}" step="0.5">
          </div>
        </div>
        ` : ''}

        ${cfg.type === 'DirectionalLight' || isSpot ? `
        <div class="control-row">
          <label>Target (X,Y,Z)</label>
          <div class="pos-inputs">
            <input type="number" id="${cfg.id}-target-x" value="${cfg.target?.[0] ?? 0}" step="0.5">
            <input type="number" id="${cfg.id}-target-y" value="${cfg.target?.[1] ?? 0}" step="0.5">
            <input type="number" id="${cfg.id}-target-z" value="${cfg.target?.[2] ?? 0}" step="0.5">
          </div>
        </div>
        ` : ''}

        ${isPoint || isSpot ? `
        <div class="control-row">
          <label>Distance</label>
          <input type="number" id="${cfg.id}-distance" value="${cfg.distance ?? 0}" min="0" step="1">
        </div>
        ` : ''}

        ${isSpot ? `
        <div class="control-row">
          <label>Angle (°)</label>
          <input type="range" id="${cfg.id}-angle" min="1" max="90" step="1" value="${Math.round((cfg.angle ?? Math.PI / 3) * 180 / Math.PI)}">
        </div>
        <div class="control-row">
          <label>Penumbra</label>
          <input type="range" id="${cfg.id}-penumbra" min="0" max="1" step="0.05" value="${cfg.penumbra ?? 0}">
        </div>
        ` : ''}

        ${supportsShadow ? `
        <div class="control-row" style="margin-top:4px; border-top: 1px solid #222226; padding-top:8px;">
          <label>Shadows</label>
          <input type="checkbox" id="${cfg.id}-shadow" ${cfg.castShadow ? 'checked' : ''}>
        </div>
        <div class="control-row">
          <label>Soft Shadows</label>
          <input type="checkbox" id="${cfg.id}-soft-shadow" ${cfg.softShadow ? 'checked' : ''} ${!cfg.castShadow ? 'disabled' : ''}>
        </div>
        ` : ''}
      </div></div>
      `;

      container.appendChild(card);

      // Event Bindings
      card.querySelector('.panel-header').addEventListener('click', () => this.setActiveLight(cfg.id));
      card.querySelector(`#${cfg.id}-toggle`).addEventListener('change', (e) => { entry.instance.visible = e.target.checked; });

      const intRange = card.querySelector(`#${cfg.id}-intensity`);
      const intInput = card.querySelector(`#${cfg.id}-intensity-input`);

      const updateIntensity = (val) => {
        const clamped = Math.max(0, Math.min(10, val));
        entry.instance.intensity = clamped;
        cfg.intensity = clamped;
        intRange.value = clamped;
        intInput.value = clamped.toFixed(1);
      };

      intRange.addEventListener('input', (e) => updateIntensity(parseFloat(e.target.value)));
      intInput.addEventListener('input', (e) => updateIntensity(parseFloat(e.target.value) || 0));

      card.querySelector(`#${cfg.id}-color`).addEventListener('input', (e) => {
        cfg.color = e.target.value;
        entry.instance.color.set(e.target.value);
      });

      if (isHemisphere) {
        card.querySelector(`#${cfg.id}-ground-color`).addEventListener('input', (e) => {
          cfg.groundColor = e.target.value;
          entry.instance.groundColor.set(e.target.value);
        });
      }

      card.querySelector(`#${cfg.id}-type`).addEventListener('change', (e) => {
        cfg.type = e.target.value;
        this.replaceLightInstance(cfg);
        this.renderLightingDock();
      });

      if (!isHemisphere) {
        const updatePos = () => {
          cfg.pos = ['x', 'y', 'z'].map(axis => parseFloat(card.querySelector(`#${cfg.id}-pos-${axis}`).value) || 0);
          entry.instance.position.set(...cfg.pos);
        };
        ['x', 'y', 'z'].forEach((axis) => card.querySelector(`#${cfg.id}-pos-${axis}`).addEventListener('input', updatePos));
      }

      if (cfg.type === 'DirectionalLight' || isSpot) {
        const updateTarget = () => {
          cfg.target = ['x', 'y', 'z'].map(axis => parseFloat(card.querySelector(`#${cfg.id}-target-${axis}`).value) || 0);
          entry.instance.target.position.set(...cfg.target);
          entry.instance.target.updateMatrixWorld();
        };
        ['x', 'y', 'z'].forEach((axis) => card.querySelector(`#${cfg.id}-target-${axis}`).addEventListener('input', updateTarget));
      }

      if (isPoint || isSpot) {
        card.querySelector(`#${cfg.id}-distance`).addEventListener('input', (e) => {
          const val = parseFloat(e.target.value) || 0;
          cfg.distance = val;
          entry.instance.distance = val;
        });
      }

      if (isSpot) {
        card.querySelector(`#${cfg.id}-angle`).addEventListener('input', (e) => {
          const val = (parseFloat(e.target.value) || 45) * Math.PI / 180;
          cfg.angle = val;
          entry.instance.angle = val;
        });
        card.querySelector(`#${cfg.id}-penumbra`).addEventListener('input', (e) => {
          const val = parseFloat(e.target.value) || 0;
          cfg.penumbra = val;
          entry.instance.penumbra = val;
        });
      }

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
      groundColor: cfg.groundColor,
      intensity: cfg.intensity,
      pos: [...cfg.pos],
      target: cfg.target ? [...cfg.target] : [0, 0, 0],
      distance: cfg.distance,
      angle: cfg.angle,
      penumbra: cfg.penumbra,
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
          this.replaceLightInstance(match);
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