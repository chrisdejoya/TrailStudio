import * as THREE from 'three';

export class LightTrail {
  /**
   * @param {THREE.Object3D} target - Object the trail follows
   * @param {THREE.Scene} scene - Three.js scene
   * @param {Object} options - Configuration options
   */
  constructor(target, scene, options = {}) {
    this.target = target;
    this.scene = scene;
    this.camera = options.camera;

    this.length = options.length || 30;
    this.width = options.width || 0.4;
    this.colorStart = new THREE.Color(options.colorStart ?? 0xff0055);
    this.colorEnd = new THREE.Color(options.colorEnd ?? 0x00ffff);

    this.history = [];
    this._initMesh();
  }

  _initMesh() {
    const totalVertices = this.length * 2;
    this.geometry = new THREE.BufferGeometry();

    this.positions = new Float32Array(totalVertices * 3);
    this.uvs = new Float32Array(totalVertices * 2);
    this.progresses = new Float32Array(totalVertices);

    // Populate static UVs and progress attributes
    for (let i = 0; i < this.length; i++) {
      const u = i / (this.length - 1); // 0.0 (tail) to 1.0 (head)
      const vIdx = i * 2;

      // Top vertex UV: (u, 1.0)
      this.uvs[vIdx * 2] = u;
      this.uvs[vIdx * 2 + 1] = 1.0;

      // Bottom vertex UV: (u, 0.0)
      this.uvs[(vIdx + 1) * 2] = u;
      this.uvs[(vIdx + 1) * 2 + 1] = 0.0;

      this.progresses[vIdx] = u;
      this.progresses[vIdx + 1] = u;
    }

    // Index buffer for ribbon quads
    const indices = [];
    for (let i = 0; i < this.length - 1; i++) {
      const row1 = i * 2;
      const row2 = (i + 1) * 2;
      indices.push(row1, row1 + 1, row2);
      indices.push(row1 + 1, row2 + 1, row2);
    }

    this.geometry.setIndex(indices);

    // Setup position buffer for dynamic stream updates
    const posAttribute = new THREE.BufferAttribute(this.positions, 3);
    posAttribute.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute('position', posAttribute);

    this.geometry.setAttribute('uv', new THREE.BufferAttribute(this.uvs, 2));
    this.geometry.setAttribute('progress', new THREE.BufferAttribute(this.progresses, 1));

    // Material with procedural edge-softening shader
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uColorStart: { value: this.colorStart },
        uColorEnd: { value: this.colorEnd }
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vProgress;
        attribute float progress;

        void main() {
          vUv = uv;
          vProgress = progress;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;
        varying vec2 vUv;
        varying float vProgress;

        void main() {
          // 1. PROCEDURAL SOFT EDGES across ribbon width (vUv.y: 0.0 to 1.0)
          // Sine curve yields 1.0 at center (0.5) and 0.0 at borders (0.0 & 1.0)
          float edgeFade = sin(vUv.y * 3.14159265);

          // Sharpen the core slightly for a brighter central beam with soft outer glow
          float softGlow = pow(edgeFade, 1.5);

          // 2. TAIL FADE along ribbon length
          float tailFade = pow(vProgress, 2.0);

          // 3. COLOR INTERPOLATION
          vec3 baseColor = mix(uColorStart, uColorEnd, vProgress);

          // Multiply color by core brightness boost
          vec3 finalColor = baseColor * (softGlow * 1.2);
          float finalAlpha = softGlow * tailFade;

          gl_FragColor = vec4(finalColor, finalAlpha);
        }
      `,
      transparent: true,
      depthTest: false,   // Render over all scene geometry
      depthWrite: false,  // Prevent self-clipping
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.renderOrder = 999;
    this.scene.add(this.mesh);
  }

  update() {
    if (!this.camera) return;

    const currentPos = new THREE.Vector3();
    this.target.getWorldPosition(currentPos);
    this.history.push(currentPos.clone());

    if (this.history.length > this.length) {
      this.history.shift();
    }

    const sampleCount = this.length;
    const samplePoints = [];
    const historyLength = this.history.length;

    for (let i = 0; i < sampleCount; i++) {
      const t = historyLength > 1 ? i / (sampleCount - 1) : 0;
      const historyIndex = t * (historyLength - 1);
      const lowerIndex = Math.floor(historyIndex);
      const upperIndex = Math.min(historyLength - 1, lowerIndex + 1);
      const alpha = historyIndex - lowerIndex;

      const point = this.history[lowerIndex].clone();
      if (lowerIndex !== upperIndex) {
        point.lerp(this.history[upperIndex], alpha);
      }

      samplePoints.push(point);
    }

    const dir = new THREE.Vector3();
    const camDir = new THREE.Vector3();
    const side = new THREE.Vector3();
    const camPos = new THREE.Vector3();
    const fallbackDir = new THREE.Vector3(0, 1, 0);
    const previousDir = new THREE.Vector3();
    let hasPreviousDir = false;

    this.camera.getWorldPosition(camPos);

    for (let i = 0; i < sampleCount; i++) {
      const p = samplePoints[i];
      const progress = sampleCount > 1 ? i / (sampleCount - 1) : 0;

      // Width tapering calculation
      const widthFactor = Math.pow(progress, 2.0);
      const currentWidth = this.width * widthFactor;

      if (i < sampleCount - 1) {
        dir.subVectors(samplePoints[i + 1], p);
      } else {
        dir.subVectors(p, samplePoints[Math.max(0, i - 1)]);
      }

      if (dir.lengthSq() < 1e-6) {
        if (hasPreviousDir) {
          dir.copy(previousDir);
        } else {
          dir.copy(fallbackDir);
        }
      } else {
        dir.normalize();
        previousDir.copy(dir);
        hasPreviousDir = true;
      }

      camDir.subVectors(camPos, p);
      if (camDir.lengthSq() < 1e-6) {
        camDir.copy(fallbackDir);
      } else {
        camDir.normalize();
      }

      side.crossVectors(dir, camDir);
      if (side.lengthSq() < 1e-6) {
        side.crossVectors(fallbackDir, camDir);
      }

      if (side.lengthSq() < 1e-6) {
        side.set(1, 0, 0);
      } else {
        side.normalize();
      }

      side.multiplyScalar(currentWidth * 0.5);

      const vIdx = i * 2;

      // Top vertex position
      this.positions[vIdx * 3]     = p.x + side.x;
      this.positions[vIdx * 3 + 1] = p.y + side.y;
      this.positions[vIdx * 3 + 2] = p.z + side.z;

      // Bottom vertex position
      this.positions[(vIdx + 1) * 3]     = p.x - side.x;
      this.positions[(vIdx + 1) * 3 + 1] = p.y - side.y;
      this.positions[(vIdx + 1) * 3 + 2] = p.z - side.z;

      this.progresses[vIdx] = progress;
      this.progresses[vIdx + 1] = progress;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.progress.needsUpdate = true;
  }

  destroy() {
    this.scene.remove(this.mesh);
    this.geometry.dispose();
    this.material.dispose();
  }
}