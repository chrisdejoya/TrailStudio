import { LOCAL_STORAGE_KEY } from './state.js';

export function createSettingsPersistence({ getState, applyState, storage = localStorage }) {
  let saveTimer = null;

  function save() {
    try {
      storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getState()));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 150);
  }

  function load() {
    try {
      const raw = storage.getItem(LOCAL_STORAGE_KEY);
      if (raw) applyState(JSON.parse(raw));
    } catch (error) {
      console.error('Failed to parse settings from localStorage:', error);
    }
  }

  function dispose() {
    clearTimeout(saveTimer);
    saveTimer = null;
  }

  return { save, scheduleSave, load, dispose };
}
