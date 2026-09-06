export function createModelPersistenceController({
  modelManager,
  clearStoredModel,
  getStoredFileHandle,
  getStoredBinaryModel,
  saveBinaryModel,
  savePresetBinaryModel,
  getPresetBinaryModel,
  clearPresetBinaryModel,
  saveFileHandle,
  verifyFilePermission,
}) {
  let currentModel = null;

  async function loadBuffer(buffer, name) {
    await modelManager.parseAndLoadGLTF(buffer);
    currentModel = { buffer, name };
    await saveBinaryModel(buffer, name);
  }

  async function loadStoredModel() {
    const handle = await getStoredFileHandle();
    if (handle) {
      try {
        if (await verifyFilePermission(handle)) {
          const file = await handle.getFile();
          await loadBuffer(await file.arrayBuffer(), file.name);
          return true;
        }
      } catch (error) {
        if (error?.name !== 'SecurityError') {
          console.warn('File handle load error:', error);
        }
      }
    }

    const stored = await getStoredBinaryModel();
    if (stored?.buffer) {
      await loadBuffer(stored.buffer, stored.name);
      return true;
    }

    currentModel = null;
    modelManager.buildProceduralController();
    return false;
  }

  async function loadSelectedFile(file) {
    if (!file) return;
    await loadBuffer(await file.arrayBuffer(), file.name);
  }

  async function pickFile() {
    if (!window.showOpenFilePicker) return;

    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{ description: '3D Models', accept: { 'model/gltf-binary': ['.glb'] } }],
        multiple: false,
      });
      if (!handle) return;

      const file = await handle.getFile();
      await loadBuffer(await file.arrayBuffer(), file.name);
      await saveFileHandle(handle);
    } catch (error) {
      if (error?.name !== 'AbortError') console.warn('Failed to pick model file:', error);
    }
  }

  async function resetToProcedural() {
    await clearStoredModel();
    currentModel = null;
    modelManager.buildProceduralController();
  }

  async function loadPresetModel(model) {
    if (!model?.buffer) {
      currentModel = null;
      await clearStoredModel();
      modelManager.buildProceduralController();
      return;
    }
    await loadBuffer(model.buffer, model.name);
  }

  return {
    loadStoredModel,
    loadSelectedFile,
    loadPresetModel,
    savePresetBinaryModel,
    getPresetBinaryModel,
    clearPresetBinaryModel,
    pickFile,
    resetToProcedural,
    getCurrentModel: () => currentModel,
  };
}
