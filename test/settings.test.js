import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeColor, normalizeSettingsState, SETTINGS_VERSION } from '../src/core/settings.js';
import { createSettingsPersistence } from '../src/core/settingsPersistence.js';

test('normalizes supported color formats', () => {
  assert.equal(normalizeColor(0x12abef), '#12abef');
  assert.equal(normalizeColor('#abc'), '#aabbcc');
  assert.equal(normalizeColor('invalid'), '#aa0022');
});

test('clamps imported settings and adds a version', () => {
  const normalized = normalizeSettingsState({
    model: { scale: 100, emissionColor: '#fff' },
    trail: { width: -1, colorStart: 0x123456 },
    postProcessing: { bloom: { threshold: 4 } },
  });

  assert.equal(normalized.version, SETTINGS_VERSION);
  assert.equal(normalized.model.scale, 10);
  assert.equal(normalized.model.emissionColor, '#ffffff');
  assert.equal(normalized.trail.width, 0.001);
  assert.equal(normalized.trail.colorStart, '#123456');
  assert.equal(normalized.postProcessing.bloom.threshold, 1);
});

test('normalizes booleans and rejects unsupported enum values', () => {
  const normalized = normalizeSettingsState({
    model: { syncLeftStickDpad: 1 },
    trail: { enabled: 0 },
    postProcessing: {
      bloom: { enabled: 'yes' },
      color: { toneMapping: 'Unknown' },
    },
  });

  assert.equal(normalized.model.syncLeftStickDpad, true);
  assert.equal(normalized.trail.enabled, false);
  assert.equal(normalized.postProcessing.bloom.enabled, true);
  assert.equal(normalized.postProcessing.color.toneMapping, 'ACESFilmic');
});

test('rejects non-object settings', () => {
  assert.equal(normalizeSettingsState(null), null);
  assert.equal(normalizeSettingsState('settings'), null);
  assert.equal(normalizeSettingsState([]), null);
});

test('persists and restores settings through the storage adapter', () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  let restored = null;
  const persistence = createSettingsPersistence({
    storage,
    getState: () => ({ version: SETTINGS_VERSION, model: { scale: 2 } }),
    applyState: (state) => {
      restored = state;
    },
  });

  persistence.save();
  persistence.load();

  assert.deepEqual(restored, { version: SETTINGS_VERSION, model: { scale: 2 } });
  persistence.dispose();
});
