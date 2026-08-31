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

const panRight = new THREE.Vector3();
const panUp = new THREE.Vector3();
const panForward = new THREE.Vector3();

// Snap thresholds stored in radians for high-performance drag checks
// Default: Y snaps to 0 within ±1°; X snaps to 80° within ±1°
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
// UTILITY & SYNC FUNCTIONS
// -----------------------------------------------------------------------------
export function syncTargetInputs() {
  const x = document.querySelector('#camTargetX');
  const y = document.querySelector('#camTargetY');
  const z = document.querySelector('#camTargetZ');
  if (x) x.value = cameraTarget.x.toFixed(2);
  if (y) y.value = cameraTarget.y.toFixed(2);
  if (z) z.value = cameraTarget.z.toFixed(2);
}

export function updateCameraPosition(skipRotationUpdate = false) {
  camera.position.set(cameraTarget.x, cameraTarget.y + 1.2, cameraTarget.z + radius);
  camera.lookAt(cameraTarget);

  const camRadius = document.querySelector('#camRadius');
  const camRadiusInput = document.querySelector('#camRadiusInput');
  if (camRadius) camRadius.value = radius;
  if (camRadiusInput) camRadiusInput.value = radius.toFixed(1);

  if (!skipRotationUpdate && targetModelGroup) {
    isUpdatingRotUI = true;
    const rotX = document.querySelector('#camRotX');
    const rotY = document.querySelector('#camRotY');
    const rotZ = document.querySelector('#camRotZ');
    if (rotX) rotX.value = (targetModelGroup.rotation.x / DEG2RAD).toFixed(1);
    if (rotY) rotY.value = (targetModelGroup.rotation.y / DEG2RAD).toFixed(1);
    if (rotZ) rotZ.value = (targetModelGroup.rotation.z / DEG2RAD).toFixed(1);
    isUpdatingRotUI = false;
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
    const camRadius = document.querySelector('#camRadius');
    const camRadiusInput = document.querySelector('#camRadiusInput');
    if (camRadius) camRadius.value = radius;
    if (camRadiusInput) camRadiusInput.value = radius.toFixed(1);
  }

  camera.fov = fovVal;
  camera.updateProjectionMatrix();
  const camFov = document.querySelector('#camFov');
  const camFovInput = document.querySelector('#camFovInput');
  if (camFov) camFov.value = fovVal;
  if (camFovInput) camFovInput.value = fovVal;

  updateCameraPosition(true);
};

export const syncZoom = (val) => {
  radius = Math.max(0.5, Math.min(50, parseFloat(val) || 6.5));
  updateCameraPosition();
};

export const updateRotFromInputs = () => {
  if (isUpdatingRotUI || !targetModelGroup) return;
  const rotX = (parseFloat(document.querySelector('#camRotX')?.value) || 0) * DEG2RAD;
  const rotY = (parseFloat(document.querySelector('#camRotY')?.value) || 0) * DEG2RAD;
  const rotZ = (parseFloat(document.querySelector('#camRotZ')?.value) || 0) * DEG2RAD;

  targetModelGroup.rotation.set(rotX, rotY, rotZ);
};

export const updateCamTarget = () => {
  cameraTarget.x = parseFloat(document.querySelector('#camTargetX')?.value) || 0;
  cameraTarget.y = parseFloat(document.querySelector('#camTargetY')?.value) || 0;
  cameraTarget.z = parseFloat(document.querySelector('#camTargetZ')?.value) || 0;
  updateCameraPosition();
};

// -----------------------------------------------------------------------------
// UI BINDINGS & INPUT LISTENERS
// -----------------------------------------------------------------------------
export function setupCameraInputs(onSaveCallback) {
  const camFov = document.querySelector('#camFov');
  const camFovInput = document.querySelector('#camFovInput');
  if (camFov) camFov.addEventListener('input', (e) => syncFov(e.target.value));
  if (camFovInput) camFovInput.addEventListener('input', (e) => syncFov(e.target.value));

  const camRadius = document.querySelector('#camRadius');
  const camRadiusInput = document.querySelector('#camRadiusInput');
  if (camRadius) camRadius.addEventListener('input', (e) => syncZoom(e.target.value));
  if (camRadiusInput) camRadiusInput.addEventListener('input', (e) => syncZoom(e.target.value));

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
// EVENT HANDLERS (Rotating the Object instead of the Camera)
// -----------------------------------------------------------------------------
export function handleCameraMouseDown(e) {
  isMouseDown = true;
  activeMouseButton = e.button;
  previousMousePosition = { x: e.clientX, y: e.clientY };
}

export function handleCameraMouseMove(e, activeLightId = null, lightsMap = new Map()) {
  if (!isMouseDown) return;
  const deltaX = e.clientX - previousMousePosition.x;
  const deltaY = e.clientY - previousMousePosition.y;

  if (activeMouseButton === 0) {
    if (!activeLightId && targetModelGroup) {
      targetModelGroup.rotation.y += deltaX * 0.008;
      targetModelGroup.rotation.x += deltaY * 0.008;

      // Direct radian-based snapping to eliminate per-frame math conversions
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
  previousMousePosition = { x: e.clientX, y: e.clientY };
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
    rotation: targetModelGroup ? [targetModelGroup.rotation.x, targetModelGroup.rotation.y, targetModelGroup.rotation.z] : [0, 0, 0]
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