export const SETTINGS_VERSION = 2;

const DEFAULT_COLOR = '#aa0022';

const LIMITS = {
  scale: [0.01, 10],
  emissionIntensity: [0, 100],
  trailOffsetY: [-10, 10],
  trailIntensity: [0, 10],
  trailWidth: [0.001, 1],
  trailLength: [0.1, 20],
  trailRadius: [0, 5],
  exposure: [0.01, 10],
  contrast: [0.5, 1.5],
  saturation: [0, 5],
  bloomStrength: [0, 5],
  bloomRadius: [0, 5],
  bloomThreshold: [0, 1],
  aoRadius: [0, 32],
  aoMinDistance: [0, 0.1],
  aoMaxDistance: [0.01, 1],
};

function clampNumber(value, [min, max], fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

export function normalizeColor(color) {
  if (typeof color === 'number' && Number.isFinite(color)) {
    return `#${(color >>> 0).toString(16).padStart(6, '0')}`;
  }

  if (typeof color !== 'string') return DEFAULT_COLOR;

  const cleaned = color
    .trim()
    .replace(/^#+/, '')
    .replace(/[^0-9a-fA-F]/g, '');
  if (!cleaned) return DEFAULT_COLOR;

  let hex =
    cleaned.length === 3
      ? [...cleaned].map((character) => character + character).join('')
      : cleaned;
  if (hex.length > 6) hex = hex.slice(-6);
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) return DEFAULT_COLOR;

  return `#${hex.toLowerCase()}`;
}

function cloneState(value) {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return null;
  }
}

function normalizeNumber(target, key, limitKey, fallback) {
  if (target?.[key] === undefined) return;
  target[key] = clampNumber(target[key], LIMITS[limitKey], fallback);
}

function normalizeBoolean(target, key) {
  if (target?.[key] !== undefined) target[key] = Boolean(target[key]);
}

function normalizeEnum(target, key, values, fallback) {
  if (target?.[key] === undefined) return;
  if (!values.includes(target[key])) target[key] = fallback;
}

export function normalizeSettingsState(input) {
  const state = cloneState(input);
  if (!state || typeof state !== 'object' || Array.isArray(state)) return null;

  state.version = SETTINGS_VERSION;

  if (state.model) {
    normalizeNumber(state.model, 'scale', 'scale', 1);
    normalizeNumber(state.model, 'emissionIntensity', 'emissionIntensity', 1);
    normalizeNumber(state.model, 'trailOffsetY', 'trailOffsetY', 0.2);
    if (state.model.emissionColor !== undefined) {
      state.model.emissionColor = normalizeColor(state.model.emissionColor);
    }
    normalizeBoolean(state.model, 'syncLeftStickDpad');
    normalizeBoolean(state.model, 'dpadButtonVerticalMovement');
  }

  if (state.trail) {
    normalizeBoolean(state.trail, 'enabled');
    normalizeNumber(state.trail, 'intensity', 'trailIntensity', 1.25);
    normalizeNumber(state.trail, 'width', 'trailWidth', 0.05);
    normalizeNumber(state.trail, 'length', 'trailLength', 10);
    normalizeNumber(state.trail, 'radius', 'trailRadius', 0);
    state.trail.colorStart = normalizeColor(state.trail.colorStart);
    state.trail.colorEnd = normalizeColor(state.trail.colorEnd);
  }

  const colorState = state.postProcessing?.color;
  if (colorState) {
    normalizeEnum(
      colorState,
      'toneMapping',
      ['ACESFilmic', 'Linear', 'Reinhard', 'Cineon'],
      'ACESFilmic'
    );
    normalizeNumber(colorState, 'exposure', 'exposure', 1.1);
    normalizeNumber(colorState, 'contrast', 'contrast', 1);
    normalizeNumber(colorState, 'saturation', 'saturation', 1);
  }

  const bloom = state.postProcessing?.bloom;
  if (bloom) {
    normalizeBoolean(bloom, 'enabled');
    normalizeNumber(bloom, 'strength', 'bloomStrength', 1);
    normalizeNumber(bloom, 'radius', 'bloomRadius', 0.75);
    normalizeNumber(bloom, 'threshold', 'bloomThreshold', 0.9);
  }

  const ambientOcclusion = state.postProcessing?.ambientOcclusion;
  if (ambientOcclusion) {
    normalizeBoolean(ambientOcclusion, 'enabled');
    normalizeNumber(ambientOcclusion, 'radius', 'aoRadius', 8);
    normalizeNumber(ambientOcclusion, 'minDistance', 'aoMinDistance', 0.001);
    normalizeNumber(ambientOcclusion, 'maxDistance', 'aoMaxDistance', 0.1);
  }

  return state;
}
