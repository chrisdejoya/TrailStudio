export const SCENE_PRESETS_STORAGE_KEY = 'trailstudio_scene_presets';

const PRESETS_VERSION = 1;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId() {
  return `preset-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function bytesToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary);
}

function base64ToBuffer(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes.buffer;
}

export function createScenePresetStore({
  getState,
  applyState,
  getModel = () => null,
  getPresetModel = async () => null,
  savePresetModel = async () => {},
  loadPresetModel = async () => {},
  deletePresetModel = async () => {},
  storage = globalThis.localStorage,
  onChange = () => {},
}) {
  let presets = [];
  let selectedId = null;

  function persist() {
    storage.setItem(
      SCENE_PRESETS_STORAGE_KEY,
      JSON.stringify({ version: PRESETS_VERSION, selectedId, presets })
    );
  }

  function notify() {
    onChange({ presets: presets.map(clone), selectedId });
  }

  function getModelReference(model) {
    return model?.buffer ? { name: model.name || 'model.glb' } : null;
  }

  async function load() {
    let stored = null;
    try {
      const raw = storage.getItem(SCENE_PRESETS_STORAGE_KEY);
      stored = raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.error('Failed to parse scene presets:', error);
    }

    if (stored && Array.isArray(stored.presets)) {
      presets = stored.presets
        .filter((preset) => preset && typeof preset.name === 'string' && preset.state)
        .map((preset) => ({
          id: String(preset.id || createId()),
          name: preset.name.trim() || 'Preset',
          state: clone(preset.state),
          model: Object.hasOwn(preset, 'model') ? preset.model : undefined,
        }));
      selectedId = presets.some((preset) => preset.id === stored.selectedId)
        ? stored.selectedId
        : presets[0]?.id;
    }

    if (!presets.length) {
      const id = createId();
      const model = getModel();
      presets = [
        { id, name: 'Default', state: clone(getState()), model: getModelReference(model) },
      ];
      selectedId = presets[0].id;
      await savePresetModel(id, model);
      persist();
    }

    notify();
    if (getSelected().model !== undefined) {
      await loadPresetModel(await getPresetModel(selectedId, getSelected().model));
    }
    applyState(clone(getSelected().state));
    return getSelected();
  }

  function getSelected() {
    return presets.find((preset) => preset.id === selectedId) || null;
  }

  async function select(id) {
    const preset = presets.find((entry) => entry.id === id);
    if (!preset) return false;
    selectedId = preset.id;
    if (preset.model !== undefined) {
      await loadPresetModel(await getPresetModel(preset.id, preset.model));
    }
    applyState(clone(preset.state));
    persist();
    notify();
    return true;
  }

  async function update() {
    const preset = getSelected();
    if (!preset) return false;
    preset.state = clone(getState());
    const model = getModel();
    preset.model = getModelReference(model);
    await savePresetModel(preset.id, model);
    persist();
    notify();
    return true;
  }

  async function revert() {
    const preset = getSelected();
    if (!preset) return false;
    if (preset.model !== undefined) {
      await loadPresetModel(await getPresetModel(preset.id, preset.model));
    }
    applyState(clone(preset.state));
    return true;
  }

  async function remove() {
    if (presets.length <= 1) return false;
    const deletedIndex = presets.findIndex((preset) => preset.id === selectedId);
    if (deletedIndex === -1) return false;
    const deletedId = presets[deletedIndex].id;
    presets.splice(deletedIndex, 1);
    await deletePresetModel(deletedId);
    selectedId = presets[Math.min(deletedIndex, presets.length - 1)].id;
    applyState(clone(getSelected().state));
    persist();
    notify();
    return true;
  }

  async function create(name) {
    const trimmedName = name.trim();
    if (!trimmedName) return false;
    const id = createId();
    const model = getModel();
    presets.push({
      id,
      name: trimmedName,
      state: clone(getState()),
      model: getModelReference(model),
    });
    selectedId = id;
    await savePresetModel(id, model);
    persist();
    notify();
    return true;
  }

  function rename(name) {
    const preset = getSelected();
    const trimmedName = name.trim();
    if (!preset || !trimmedName) return false;
    preset.name = trimmedName;
    persist();
    notify();
    return true;
  }

  async function exportData() {
    const exported = [];
    for (const preset of presets) {
      const model = await getPresetModel(preset.id, preset.model);
      exported.push({
        id: preset.id,
        name: preset.name,
        state: clone(preset.state),
        model: model?.buffer
          ? { name: model.name || 'model.glb', data: bytesToBase64(model.buffer) }
          : null,
      });
    }
    return { version: PRESETS_VERSION, selectedId, presets: exported };
  }

  async function importData(data) {
    if (!data || !Array.isArray(data.presets) || !data.presets.length) return false;
    const imported = data.presets
      .filter((preset) => preset && typeof preset.name === 'string' && preset.state)
      .map((preset) => ({
        id: createId(),
        name: preset.name.trim() || 'Preset',
        state: clone(preset.state),
        model: preset.model?.data ? { name: preset.model.name || 'model.glb' } : null,
        modelData: preset.model?.data || null,
      }));
    if (!imported.length) return false;

    presets = imported.map(({ modelData, ...preset }) => preset);
    for (const [index, preset] of imported.entries()) {
      if (modelData) {
        await savePresetModel(preset.id, {
          name: preset.model.name,
          buffer: base64ToBuffer(modelData),
        });
      } else {
        await deletePresetModel(preset.id);
      }
    }
    selectedId = presets[0].id;
    persist();
    await loadPresetModel(await getPresetModel(selectedId, presets[0].model));
    applyState(clone(presets[0].state));
    notify();
    return true;
  }

  return {
    load,
    select,
    update,
    revert,
    remove,
    create,
    rename,
    exportData,
    importData,
    getSelected,
  };
}
