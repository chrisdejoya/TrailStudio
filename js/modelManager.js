import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const MESH_MAPPINGS = {
  Btn_South: 0, Btn_A: 0, Btn_East: 1, Btn_B: 1,
  Btn_West: 2, Btn_X: 2, Btn_North: 3, Btn_Y: 3,
  Bumper_Left: 4, Bumper_Right: 5, Trigger_Left: 6, Trigger_Right: 7,
  Btn_Select: 8, Btn_Start: 9, Btn_L3: 10, Btn_R3: 11,
  DPad_Up: 12, DPad_Down: 13, DPad_Left: 14, DPad_Right: 15, Btn_Home: 16
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