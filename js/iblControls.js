import { DEFAULT_IBL_STATE } from './state.js';
import { bindSliderAndInput } from './uiBridge.js';

export function setupIBLControls(iblState, onUpdate) {
  function bindIBLControl(id, key, type = 'float') {
    const element = document.querySelector(`#${id}`);
    const valueElement = document.querySelector(`#${id}Value`);
    if (!element) return;
    element.addEventListener(type === 'boolean' ? 'change' : 'input', () => {
      iblState[key] = type === 'boolean' ? element.checked : (type === 'color' ? element.value : parseFloat(element.value));
      if (valueElement) valueElement.textContent = type === 'integer' ? String(iblState[key]) : iblState[key].toFixed(type === 'float' ? 2 : 1);
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
    if (element) {
      if (element.type === 'checkbox') element.checked = value;
      else element.value = value;
    }
    const valueElement = document.querySelector(`#${elementMap[key] || ''}Value`);
    if (valueElement && typeof value === 'number') valueElement.textContent = Number.isInteger(value) ? String(value) : value.toFixed(2);
  });

  const iblIntensityInput = document.querySelector('#iblIntensityInput');
  if (iblIntensityInput) iblIntensityInput.value = iblState.intensity.toFixed(2);
  onUpdate();
}