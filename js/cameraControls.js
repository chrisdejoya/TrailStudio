import * as THREE from 'three';

// -----------------------------------------------------------------------------
// CAMERA SETUP & STATE
// -----------------------------------------------------------------------------
export const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
export const cameraTarget = new THREE.Vector3(0, 0, 0);

let radius = 6.5;
let theta = 0;
let phi = 0.85;
let isUpdatingRotUI = false;

let isMouseDown = false;
let activeMouseButton = -1;
let previousMousePosition = { x: 0, y: 0 };

const panRight = new THREE.Vector3();
const panUp = new THREE.Vector3();
const panForward = new THREE.Vector3();

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

export function syncAnglesFromCameraPosition() {
  const offset = new THREE.Vector3().subVectors(camera.position, cameraTarget);
  radius = offset.length();
  if (radius > 0) {
    phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));
    theta = Math.atan2(offset.x, offset.z);
  }
}

export function updateCameraPosition(skipRotationUpdate = false) {
  phi = Math.max(0.01, Math.min(Math.PI - 0.01, phi));
  camera.position.x = cameraTarget.x + radius * Math.sin(phi) * Math.sin(theta);
  camera.position.y = cameraTarget.y + radius * Math.cos(phi);
  camera.position.z = cameraTarget.z + radius * Math.sin(phi) * Math.cos(theta);
  camera.lookAt(cameraTarget);

  const camRadius = document.querySelector('#camRadius');
  const camRadiusInput = document.querySelector('#camRadiusInput');
  if (camRadius) camRadius.value = radius;
  if (camRadiusInput) camRadiusInput.value = radius.toFixed(1);

  if (!skipRotationUpdate) {
    isUpdatingRotUI = true;
    const rotX = document.querySelector('#camRotX');
    const rotY = document.querySelector('#camRotY');
    const rotZ = document.querySelector('#camRotZ');
    if (rotX) rotX.value = (camera.rotation.x * (180 / Math.PI)).toFixed(1);
    if (rotY) rotY.value = (camera.rotation.y * (180 / Math.PI)).toFixed(1);
    if (rotZ) rotZ.value = (camera.rotation.z * (180 / Math.PI)).toFixed(1);
    isUpdatingRotUI = false;
  }
}

export const syncFov = (val, compensate = true) => {
  const oldFov = camera.fov;
  const fovVal = Math.max(1, Math.min(170, parseFloat(val) || 50));

  if (compensate && oldFov !== fovVal) {
    const toRad = Math.PI / 180;
    const oldHalfFovRad = (oldFov * 0.5) * toRad;
    const newHalfFovRad = (fovVal * 0.5) * toRad;
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
  if (isUpdatingRotUI) return;
  const rotX = (parseFloat(document.querySelector('#camRotX')?.value) || 0) * (Math.PI / 180);
  const rotY = (parseFloat(document.querySelector('#camRotY')?.value) || 0) * (Math.PI / 180);
  const rotZ = (parseFloat(document.querySelector('#camRotZ')?.value) || 0) * (Math.PI / 180);

  const offset = new THREE.Vector3(0, 0, radius);
  const euler = new THREE.Euler(rotX, rotY, rotZ, 'YXZ');
  offset.applyEuler(euler);

  camera.position.copy(cameraTarget).add(offset);
  camera.lookAt(cameraTarget);
  syncAnglesFromCameraPosition();
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
      radius = 6.5; theta = 0; phi = 0.85;
      cameraTarget.set(0, 0, 0);
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
// EVENT HANDLERS
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
    if (!activeLightId) {
      theta -= deltaX * 0.008;
      phi -= deltaY * 0.008;
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
    rotation: [camera.rotation.x, camera.rotation.y, camera.rotation.z]
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
  updateCameraPosition();
}

export const cameraApi = {
  resetCamera() {
    radius = 6.5; theta = 0; phi = 0.85;
    cameraTarget.set(0, 0, 0);
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