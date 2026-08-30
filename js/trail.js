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

    this.maxHistory = options.maxHistory || 20;
    this.subdivisions = options.subdivisions || 4;
    this.maxLifetime = options.maxLifetime || 0.4; // Time in seconds before trail completely fades out when stopped

    // Total vertex samples generated along the ribbon
    this.sampleCount = (this.maxHistory - 1) * this.subdivisions + 1;

    this.width = options.width || 0.6; // Slightly wider base width for fuller presence
    this.colorStart = new THREE.Color(options.colorStart ?? 0xff0055);
    this.colorEnd = new THREE.Color(options.colorEnd ?? 0x00ffff);

    this.history = []; // Array of { pos: THREE.Vector3, time: number }

    this._tempVecs = {
      currentPos: new THREE.Vector3(),
      dir: new THREE.Vector3(),
      camDir: new THREE.Vector3(),
      side: new THREE.Vector3(),
      camPos: new THREE.Vector3(),
      fallbackDir: new THREE.Vector3(0, 1, 0),
      previousDir: new THREE.Vector3()
    };

    this._initMesh();
  }

  _initMesh() {
    const totalVertices = this.sampleCount * 2;
    this.geometry = new THREE.BufferGeometry();

    this.positions = new Float32Array(totalVertices * 3);
    this.uvs = new Float32Array(totalVertices * 2);
    this.progresses = new Float32Array(totalVertices);
    this.alphas = new Float32Array(totalVertices);

    for (let i = 0; i < this.sampleCount; i++) {
      const u = i / (this.sampleCount - 1);
      const vIdx = i * 2;

      this.uvs[vIdx * 2] = u;
      this.uvs[vIdx * 2 + 1] = 1.0;

      this.uvs[(vIdx + 1) * 2] = u;
      this.uvs[(vIdx + 1) * 2 + 1] = 0.0;

      this.progresses[vIdx] = u;
      this.progresses[vIdx + 1] = u;
    }

    const indices = [];
    for (let i = 0; i < this.sampleCount - 1; i++) {
      const row1 = i * 2;
      const row2 = (i + 1) * 2;
      indices.push(row1, row1 + 1, row2);
      indices.push(row1 + 1, row2 + 1, row2);
    }

    this.geometry.setIndex(indices);

    const posAttr = new THREE.BufferAttribute(this.positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute('position', posAttr);

    const alphaAttr = new THREE.BufferAttribute(this.alphas, 1);
    alphaAttr.setUsage(THREE.DynamicDrawUsage);
    this.geometry.setAttribute('alpha', alphaAttr);

    this.geometry.setAttribute('uv', new THREE.BufferAttribute(this.uvs, 2));
    this.geometry.setAttribute('progress', new THREE.BufferAttribute(this.progresses, 1));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uColorStart: { value: this.colorStart },
        uColorEnd: { value: this.colorEnd },
        uIntensity: { value: 1.5 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;
        attribute float progress;
        attribute float alpha;

        void main() {
          vUv = uv;
          vProgress = progress;
          vAlpha = alpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;
        uniform float uIntensity;
        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        void main() {
          // Smooth edge falloff without dark edges
          float distFromCenter = abs(vUv.y - 0.5) * 2.0;
          float edgeFade = smoothstep(1.0, 0.0, distFromCenter);
          float tailFade = smoothstep(0.0, 0.2, vProgress);

          vec3 baseColor = mix(uColorStart, uColorEnd, vProgress);
          float alphaFactor = edgeFade * tailFade * vAlpha;

          // Glowing color boosted along the core
          vec3 glowingColor = baseColor * (1.0 + (1.0 - distFromCenter) * uIntensity);

          // Standard non-premultiplied output for AdditiveBlending prevents black outline artifacts
          gl_FragColor = vec4(glowingColor, alphaFactor);
        }
      `,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.renderOrder = 999;
    this.scene.add(this.mesh);
  }

  update() {
    if (!this.camera || !this.target) return;

    const currentTime = performance.now() / 1000;
    const {
      currentPos,
      dir,
      camDir,
      side,
      camPos,
      fallbackDir,
      previousDir
    } = this._tempVecs;

    // 1. Record target position ONLY when moving
    this.target.getWorldPosition(currentPos);
    const lastPoint = this.history[this.history.length - 1];

    if (!lastPoint || lastPoint.pos.distanceToSquared(currentPos) > 1e-4) {
      this.history.push({
        pos: currentPos.clone(),
        time: currentTime
      });
    }

    // Keep ring buffer bounded
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }

    if (this.history.length < 2) return;

    // 2. Filter duplicate/ultra-close points to prevent mesh clumping on tight turns
    const uniqueHistory = [this.history[0]];
    for (let i = 1; i < this.history.length; i++) {
      if (this.history[i].pos.distanceToSquared(uniqueHistory[uniqueHistory.length - 1].pos) > 1e-4) {
        uniqueHistory.push(this.history[i]);
      }
    }

    if (uniqueHistory.length < 2) return;

    // 3. Generate Catmull-Rom curve over unique positions
    const curvePositions = uniqueHistory.map(item => item.pos);
    const curve = new THREE.CatmullRomCurve3(curvePositions);
    curve.curveType = 'centripetal';

    const samplePoints = curve.getPoints(this.sampleCount - 1);

    this.camera.getWorldPosition(camPos);
    let hasPreviousDir = false;

    const historyCount = uniqueHistory.length;

    // 4. Update vertex attributes
    for (let i = 0; i < this.sampleCount; i++) {
      const p = samplePoints[i];
      const progress = i / (this.sampleCount - 1); // 0 = tail end, 1 = head (target)

      // Lerp timestamp along history to compute point age
      const rawIndex = progress * (historyCount - 1);
      const index0 = Math.floor(rawIndex);
      const index1 = Math.min(index0 + 1, historyCount - 1);
      const t = rawIndex - index0;

      const sampleTime = THREE.MathUtils.lerp(uniqueHistory[index0].time, uniqueHistory[index1].time, t);
      const age = currentTime - sampleTime;

      // Smooth alpha decay over maxLifetime
      const pointAlpha = THREE.MathUtils.clamp(1.0 - (age / this.maxLifetime), 0.0, 1.0);

      // Width profile: Full width across body, tapering down ONLY at the very leading tip (progress > 0.85)
      let widthFactor = Math.pow(progress, 0.5); // Maintains full body thickness
      if (progress > 0.85) {
        const headProgress = (1.0 - progress) / 0.15; // 1.0 -> 0.0 at leading tip
        widthFactor *= Math.sin(headProgress * Math.PI * 0.5); // Smooth tip roundness
      }

      const currentWidth = this.width * widthFactor;

      // Tangent vector
      if (i < this.sampleCount - 1) {
        dir.subVectors(samplePoints[i + 1], p);
      } else {
        dir.subVectors(p, samplePoints[i - 1]);
      }

      if (dir.lengthSq() < 1e-6) {
        dir.copy(hasPreviousDir ? previousDir : fallbackDir);
      } else {
        dir.normalize();
        previousDir.copy(dir);
        hasPreviousDir = true;
      }

      // Camera facing direction
      camDir.subVectors(camPos, p);
      if (camDir.lengthSq() < 1e-6) {
        camDir.copy(fallbackDir);
      } else {
        camDir.normalize();
      }

      // Billboard side cross product
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

      // Top ribbon position
      this.positions[vIdx * 3]     = p.x + side.x;
      this.positions[vIdx * 3 + 1] = p.y + side.y;
      this.positions[vIdx * 3 + 2] = p.z + side.z;

      // Bottom ribbon position
      this.positions[(vIdx + 1) * 3]     = p.x - side.x;
      this.positions[(vIdx + 1) * 3 + 1] = p.y - side.y;
      this.positions[(vIdx + 1) * 3 + 2] = p.z - side.z;

      // Assign alpha values
      this.alphas[vIdx]     = pointAlpha;
      this.alphas[vIdx + 1] = pointAlpha;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.alpha.needsUpdate = true;
  }

  destroy() {
    if (this.mesh) this.scene.remove(this.mesh);
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
  }
}