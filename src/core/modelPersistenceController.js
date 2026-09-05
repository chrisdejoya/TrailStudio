export function createModelPersistenceController({
  modelManager,
  clearStoredModel,
  getStoredFileHandle,
  getStoredBinaryModel,
  saveBinaryModel,
  saveFileHandle,
  verifyFilePermission,
}) {
  async function loadBuffer(buffer, name) {
    modelManager.parseAndLoadGLTF(buffer);
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
      modelManager.parseAndLoadGLTF(stored.buffer);
      return true;
    }

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
    modelManager.buildProceduralController();
  }

  return { loadStoredModel, loadSelectedFile, pickFile, resetToProcedural };
}
