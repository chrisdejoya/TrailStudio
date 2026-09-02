import { DEFAULT_IBL_STATE } from './state.js';
import { bindSliderAndInput } from './uiBridge.js';
import { initializeColorPicker, setColorPickerValue } from './colorPicker.js';

export function setupIBLControls(iblState, onUpdate) {
  function bindIBLControl(id, key, type = 'float') {
    const element = document.querySelector(`#${id}`);
    const inputElement = document.querySelector(`#${id}Input`);
    if (!element) return;
    if (type === 'color') {
      initializeColorPicker(element, element.dataset.value, (value) => {
        iblState[key] = value;
        onUpdate();
      });
      return;
    }
    element.addEventListener(type === 'boolean' ? 'change' : 'input', () => {
      const val = type === 'boolean' ? element.checked : parseFloat(element.value);
      iblState[key] = val;
      if (inputElement) inputElement.value = type === 'integer' ? String(val) : val.toFixed(type === 'float' ? 2 : 1);
      onUpdate();
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
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSkyLevel', '#iblSkyLevelInput', (value) => {
    iblState.skyLevel = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblHorizonLevel', '#iblHorizonLevelInput', (value) => {
    iblState.horizonLevel = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblGroundLevel', '#iblGroundLevelInput', (value) => {
    iblState.groundLevel = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSun1Elevation', '#iblSun1ElevationInput', (value) => {
    iblState.sun1Elevation = value;
    onUpdate();
  }, 0);

  bindSliderAndInput('#iblSun1Azimuth', '#iblSun1AzimuthInput', (value) => {
    iblState.sun1Azimuth = value;
    onUpdate();
  }, 0);

  bindSliderAndInput('#iblSun1Size', '#iblSun1SizeInput', (value) => {
    iblState.sun1Size = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSun1Intensity', '#iblSun1IntensityInput', (value) => {
    iblState.sun1Intensity = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSun1Atmosphere', '#iblSun1AtmosphereInput', (value) => {
    iblState.sun1Atmosphere = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSun2Elevation', '#iblSun2ElevationInput', (value) => {
    iblState.sun2Elevation = value;
    onUpdate();
  }, 0);

  bindSliderAndInput('#iblSun2Azimuth', '#iblSun2AzimuthInput', (value) => {
    iblState.sun2Azimuth = value;
    onUpdate();
  }, 0);

  bindSliderAndInput('#iblSun2Size', '#iblSun2SizeInput', (value) => {
    iblState.sun2Size = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSun2Intensity', '#iblSun2IntensityInput', (value) => {
    iblState.sun2Intensity = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblSun2Atmosphere', '#iblSun2AtmosphereInput', (value) => {
    iblState.sun2Atmosphere = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblRingHeight', '#iblRingHeightInput', (value) => {
    iblState.ringHeight = value;
    onUpdate();
  }, 2);

  bindSliderAndInput('#iblRingIntensity', '#iblRingIntensityInput', (value) => {
    iblState.ringIntensity = value;
    onUpdate();
  }, 2);
}

export function applyIBLStateToUI(iblState, state, onUpdate) {
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
    const inputElement = document.querySelector(`#${elementMap[key] || ''}Input`);
    if (element) {
      if (element.type === 'checkbox') element.checked = value;
      else if (element.classList.contains('custom-color-picker')) setColorPickerValue(element, value);
      else element.value = value;
    }
    if (inputElement && typeof value === 'number') {
      inputElement.value = Number.isInteger(value) ? String(value) : value.toFixed(2);
    }
  });
  onUpdate();
}