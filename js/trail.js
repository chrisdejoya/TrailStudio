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

    this.maxHistory = Math.min(options.maxHistory || 20, 64);
    this.subdivisions = options.subdivisions || 4;
    this.maxLifetime = options.maxLifetime || 0.4;

    this.width = options.width || 0.6;
    this.colorStart = new THREE.Color(options.colorStart ?? 0xff0055);
    this.colorEnd = new THREE.Color(options.colorEnd ?? 0x00ffff);

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

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uHistoryPositions: { value: this.historyPositions },
        uHistoryTimes: { value: this.historyTimes },
        uHistoryCount: { value: 0 },
        uCurrentTime: { value: 0 },
        uMaxLifetime: { value: this.maxLifetime },
        uWidth: { value: this.width },
        uColorStart: { value: this.colorStart },
        uColorEnd: { value: this.colorEnd }
      },
      vertexShader: `
        uniform vec3 uHistoryPositions[${this.maxHistory}];
        uniform float uHistoryTimes[${this.maxHistory}];
        uniform int uHistoryCount;
        uniform float uCurrentTime;
        uniform float uMaxLifetime;
        uniform float uWidth;

        attribute float sideSign;
        attribute float progress;

        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        vec3 catmullRom(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t) {
          float t2 = t * t;
          float t3 = t2 * t;
          return 0.5 * (
            (2.0 * p1) +
            (-p0 + p2) * t +
            (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t2 +
            (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * t3
          );
        }

        vec3 getSamplePoint(float tProgress, out float outTime) {
          if (uHistoryCount < 2) {
            outTime = uCurrentTime;
            return uHistoryPositions[0];
          }

          float maxIdx = float(uHistoryCount - 1);
          float rawIdx = tProgress * maxIdx;
          int idx1 = int(floor(rawIdx));
          int idx2 = min(idx1 + 1, uHistoryCount - 1);
          int idx0 = max(idx1 - 1, 0);
          int idx3 = min(idx2 + 1, uHistoryCount - 1);

          float localT = fract(rawIdx);

          outTime = mix(uHistoryTimes[idx1], uHistoryTimes[idx2], localT);
          return catmullRom(uHistoryPositions[idx0], uHistoryPositions[idx1], uHistoryPositions[idx2], uHistoryPositions[idx3], localT);
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
          vec3 currentPos = getSamplePoint(progress, sampleTime);

          float deltaP = 0.01;
          float unusedTime;
          vec3 nextPos = getSamplePoint(min(progress + deltaP, 1.0), unusedTime);
          vec3 prevPos = getSamplePoint(max(progress - deltaP, 0.0), unusedTime);

          vec3 tangent = nextPos - prevPos;
          if (length(tangent) < 0.0001) {
            tangent = vec3(0.0, 1.0, 0.0);
          } else {
            tangent = normalize(tangent);
          }

          vec3 camDir = normalize(cameraPosition - currentPos);
          vec3 side = cross(tangent, camDir);
          if (length(side) < 0.0001) {
            side = vec3(1.0, 0.0, 0.0);
          } else {
            side = normalize(side);
          }

          float widthFactor = pow(progress, 0.5);
          if (progress > 0.85) {
            float headProgress = (1.0 - progress) / 0.15;
            widthFactor *= sin(headProgress * 1.5707963);
          }

          vec3 finalPos = currentPos + side * (sideSign * uWidth * 0.5 * widthFactor);

          float age = uCurrentTime - sampleTime;
          vAlpha = clamp(1.0 - (age / uMaxLifetime), 0.0, 1.0);

          gl_Position = projectionMatrix * viewMatrix * vec4(finalPos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;

        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        void main() {
          float distFromCenter = abs(vUv.y - 0.5) * 2.0;

          // Crisp edge profile
          float edgeAlpha = smoothstep(1.0, 0.95, distFromCenter);
          float tailFade = smoothstep(0.0, 0.1, vProgress);

          float finalAlpha = edgeAlpha * tailFade * vAlpha;

          if (finalAlpha < 0.01) discard;

          vec3 baseColor = mix(uColorStart, uColorEnd, vProgress);

          // Premultiplied alpha output: RGB channels are pre-scaled by alpha to avoid darkening self-overlaps
          gl_FragColor = vec4(baseColor * finalAlpha, finalAlpha);
        }
      `,
      transparent: true,

      // 1. Force trail to draw over all objects
      depthTest: false,
      depthWrite: false,

      // 2. Custom Premultiplied Alpha Blending (prevents dark self-overlap artifacts)
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
    this.mesh.renderOrder = 9999; // Ensures trail is drawn after normal scene objects
    this.scene.add(this.mesh);
  }

  update() {
    if (!this.target) return;

    const currentTime = performance.now() / 1000;
    this.target.getWorldPosition(this._lastWorldPos);

    const lastItem = this.rawHistory[this.rawHistory.length - 1];
    if (!lastItem || lastItem.pos.distanceToSquared(this._lastWorldPos) > 1e-3) {
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