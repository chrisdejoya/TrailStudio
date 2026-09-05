import { normalizeColor } from './settings.js';
import { setColorPickerValue } from '../ui/colorPicker.js';

const query = (selector) => document.querySelector(selector);

export function applyModelSettings(
  state,
  { modelManager, trailManager, syncModelScale, setEmissionMultiplier, emissionColor }
) {
  if (!state) return;

  if (state.scale !== undefined) syncModelScale(state.scale);
  if (state.emissionIntensity !== undefined) {
    setEmissionMultiplier(state.emissionIntensity);
    query('#emissionIntensity').value = state.emissionIntensity;
    query('#emissionIntensityInput').value = state.emissionIntensity.toFixed(2);
  }
  if (state.trailOffsetY !== undefined) {
    trailManager.setOffsetY(state.trailOffsetY);
    query('#trailOffset').value = state.trailOffsetY;
    query('#trailOffsetInput').value = state.trailOffsetY.toFixed(2);
  }
  if (state.emissionColor) {
    const color = normalizeColor(state.emissionColor);
    setColorPickerValue(query('#emissionColor'), color);
    emissionColor.set(color);
  }
  if (state.syncLeftStickDpad !== undefined) {
    query('#syncLeftStickDpadToggle').checked = state.syncLeftStickDpad;
    modelManager.setSyncLeftStickDpad(state.syncLeftStickDpad);
  }
  if (state.dpadButtonVerticalMovement !== undefined) {
    query('#dpadButtonVerticalMovementToggle').checked = state.dpadButtonVerticalMovement;
    modelManager.setDpadButtonVerticalMovement(state.dpadButtonVerticalMovement);
  }
}

export function applyTrailSettings(state, trailManager) {
  if (!state) return;

  query('#trailEnabled').checked = state.enabled;
  trailManager.setEnabled(state.enabled);

  if (state.colorStart) {
    const color = normalizeColor(state.colorStart);
    trailManager.setColorStart(color);
    setColorPickerValue(query('#trailColorStart'), color);
  }
  if (state.colorEnd) {
    const color = normalizeColor(state.colorEnd);
    trailManager.setColorEnd(color);
    setColorPickerValue(query('#trailColorEnd'), color);
  }
  if (state.intensity !== undefined) {
    trailManager.setIntensity(state.intensity);
    query('#trailIntensity').value = state.intensity;
    query('#trailIntensityInput').value = state.intensity.toFixed(2);
  }
  if (state.width !== undefined) {
    trailManager.setWidth(state.width);
    query('#trailWidth').value = state.width;
    query('#trailWidthInput').value = state.width.toFixed(3);
  }
  if (state.length !== undefined) {
    trailManager.setLength(state.length);
    query('#trailLength').value = state.length;
    query('#trailLengthInput').value = state.length.toFixed(1);
  }
  if (state.radius !== undefined) {
    trailManager.setRadius(state.radius);
    query('#trailRadius').value = state.radius;
    query('#trailRadiusInput').value = state.radius.toFixed(2);
  }
}

export function applySceneSettings(
  state,
  { lightingManager, getButtonLabelManager, refreshButtonLabels }
) {
  if (!state) return;

  if (state.lighting) lightingManager.applyLightingState(state.lighting);
  if (state.buttonLabels && getButtonLabelManager()) {
    getButtonLabelManager().fromJSON(state.buttonLabels);
    refreshButtonLabels();
  }
}
