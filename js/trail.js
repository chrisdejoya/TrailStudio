import * as THREE from 'three';

// Configurable defaults consolidated in one place
const DEFAULT_CONFIG = {
  // Trail Lifetime & History
  maxHistory: 30,
  maxHistoryLimit: 64,
  subdivisions: 4,
  maxLifetime: 0.3,

  // Geometry & Sizing
  width: 0.01,
  widthPower: 0.5,            // Curve power for tapering width along length
  headTaperStart: 0.9,        // Progress point where head starts tapering inward

  // Opacity & Fade Regions
  opaqueHeadRegion: 0.10,      // Portion of head kept fully opaque (0.10 = top 10%)
  tailFadeLength: 0.05,        // Length of tail-end alpha fadeout
  edgeSoftness: 0.2,          // Softness of mesh edges across width (0.0 to 0.5)

  // Colors & Bloom
  colorStart: 0xff0055,
  colorEnd: 0x00ffff,
  emissiveIntensity: 1.25,     // Values > 1.0 push color into HDR space to trigger bloom

  // Performance Optimization
  minDistanceSq: 1e-3,         // Minimum squared distance before registering new point
  renderOrder: 9999,
};

export class LightTrail {
  /**
   * @param {THREE.Object3D} target - Object the trail follows
   * @param {THREE.Scene} scene - Three.js scene
   * @param {Object} options - Configuration options
   */
  constructor(target, scene, options = {}) {
    this.target = target;
    this.scene = scene;

    // Merge user options with default config
    this.config = { ...DEFAULT_CONFIG, ...options };

    this.maxHistory = Math.min(this.config.maxHistory, this.config.maxHistoryLimit);
    this.subdivisions = this.config.subdivisions;
    this.maxLifetime = this.config.maxLifetime;
    this.width = this.config.width;

    this.colorStart = new THREE.Color(this.config.colorStart);
    this.colorEnd = new THREE.Color(this.config.colorEnd);

    this.historyPositions = new Array(this.maxHistory).fill(null).map(() => new THREE.Vector3());
    this.historyTimes = new Float32Array(this.maxHistory);

    this.rawHistory = [];
    this._lastWorldPos = new THREE.Vector3();

    this._initMesh();
  }

  _initMesh() {
    const totalSamples = (this.maxHistory - 1) * this.subdivisions + 1;
    const totalVertices = totalSamples * 2;

    this.geometry = new THREE.BufferGeometry();

    const uvs = new Float32Array(totalVertices * 2);
    const progressAttr = new Float32Array(totalVertices);
    const sideAttr = new Float32Array(totalVertices);

    for (let i = 0; i < totalSamples; i++) {
      const u = i / (totalSamples - 1);
      const vIdx = i * 2;

      uvs[vIdx * 2] = u;
      uvs[vIdx * 2 + 1] = 1.0;
      sideAttr[vIdx] = 1.0;
      progressAttr[vIdx] = u;

      uvs[(vIdx + 1) * 2] = u;
      uvs[(vIdx + 1) * 2 + 1] = 0.0;
      sideAttr[vIdx + 1] = -1.0;
      progressAttr[vIdx + 1] = u;
    }

    const indices = [];
    for (let i = 0; i < totalSamples - 1; i++) {
      const row1 = i * 2;
      const row2 = (i + 1) * 2;
      indices.push(row1, row1 + 1, row2);
      indices.push(row1 + 1, row2 + 1, row2);
    }

    this.geometry.setIndex(indices);
    this.geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    this.geometry.setAttribute('sideSign', new THREE.BufferAttribute(sideAttr, 1));
    this.geometry.setAttribute('progress', new THREE.BufferAttribute(progressAttr, 1));

    this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(totalVertices * 3), 3)
    );

    const headOpaqueStart = 1.0 - this.config.opaqueHeadRegion;
    const edgeSoftStart = 1.0 - this.config.edgeSoftness;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uHistoryPositions: { value: this.historyPositions },
        uHistoryTimes: { value: this.historyTimes },
        uHistoryCount: { value: 0 },
        uCurrentTime: { value: 0 },
        uMaxLifetime: { value: this.maxLifetime },
        uWidth: { value: this.width },
        uColorStart: { value: this.colorStart },
        uColorEnd: { value: this.colorEnd },
        uEmissiveIntensity: { value: this.config.emissiveIntensity },
        
        // Dynamic Config Uniforms
        uWidthPower: { value: this.config.widthPower },
        uHeadTaperStart: { value: this.config.headTaperStart },
        uHeadOpaqueStart: { value: headOpaqueStart },
        uTailFadeLength: { value: this.config.tailFadeLength },
        uEdgeSoftStart: { value: edgeSoftStart }
      },
      vertexShader: `
        uniform vec3 uHistoryPositions[${this.maxHistory}];
        uniform float uHistoryTimes[${this.maxHistory}];
        uniform int uHistoryCount;
        uniform float uCurrentTime;
        uniform float uMaxLifetime;
        uniform float uWidth;

        uniform float uWidthPower;
        uniform float uHeadTaperStart;
        uniform float uHeadOpaqueStart;

        attribute float sideSign;
        attribute float progress;

        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        // Evaluates position AND exact analytical tangent in a single pass
        void getSamplePointAndTangent(float tProgress, out vec3 outPos, out vec3 outTangent, out float outTime) {
          if (uHistoryCount < 2) {
            outTime = uCurrentTime;
            outPos = uHistoryPositions[0];
            outTangent = vec3(0.0, 1.0, 0.0);
            return;
          }

          float maxIdx = float(uHistoryCount - 1);
          float rawIdx = tProgress * maxIdx;
          int idx1 = int(floor(rawIdx));
          int idx2 = min(idx1 + 1, uHistoryCount - 1);
          int idx0 = max(idx1 - 1, 0);
          int idx3 = min(idx2 + 1, uHistoryCount - 1);

          float t = fract(rawIdx);

          vec3 p0 = uHistoryPositions[idx0];
          vec3 p1 = uHistoryPositions[idx1];
          vec3 p2 = uHistoryPositions[idx2];
          vec3 p3 = uHistoryPositions[idx3];

          outTime = mix(uHistoryTimes[idx1], uHistoryTimes[idx2], t);

          // Coefficients for Catmull-Rom
          vec3 a = 0.5 * (-p0 + 3.0 * p1 - 3.0 * p2 + p3);
          vec3 b = 0.5 * (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3);
          vec3 c = 0.5 * (-p0 + p2);
          vec3 d = p1;

          // Position via Horner's scheme
          outPos = ((a * t + b) * t + c) * t + d;

          // Analytical derivative (d/dt) for tangent
          outTangent = (3.0 * a * t + 2.0 * b) * t + c;
        }

        void main() {
          vUv = uv;
          vProgress = progress;

          if (uHistoryCount < 2) {
            vAlpha = 0.0;
            gl_Position = vec4(0.0);
            return;
          }

          float sampleTime;
          vec3 currentPos;
          vec3 tangent;
          getSamplePointAndTangent(progress, currentPos, tangent, sampleTime);

          tangent = length(tangent) < 0.0001 ? vec3(0.0, 1.0, 0.0) : normalize(tangent);

          vec3 camDir = normalize(cameraPosition - currentPos);
          vec3 side = cross(tangent, camDir);
          side = length(side) < 0.0001 ? vec3(1.0, 0.0, 0.0) : normalize(side);

          float widthFactor = pow(progress, uWidthPower);
          if (progress > uHeadTaperStart) {
            float headProgress = (1.0 - progress) / (1.0 - uHeadTaperStart);
            widthFactor *= sin(headProgress * 1.5707963);
          }

          vec3 finalPos = currentPos + side * (sideSign * uWidth * 0.5 * widthFactor);

          float age = uCurrentTime - sampleTime;
          float ageAlpha = clamp(1.0 - (age / uMaxLifetime), 0.0, 1.0);

          float headOpaqueRegion = smoothstep(uHeadOpaqueStart, 1.0, progress);
          vAlpha = mix(ageAlpha, 1.0, headOpaqueRegion);

          gl_Position = projectionMatrix * viewMatrix * vec4(finalPos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;
        uniform float uEmissiveIntensity;
        uniform float uTailFadeLength;
        uniform float uEdgeSoftStart;

        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        void main() {
          float distFromCenter = abs(vUv.y - 0.5) * 2.0;

          float edgeAlpha = smoothstep(1.0, uEdgeSoftStart, distFromCenter);
          float tailFade = smoothstep(0.0, uTailFadeLength, vProgress);

          float finalAlpha = edgeAlpha * tailFade * vAlpha;

          if (finalAlpha < 0.01) discard;

          // Multiply color by emissive intensity to push into HDR bloom threshold range
          vec3 baseColor = mix(uColorStart, uColorEnd, vProgress) * uEmissiveIntensity;

          gl_FragColor = vec4(baseColor * finalAlpha, finalAlpha);
        }
      `,
      transparent: true,
      depthTest: false,
      depthWrite: false,

      premultipliedAlpha: true,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.OneFactor,
      blendDstAlpha: THREE.OneMinusSrcAlphaFactor,

      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = this.config.renderOrder;
    this.scene.add(this.mesh);
  }

  update() {
    if (!this.target) return;

    const currentTime = performance.now() / 1000;
    this.target.getWorldPosition(this._lastWorldPos);

    const lastItem = this.rawHistory[this.rawHistory.length - 1];
    if (!lastItem || lastItem.pos.distanceToSquared(this._lastWorldPos) > this.config.minDistanceSq) {
      this.rawHistory.push({
        pos: this._lastWorldPos.clone(),
        time: currentTime
      });
    }

    while (
      this.rawHistory.length > 0 &&
      currentTime - this.rawHistory[0].time > this.maxLifetime
    ) {
      this.rawHistory.shift();
    }

    if (this.rawHistory.length > this.maxHistory) {
      this.rawHistory.shift();
    }

    const count = this.rawHistory.length;
    for (let i = 0; i < count; i++) {
      this.historyPositions[i].copy(this.rawHistory[i].pos);
      this.historyTimes[i] = this.rawHistory[i].time;
    }

    this.material.uniforms.uHistoryCount.value = count;
    this.material.uniforms.uCurrentTime.value = currentTime;
  }

  destroy() {
    if (this.mesh) this.scene.remove(this.mesh);
    if (this.geometry) this.geometry.dispose();
    if (this.material) this.material.dispose();
  }
}

export class TrailManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.trail = null;
    this.anchor = null;
    this.target = null;
    this.offsetY = 1.8;
  }

  getOffsetY() {
    return this.offsetY;
  }

  setOffsetY(val) {
    this.offsetY = val;
    if (this.anchor) {
      this.anchor.position.y = this.offsetY;
    }
    if (this.trail && this.trail.mesh) {
      this.trail.mesh.visible = !!this.target;
    }
  }

  syncTarget(target) {
    this.target = target || null;

    if (!this.target) {
      this.destroy();
      return;
    }

    if (!this.anchor) {
      this.anchor = new THREE.Object3D();
      this.anchor.position.set(0, this.offsetY, 0);
      this.trail = new LightTrail(this.anchor, this.scene, {
        camera: this.camera,
        length: 10,
        width: 0.05,
        colorStart: 0xaa0022,
        colorEnd: 0x00aaaa
      });
    }

    if (this.anchor.parent !== this.target) {
      if (this.anchor.parent) this.anchor.parent.remove(this.anchor);
      this.target.add(this.anchor);
    }

    this.anchor.position.set(0, this.offsetY, 0);
    this.trail.mesh.visible = true;
  }

  update() {
    if (this.trail) this.trail.update();
  }

  destroy() {
    if (!this.trail) return;
    this.trail.destroy();
    this.trail = null;
    this.anchor = null;
  }
}