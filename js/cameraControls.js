import * as THREE from 'three';

// -----------------------------------------------------------------------------
// CAMERA SETUP & STATE
// -----------------------------------------------------------------------------
export const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
export const cameraTarget = new THREE.Vector3(0, 0, 0);

let radius = 6.5;
let isUpdatingRotUI = false;

let isMouseDown = false;
let activeMouseButton = -1;
let previousMousePosition = { x: 0, y: 0 };

// Frame rate capping states
let fpsLimitEnabled = false;
let targetFps = 60;

export function setFpsLimitState(enabled, fps) {
  fpsLimitEnabled = enabled;
  targetFps = parseInt(fps, 10) || 60;
}

export function getFpsLimitState() {
  return {
    enabled: fpsLimitEnabled,
    fps: targetFps
  };
}

// Accumulators for high-performance rAF smoothing
let accumulatedDeltaX = 0;
let accumulatedDeltaY = 0;
let isRafPending = false;
let activeLightIdRef = null;

const panRight = new THREE.Vector3();
const panUp = new THREE.Vector3();
const panForward = new THREE.Vector3();

// Snap thresholds stored in radians for high-performance drag checks
const DEG2RAD = Math.PI / 180;
export let rotationSnapThresholdY = 1.0 * DEG2RAD; 
export let rotationSnapThresholdX = 1.0 * DEG2RAD;

export function setRotationSnapThresholds(yThresholdDeg, xThresholdDeg) {
  if (yThresholdDeg !== undefined) rotationSnapThresholdY = yThresholdDeg * DEG2RAD;
  if (xThresholdDeg !== undefined) rotationSnapThresholdX = xThresholdDeg * DEG2RAD;
}

// Reference to the object group being rotated instead of the camera
let targetModelGroup = null;

export function setTargetModelGroup(group) {
  targetModelGroup = group;
}

// -----------------------------------------------------------------------------
// DOM CACHING FOR PERFORMANCE
// -----------------------------------------------------------------------------
let domElements = {};
let uiUpdateScheduled = false;

function cacheDomElements() {
  domElements = {
    camTargetX: document.querySelector('#camTargetX'),
    camTargetY: document.querySelector('#camTargetY'),
    camTargetZ: document.querySelector('#camTargetZ'),
    camRadius: document.querySelector('#camRadius'),
    camRadiusInput: document.querySelector('#camRadiusInput'),
    camRotX: document.querySelector('#camRotX'),
    camRotY: document.querySelector('#camRotY'),
    camRotZ: document.querySelector('#camRotZ'),
    camFov: document.querySelector('#camFov'),
    camFovInput: document.querySelector('#camFovInput'),
    fpsToggle: document.querySelector('#fpsToggle'),
    fpsSelect: document.querySelector('#fpsSelect')
  };
}

// -----------------------------------------------------------------------------
// UTILITY & SYNC FUNCTIONS
// -----------------------------------------------------------------------------
export function syncTargetInputs() {
  if (!domElements.camTargetX) cacheDomElements();
  if (domElements.camTargetX) domElements.camTargetX.value = cameraTarget.x.toFixed(2);
  if (domElements.camTargetY) domElements.camTargetY.value = cameraTarget.y.toFixed(2);
  if (domElements.camTargetZ) domElements.camTargetZ.value = cameraTarget.z.toFixed(2);
}

export function updateCameraPosition(skipRotationUpdate = false) {
  camera.position.set(cameraTarget.x, cameraTarget.y + 1.2, cameraTarget.z + radius);
  camera.lookAt(cameraTarget);

  if (!domElements.camRadius) cacheDomElements();
  if (domElements.camRadius) domElements.camRadius.value = radius;
  if (domElements.camRadiusInput) domElements.camRadiusInput.value = radius.toFixed(1);

  if (!skipRotationUpdate && targetModelGroup) {
    if (!uiUpdateScheduled) {
      uiUpdateScheduled = true;
      requestAnimationFrame(() => {
        if (!isUpdatingRotUI && targetModelGroup) {
          isUpdatingRotUI = true;
          if (domElements.camRotX) domElements.camRotX.value = (targetModelGroup.rotation.x / DEG2RAD).toFixed(1);
          if (domElements.camRotY) domElements.camRotY.value = (targetModelGroup.rotation.y / DEG2RAD).toFixed(1);
          if (domElements.camRotZ) domElements.camRotZ.value = (targetModelGroup.rotation.z / DEG2RAD).toFixed(1);
          isUpdatingRotUI = false;
        }
        uiUpdateScheduled = false;
      });
    }
  }
}

export const syncFov = (val, compensate = true) => {
  const oldFov = camera.fov;
  const fovVal = Math.max(1, Math.min(170, parseFloat(val) || 50));

  if (compensate && oldFov !== fovVal) {
    const oldHalfFovRad = (oldFov * 0.5) * DEG2RAD;
    const newHalfFovRad = (fovVal * 0.5) * DEG2RAD;
    radius = radius * (Math.tan(oldHalfFovRad) / Math.tan(newHalfFovRad));
    radius = Math.max(0.5, Math.min(50, radius));
    if (!domElements.camRadius) cacheDomElements();
    if (domElements.camRadius) domElements.camRadius.value = radius;
    if (domElements.camRadiusInput) domElements.camRadiusInput.value = radius.toFixed(1);
  }

  camera.fov = fovVal;
  camera.updateProjectionMatrix();
  if (!domElements.camFov) cacheDomElements();
  if (domElements.camFov) domElements.camFov.value = fovVal;
  if (domElements.camFovInput) domElements.camFovInput.value = fovVal;

  updateCameraPosition(true);
};

export const syncZoom = (val) => {
  radius = Math.max(0.5, Math.min(50, parseFloat(val) || 6.5));
  updateCameraPosition();
};

export const updateRotFromInputs = () => {
  if (isUpdatingRotUI || !targetModelGroup) return;
  if (!domElements.camRotX) cacheDomElements();
  const rotX = (parseFloat(domElements.camRotX?.value) || 0) * DEG2RAD;
  const rotY = (parseFloat(domElements.camRotY?.value) || 0) * DEG2RAD;
  const rotZ = (parseFloat(domElements.camRotZ?.value) || 0) * DEG2RAD;

  targetModelGroup.rotation.set(rotX, rotY, rotZ);
};

export const updateCamTarget = () => {
  if (!domElements.camTargetX) cacheDomElements();
  cameraTarget.x = parseFloat(domElements.camTargetX?.value) || 0;
  cameraTarget.y = parseFloat(domElements.camTargetY?.value) || 0;
  cameraTarget.z = parseFloat(domElements.camTargetZ?.value) || 0;
  updateCameraPosition();
};

// -----------------------------------------------------------------------------
// UI BINDINGS & INPUT LISTENERS
// -----------------------------------------------------------------------------
export function setupCameraInputs(onSaveCallback) {
  cacheDomElements();

  if (domElements.camFov) domElements.camFov.addEventListener('input', (e) => syncFov(e.target.value));
  if (domElements.camFovInput) domElements.camFovInput.addEventListener('input', (e) => syncFov(e.target.value));

  if (domElements.camRadius) domElements.camRadius.addEventListener('input', (e) => syncZoom(e.target.value));
  if (domElements.camRadiusInput) domElements.camRadiusInput.addEventListener('input', (e) => syncZoom(e.target.value));

  if (domElements.fpsToggle) {
    domElements.fpsToggle.addEventListener('change', (e) => {
      fpsLimitEnabled = e.target.checked;
      if (onSaveCallback) onSaveCallback();
    });
  }

  if (domElements.fpsSelect) {
    domElements.fpsSelect.addEventListener('change', (e) => {
      targetFps = parseInt(e.target.value, 10);
      if (onSaveCallback) onSaveCallback();
    });
  }

  ['X', 'Y', 'Z'].forEach((axis) => {
    const input = document.querySelector(`#camRot${axis}`);
    if (input) input.addEventListener('input', updateRotFromInputs);
  });

  ['X', 'Y', 'Z'].forEach((axis) => {
    const input = document.querySelector(`#camTarget${axis}`);
    if (input) input.addEventListener('input', updateCamTarget);
  });

  const resetCamBtn = document.querySelector('#resetCamBtn');
  if (resetCamBtn) {
    resetCamBtn.addEventListener('click', () => {
      radius = 6.5;
      cameraTarget.set(0, 0, 0);
      if (targetModelGroup) targetModelGroup.rotation.set(0.55, 0, 0);
      syncFov(50);
      syncTargetInputs();
      updateCameraPosition();
      if (onSaveCallback) onSaveCallback();
    });
  }

  window.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
}

// -----------------------------------------------------------------------------
// EVENT HANDLERS (Throttled via requestAnimationFrame)
// -----------------------------------------------------------------------------
export function handleCameraMouseDown(e) {
  isMouseDown = true;
  activeMouseButton = e.button;
  previousMousePosition = { x: e.clientX, y: e.clientY };
}

export function handleCameraMouseMove(e, activeLightId = null, lightsMap = new Map()) {
  if (!isMouseDown) return;

  accumulatedDeltaX += e.clientX - previousMousePosition.x;
  accumulatedDeltaY += e.clientY - previousMousePosition.y;
  previousMousePosition = { x: e.clientX, y: e.clientY };
  activeLightIdRef = activeLightId;

  if (!isRafPending) {
    isRafPending = true;
    requestAnimationFrame(processMouseMovement);
  }
}

function processMouseMovement() {
  isRafPending = false;
  if (!isMouseDown) {
    accumulatedDeltaX = 0;
    accumulatedDeltaY = 0;
    return;
  }

  const deltaX = accumulatedDeltaX;
  const deltaY = accumulatedDeltaY;
  accumulatedDeltaX = 0;
  accumulatedDeltaY = 0;

  if (activeMouseButton === 0) {
    if (!activeLightIdRef && targetModelGroup) {
      targetModelGroup.rotation.y += deltaX * 0.008;
      targetModelGroup.rotation.x += deltaY * 0.008;

      if (Math.abs(targetModelGroup.rotation.y) <= rotationSnapThresholdY) {
        targetModelGroup.rotation.y = 0;
      }

      const targetXRad = 80 * DEG2RAD;
      if (Math.abs(targetModelGroup.rotation.x - targetXRad) <= rotationSnapThresholdX) {
        targetModelGroup.rotation.x = targetXRad;
      }

      updateCameraPosition();
    }
  } else if (activeMouseButton === 1) {
    const panSpeed = radius * 0.0015;
    camera.matrix.extractBasis(panRight, panUp, panForward);

    panRight.multiplyScalar(-deltaX * panSpeed);
    panUp.multiplyScalar(deltaY * panSpeed);

    cameraTarget.add(panRight).add(panUp);
    syncTargetInputs();
    updateCameraPosition();
  } else if (activeMouseButton === 2) {
    syncFov(camera.fov + deltaY * 0.1);
  }
}

export function handleCameraWheel(e, scheduleSaveCallback) {
  e.preventDefault();
  syncZoom(radius + e.deltaY * 0.0075);
  if (scheduleSaveCallback) scheduleSaveCallback();
}

export function handleCameraResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// -----------------------------------------------------------------------------
// STATE SERIALIZATION & BRIDGE
// -----------------------------------------------------------------------------
export function getCameraState() {
  return {
    fov: camera.fov,
    radius,
    target: [cameraTarget.x, cameraTarget.y, cameraTarget.z],
    rotation: targetModelGroup ? [targetModelGroup.rotation.x, targetModelGroup.rotation.y, targetModelGroup.rotation.z] : [0, 0, 0],
    fpsLimit: getFpsLimitState()
  };
}

export function applyCameraState(state) {
  if (!state) return;
  if (state.target && Array.isArray(state.target)) {
    cameraTarget.set(...state.target);
    syncTargetInputs();
  }
  if (state.fov !== undefined) syncFov(state.fov, false);
  if (state.radius !== undefined) syncZoom(state.radius);
  if (state.rotation && Array.isArray(state.rotation) && targetModelGroup) {
    targetModelGroup.rotation.set(...state.rotation);
  }
  if (state.fpsLimit) {
    fpsLimitEnabled = state.fpsLimit.enabled;
    targetFps = state.fpsLimit.fps;
    if (!domElements.fpsToggle) cacheDomElements();
    if (domElements.fpsToggle) domElements.fpsToggle.checked = fpsLimitEnabled;
    if (domElements.fpsSelect) domElements.fpsSelect.value = targetFps;
  }
  updateCameraPosition();
}

export const cameraApi = {
  resetCamera() {
    radius = 6.5;
    cameraTarget.set(0, 0, 0);
    if (targetModelGroup) targetModelGroup.rotation.set(0.55, 0, 0);
    syncFov(50);
    syncTargetInputs();
    updateCameraPosition();
  },
  updateCameraFromBridge(data) {
    if (data.value !== undefined && typeof data.value === 'number') {
      if (data.control === 'camera-fov') syncFov(data.value);
      if (data.control === 'camera-zoom') syncZoom(data.value);
    }
  }
};