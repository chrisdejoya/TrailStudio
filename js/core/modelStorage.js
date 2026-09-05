const DB_NAME = 'TrailStudio';
const DB_VERSION = 1;
const STORE_NAME = 'models';
const MODEL_KEY = 'current_glb';
const HANDLE_KEY = 'current_file_handle';

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readStoreValue(key) {
  try {
    const database = await openDatabase();
    return await new Promise((resolve) => {
      const transaction = database.transaction(STORE_NAME, 'readonly');
      const request = transaction.objectStore(STORE_NAME).get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function writeStoreValue(key, value, errorMessage) {
  try {
    const database = await openDatabase();
    const transaction = database.transaction(STORE_NAME, 'readwrite');
    transaction.objectStore(STORE_NAME).put(value, key);
  } catch (error) {
    console.error(errorMessage, error);
  }
}

export function saveBinaryModel(buffer, name) {
  return writeStoreValue(MODEL_KEY, { buffer, name }, 'Failed to save model to IndexedDB:');
}

export function getStoredBinaryModel() {
  return readStoreValue(MODEL_KEY);
}

export function saveFileHandle(handle) {
  return writeStoreValue(HANDLE_KEY, handle, 'Failed to save handle to IndexedDB:');
}

export function getStoredFileHandle() {
  return readStoreValue(HANDLE_KEY);
}

export async function clearStoredModel() {
  try {
    const database = await openDatabase();
    const transaction = database.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.delete(MODEL_KEY);
    store.delete(HANDLE_KEY);
  } catch (error) {
    console.error('Failed to clear model from IndexedDB:', error);
  }
}

export async function verifyFilePermission(fileHandle) {
  if (!fileHandle || typeof fileHandle.queryPermission !== 'function') return false;

  const options = { mode: 'read' };

  try {
    if ((await fileHandle.queryPermission(options)) === 'granted') return true;
  } catch {
    return false;
  }

  if (!navigator.userActivation?.isActive) return false;

  try {
    return (await fileHandle.requestPermission(options)) === 'granted';
  } catch (error) {
    if (error?.name === 'SecurityError') {
      console.warn('File permission request requires a user gesture.');
    }
    return false;
  }
}
