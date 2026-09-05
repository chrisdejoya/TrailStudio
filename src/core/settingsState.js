import { normalizeColor, SETTINGS_VERSION } from './settings.js';
import { getColorPickerValue } from '../ui/colorPicker.js';

const query = (selector) => document.querySelector(selector);

export function createSettingsStateReader({
  getCameraState,
  trailManager,
  lightingManager,
  iblState,
  getButtonLabelManager,
}) {
  return function getSettingsState() {
    const trailConfig = trailManager.getTrailConfig
      ? trailManager.getTrailConfig()
      : {
          colorStart: 0xaa0022,
          colorEnd: 0x00aaaa,
          intensity: 1.25,
          width: 0.05,
          length: 10,
        };

    return {
      version: SETTINGS_VERSION,
      camera: getCameraState(),
      model: {
        scale: parseFloat(query('#modelScale').value),
        emissionIntensity: parseFloat(query('#emissionIntensity').value),
        trailOffsetY: trailManager.getOffsetY(),
        emissionColor: getColorPickerValue(query('#emissionColor')),
        syncLeftStickDpad: query('#syncLeftStickDpadToggle')?.checked ?? false,
        dpadButtonVerticalMovement: query('#dpadButtonVerticalMovementToggle')?.checked ?? true,
      },
      trail: {
        enabled: query('#trailEnabled')?.checked ?? true,
        colorStart: normalizeColor(trailConfig.colorStart),
        colorEnd: normalizeColor(trailConfig.colorEnd),
        intensity: trailConfig.intensity,
        width: trailConfig.width,
        length: trailConfig.length,
        radius: trailConfig.radius,
      },
      postProcessing: {
        aaEnabled: query('#aaToggle').checked,
        aaQuality: query('#aaQualitySelect').value,
        shadowQuality: query('#shadowQualitySelect').value,
        bloom: {
          enabled: query('#bloomToggle').checked,
          strength: parseFloat(query('#bloomStrength').value),
          radius: parseFloat(query('#bloomRadius').value),
          threshold: parseFloat(query('#bloomThreshold').value),
        },
        ambientOcclusion: {
          enabled: query('#aoToggle').checked,
          radius: parseFloat(query('#aoRadius').value),
          minDistance: parseFloat(query('#aoMinDistance').value),
          maxDistance: parseFloat(query('#aoMaxDistance').value),
        },
        color: {
          toneMapping: query('#toneMappingSelect').value,
          exposure: parseFloat(query('#exposureRange').value),
          contrast: parseFloat(query('#contrastRange').value),
          saturation: parseFloat(query('#saturationRange').value),
        },
      },
      lighting: lightingManager.getLightingState(),
      ibl: { ...iblState },
      buttonLabels: getButtonLabelManager()?.toJSON() ?? {},
    };
  };
}
