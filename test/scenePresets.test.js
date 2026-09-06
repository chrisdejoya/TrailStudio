import test from 'node:test';
import assert from 'node:assert/strict';
import { createScenePresetStore, SCENE_PRESETS_STORAGE_KEY } from '../src/core/scenePresets.js';

function createHarness(initialState = { model: { scale: 1 } }) {
  const values = new Map();
  let state = structuredClone(initialState);
  const applied = [];
  const store = createScenePresetStore({
    storage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    },
    getState: () => state,
    applyState: (nextState) => {
      state = structuredClone(nextState);
      applied.push(state);
    },
  });
  return { store, values, applied, getState: () => state, setState: (next) => (state = next) };
}

test('creates a default preset and reverts unsaved changes', async () => {
  const harness = createHarness();
  await harness.store.load();
  harness.setState({ model: { scale: 2 } });

  assert.equal(await harness.store.revert(), true);
  assert.deepEqual(harness.getState(), { model: { scale: 1 } });
  assert.ok(harness.values.has(SCENE_PRESETS_STORAGE_KEY));
});

test('updates and prevents deleting the last selected preset', async () => {
  const harness = createHarness();
  await harness.store.load();
  harness.setState({ model: { scale: 3 } });
  assert.equal(await harness.store.update(), true);
  assert.deepEqual(harness.store.getSelected().state, { model: { scale: 3 } });
  assert.equal(await harness.store.remove(), false);
});

test('creates and renames a preset from the active state', async () => {
  const harness = createHarness();
  await harness.store.load();

  assert.equal(await harness.store.create('Studio'), true);
  assert.equal(harness.store.getSelected().name, 'Studio');
  assert.equal(harness.store.rename('Final'), true);
  assert.equal(harness.store.getSelected().name, 'Final');
});

test('stores and restores the active preset model', async () => {
  const models = new Map();
  let currentModel = { buffer: 'default-glb', name: 'default.glb' };
  const harness = createScenePresetStore({
    storage: {
      getItem: () => null,
      setItem: () => {},
    },
    getState: () => ({ model: { scale: 1 } }),
    applyState: () => {},
    getModel: () => currentModel,
    savePresetModel: (id, model) => models.set(id, model),
    getPresetModel: (id) => models.get(id),
    loadPresetModel: (model) => {
      currentModel = model;
    },
  });

  await harness.load();
  currentModel = { buffer: 'custom-glb', name: 'custom.glb' };
  await harness.update();
  currentModel = null;
  await harness.revert();

  assert.deepEqual(currentModel, { buffer: 'custom-glb', name: 'custom.glb' });
});
