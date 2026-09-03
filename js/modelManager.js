import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const MESH_MAPPINGS = {
  Btn_South: 0, Btn_A: 0, Btn_East: 1, Btn_B: 1,
  Btn_West: 2, Btn_X: 2, Btn_North: 3, Btn_Y: 3,
  Bumper_Left: 4, Bumper_Right: 5, Trigger_Left: 6, Trigger_Right: 7,
  Btn_Select: 8, Btn_Start: 9, Btn_L3: 10, Btn_R3: 11,
  DPad_Up: 12, DPad_Down: 13, DPad_Left: 14, DPad_Right: 15, Btn_Home: 16,
  Washer_Left: 17, Washer_Right: 18
};

const baseBtnMat = new THREE.MeshPhysicalMaterial({ color: 0x333333, roughness: 0.35, metalness: 0 });

export class ModelManager {
  constructor(controllerGroup, trailManager, onModelLoaded) {
    this.controllerGroup = controllerGroup;
    this.trailManager = trailManager;
    this.onModelLoaded = onModelLoaded;

    this.currentModel = null;
    this.buttons3D = [];
    this.basePositions = [];
    this.leftStick3DGroup = null;
    this.rightStick3DGroup = null;
    this.dpadRockerPivot = null;
    this.motionBaseQuaternions = new WeakMap();
    this.boneHelpers = [];
    this.showBones = false;
    this.syncLeftStickDpad = false;
  }

  setSyncLeftStickDpad(enabled) {
    this.syncLeftStickDpad = enabled;
  }

  setBoneVisibility(visible) {
    this.showBones = visible;
    this.boneHelpers.forEach((helper) => { helper.visible = visible; });
  }

  registerMotionNode(node) {
    this.motionBaseQuaternions.set(node, node.quaternion.clone());
  }

  cloneNodeMaterials(node) {
    if (!node?.material) return [];
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    const clonedMaterials = materials.map((mat) => mat.clone());
    node.material = Array.isArray(node.material) ? clonedMaterials : clonedMaterials[0];
    return clonedMaterials;
  }

  findBoneEmissiveTargets(root, bone) {
    const targets = [];
    root.traverse((node) => {
      if (node.isSkinnedMesh && node.skeleton?.bones.includes(bone)) {
        targets.push(node);
      }
    });
    return targets;
  }

  register3DButton(index, node, isStick = false, emissiveTargets = null) {
    const targets = emissiveTargets || (node.isMesh ? [node] : []);
    const materials = targets.flatMap((target) => this.cloneNodeMaterials(target));

    this.buttons3D[index] = { node, isStick, emissiveMaterials: materials };
    this.basePositions[index] = node.position.clone();
  }

  updateButtonStates(pad, buttonEmissionColor, buttonEmissionMultiplier = 1.0) {
    if (!pad) return;

    const ax = pad.axes;
    const lx = ax[0] || 0;
    const ly = ax[1] || 0;
    const stickThreshold = 0.3;

    pad.buttons.forEach((button, i) => {
      const entry = this.buttons3D[i];
      if (!entry) return;

      const { node, isStick, emissiveMaterials } = entry;
      const basePos = this.basePositions[i];

      // For DPad buttons (12-15), also check left stick direction when sync is enabled
      let val = button.value;
      let isPressed = button.pressed || val > 0.1;

      if (this.syncLeftStickDpad && i >= 12 && i <= 15) {
        // DPad_Up: 12, DPad_Down: 13, DPad_Left: 14, DPad_Right: 15
        let stickPressed = false;
        if (i === 12 && ly < -stickThreshold) stickPressed = true;      // Up
        if (i === 13 && ly > stickThreshold) stickPressed = true;       // Down
        if (i === 14 && lx < -stickThreshold) stickPressed = true;      // Left
        if (i === 15 && lx > stickThreshold) stickPressed = true;       // Right

        if (stickPressed) {
          isPressed = true;
          val = Math.max(val, Math.abs(i <= 13 ? ly : lx));
        }
      }

      const maxTravel = isStick ? 0.04 : 0.03;
      const pressDepth = isStick ? (isPressed ? maxTravel : 0) : val * maxTravel;
      if (basePos) node.position.y = basePos.y - pressDepth;

      emissiveMaterials.forEach((material) => {
        if (!material.emissive) return;
        if (isPressed) {
          material.emissive.copy(buttonEmissionColor);
          material.emissiveIntensity = 0.5 * val * buttonEmissionMultiplier;
        } else {
          material.emissive.setHex(0x000000);
          material.emissiveIntensity = 0;
        }
      });
    });
  }

  updateMotionTransforms(pad) {
    const ax = pad.axes;
    const lx = ax[0] || 0;
    const ly = ax[1] || 0;
    const rx = ax[2] || 0;
    const ry = ax[3] || 0;

    const maxTilt = 0.35;
    const leftStickRotation = new THREE.Euler(ly * maxTilt, 0, -lx * maxTilt);
    const rightStickRotation = new THREE.Euler(ry * maxTilt, 0, -rx * maxTilt);

    if (this.leftStick3DGroup) {
      this.leftStick3DGroup.quaternion.copy(this.motionBaseQuaternions.get(this.leftStick3DGroup)).multiply(new THREE.Quaternion().setFromEuler(leftStickRotation));
    }
    if (this.rightStick3DGroup) {
      this.rightStick3DGroup.quaternion.copy(this.motionBaseQuaternions.get(this.rightStick3DGroup)).multiply(new THREE.Quaternion().setFromEuler(rightStickRotation));
    }

    if (this.dpadRockerPivot) {
      const dpadUp = pad.buttons[12]?.value || 0;
      const dpadDown = pad.buttons[13]?.value || 0;
      const dpadLeft = pad.buttons[14]?.value || 0;
      const dpadRight = pad.buttons[15]?.value || 0;

      const rockerTiltMax = 0.22;
      const dpadRotation = new THREE.Euler(
        (dpadDown - dpadUp) * rockerTiltMax,
        0,
        (dpadLeft - dpadRight) * rockerTiltMax
      );
      this.dpadRockerPivot.quaternion.copy(this.motionBaseQuaternions.get(this.dpadRockerPivot)).multiply(new THREE.Quaternion().setFromEuler(dpadRotation));
    }

    // Sync left stick and dpad: both respond to both input sources
    if (this.syncLeftStickDpad) {
      // Combine left stick axes with dpad buttons for left stick
      if (this.leftStick3DGroup) {
        const dpadUp = pad.buttons[12]?.value || 0;
        const dpadDown = pad.buttons[13]?.value || 0;
        const dpadLeft = pad.buttons[14]?.value || 0;
        const dpadRight = pad.buttons[15]?.value || 0;

        const combinedLx = lx + (dpadRight - dpadLeft);
        const combinedLy = ly + (dpadDown - dpadUp);

        const combinedLeftStickRotation = new THREE.Euler(
          Math.max(-1, Math.min(1, combinedLy)) * maxTilt,
          0,
          Math.max(-1, Math.min(1, -combinedLx)) * maxTilt
        );
        this.leftStick3DGroup.quaternion.copy(this.motionBaseQuaternions.get(this.leftStick3DGroup)).multiply(new THREE.Quaternion().setFromEuler(combinedLeftStickRotation));
      }

      // Combine dpad buttons with left stick axes for dpad rocker
      if (this.dpadRockerPivot) {
        const combinedDpadX = (pad.buttons[14]?.value || 0) - (pad.buttons[15]?.value || 0) - lx;
        const combinedDpadY = (pad.buttons[13]?.value || 0) - (pad.buttons[12]?.value || 0) + ly;

        const rockerTiltMax = 0.22;
        const combinedDpadRotation = new THREE.Euler(
          Math.max(-1, Math.min(1, combinedDpadY)) * rockerTiltMax,
          0,
          Math.max(-1, Math.min(1, combinedDpadX)) * rockerTiltMax
        );
        this.dpadRockerPivot.quaternion.copy(this.motionBaseQuaternions.get(this.dpadRockerPivot)).multiply(new THREE.Quaternion().setFromEuler(combinedDpadRotation));
      }
    }
  }

  applyGamepadInput(pad, buttonEmissionColor, buttonEmissionMultiplier = 1.0) {
    if (!pad) return;
    this.updateButtonStates(pad, buttonEmissionColor, buttonEmissionMultiplier);
    this.updateMotionTransforms(pad);
  }

  clearController3D() {
    this.trailManager.destroy();
    this.boneHelpers.forEach((helper) => {
      this.controllerGroup.remove(helper);
      helper.geometry.dispose();
      helper.material.dispose();
    });
    this.boneHelpers = [];
    if (this.currentModel) this.controllerGroup.remove(this.currentModel);
    this.buttons3D = [];
    this.basePositions = [];
    this.leftStick3DGroup = null;
    this.rightStick3DGroup = null;
    this.dpadRockerPivot = null;
  }

  addBoneHelper(skinnedMesh) {
    if (!skinnedMesh.skeleton || this.boneHelpers.some((h) => h.userData.skeleton === skinnedMesh.skeleton)) return;
    const helper = new THREE.SkeletonHelper(skinnedMesh);
    helper.userData.skeleton = skinnedMesh.skeleton;
    helper.material.color.set(0xffd166);
    helper.material.depthTest = false;
    helper.material.depthWrite = false;
    helper.visible = this.showBones;
    this.boneHelpers.push(helper);
    this.controllerGroup.add(helper);
  }

  buildProceduralController() {
    this.clearController3D();
    const proceduralGroup = new THREE.Group();
    const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0x1b202a, roughness: 0.35, metalness: 0.4 });
    const rockerMat = new THREE.MeshPhysicalMaterial({ color: 0x222a36, roughness: 0.2, metalness: 0.6 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.6, 2.2), bodyMat);
    body.castShadow = true; body.receiveShadow = true;
    proceduralGroup.add(body);

    const leftHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 1.8), bodyMat);
    leftHandle.position.set(-1.7, -0.4, 0.6); leftHandle.rotation.z = 0.4; leftHandle.rotation.x = 0.2;
    leftHandle.castShadow = true; leftHandle.receiveShadow = true;
    proceduralGroup.add(leftHandle);

    const rightHandle = leftHandle.clone();
    rightHandle.position.set(1.7, -0.4, 0.6); rightHandle.rotation.z = -0.4;
    proceduralGroup.add(rightHandle);

    const makeMesh = (geo, pos, mat = baseBtnMat) => {
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.position.copy(pos); mesh.castShadow = true; mesh.receiveShadow = true;
      proceduralGroup.add(mesh);
      return mesh;
    };

    const faceCenter = new THREE.Vector3(1.1, 0.35, 0.2);
    this.register3DButton(0, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x, faceCenter.y, faceCenter.z + 0.28)));
    this.register3DButton(1, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x + 0.28, faceCenter.y, faceCenter.z)));
    this.register3DButton(2, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x - 0.28, faceCenter.y, faceCenter.z)));
    this.register3DButton(3, makeMesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 24), new THREE.Vector3(faceCenter.x, faceCenter.y, faceCenter.z - 0.28)));
    this.register3DButton(4, makeMesh(new THREE.BoxGeometry(0.7, 0.18, 0.35), new THREE.Vector3(-1.1, 0.3, -0.95)));
    this.register3DButton(5, makeMesh(new THREE.BoxGeometry(0.7, 0.18, 0.35), new THREE.Vector3(1.1, 0.3, -0.95)));
    this.register3DButton(6, makeMesh(new THREE.BoxGeometry(0.65, 0.3, 0.45), new THREE.Vector3(-1.1, 0.1, -1.3)));
    this.register3DButton(7, makeMesh(new THREE.BoxGeometry(0.65, 0.3, 0.45), new THREE.Vector3(1.1, 0.1, -1.3)));
    this.register3DButton(8, makeMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 16), new THREE.Vector3(-0.45, 0.33, -0.2)));
    this.register3DButton(9, makeMesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 16), new THREE.Vector3(0.45, 0.33, -0.2)));
    this.register3DButton(16, makeMesh(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 24), new THREE.Vector3(0, 0.33, -0.2)));

    const createStick = (x, z) => {
      const group = new THREE.Group();
      group.position.set(x, 0.25, z);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35, 16), new THREE.MeshPhysicalMaterial({ color: 0x505b6d, roughness: 0.5 }));
      stem.position.y = 0.15; stem.castShadow = true; group.add(stem);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.32, 0.1, 32), new THREE.MeshPhysicalMaterial({ color: 0x62d8ff, roughness: 0.3, metalness: 0.6 }));
      cap.position.y = 0.32; cap.castShadow = true; group.add(cap);
      proceduralGroup.add(group);
      return { group, cap };
    };

    const lStick = createStick(-0.5, 0.45); 
    const rStick = createStick(0.5, 0.45);
    this.leftStick3DGroup = lStick.group; 
    this.rightStick3DGroup = rStick.group;
    this.registerMotionNode(this.leftStick3DGroup); 
    this.registerMotionNode(this.rightStick3DGroup);
    this.register3DButton(10, lStick.cap, true);
    this.register3DButton(11, rStick.cap, true);
    this.trailManager.syncTarget(this.leftStick3DGroup);

    const dpadBasePos = new THREE.Vector3(-1.1, 0.32, 0.2);
    this.dpadRockerPivot = new THREE.Group(); 
    this.dpadRockerPivot.position.copy(dpadBasePos); 
    this.dpadRockerPivot.position.y += 0.08;
    this.registerMotionNode(this.dpadRockerPivot);
    proceduralGroup.add(this.dpadRockerPivot);

    const dpadCrossV = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.62), rockerMat);
    const dpadCrossH = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.06, 0.22), rockerMat);
    dpadCrossV.castShadow = true; dpadCrossH.castShadow = true;
    this.dpadRockerPivot.add(dpadCrossV); this.dpadRockerPivot.add(dpadCrossH);

    const btnDist = 0.22;
    this.register3DButton(12, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x, dpadBasePos.y, dpadBasePos.z - btnDist)));
    this.register3DButton(13, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x, dpadBasePos.y, dpadBasePos.z + btnDist)));
    this.register3DButton(14, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x - btnDist, dpadBasePos.y, dpadBasePos.z)));
    this.register3DButton(15, makeMesh(new THREE.BoxGeometry(0.18, 0.08, 0.18), new THREE.Vector3(dpadBasePos.x + btnDist, dpadBasePos.y, dpadBasePos.z)));

    this.currentModel = proceduralGroup;
    this.controllerGroup.add(this.currentModel);
    if (this.onModelLoaded) this.onModelLoaded();
  }

  processModelNode(node, visited = new Set()) {
    if (visited.has(node)) return;
    visited.add(node);

    if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; }
    if (node.isSkinnedMesh) this.addBoneHelper(node);
    
    if (node.isMesh || node.isBone || node.isGroup) {
      const buttonIndex = MESH_MAPPINGS[node.name];
      if (buttonIndex !== undefined) {
        const isStick = (buttonIndex === 10 || buttonIndex === 11);
        const emissiveTargets = node.isBone ? this.findBoneEmissiveTargets(this.currentModel, node) : [node];
        this.register3DButton(buttonIndex, node, isStick, emissiveTargets);
      }

      if (node.name === 'Stick_Left') {
        this.leftStick3DGroup = node;
        this.registerMotionNode(node);
      }
      if (node.name === 'Stick_Right') {
        this.rightStick3DGroup = node;
        this.registerMotionNode(node);
      }
      if (node.name === 'DPad_Rocker') {
        this.dpadRockerPivot = node;
        this.registerMotionNode(node);
      }
    }

    node.children.forEach((child) => this.processModelNode(child, visited));
    if (node.isSkinnedMesh && node.skeleton) {
      node.skeleton.bones.forEach((bone) => this.processModelNode(bone, visited));
    }
  }

  parseAndLoadGLTF(buffer) {
    const loader = new GLTFLoader();
    loader.parse(buffer, '', (gltf) => {
      this.clearController3D();
      this.currentModel = gltf.scene;
      this.controllerGroup.add(this.currentModel);
      this.processModelNode(this.currentModel);
      this.trailManager.syncTarget(this.leftStick3DGroup);
      if (this.onModelLoaded) this.onModelLoaded();
    }, (err) => {
      console.error('Error parsing GLB:', err);
    });
  }
}