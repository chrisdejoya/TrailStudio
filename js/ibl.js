import * as THREE from 'three';

export class ProceduralIBLEditor {
  constructor(renderer, targetScene) {
    this.mainScene = targetScene;
    this.pmremGenerator = new THREE.PMREMGenerator(renderer);
    this.pmremGenerator.compileCubemapShader();
    this.environmentScene = new THREE.Scene();
    this.currentTarget = null;

    // Cache preview canvas and context to avoid DOM lookups every frame
    this.previewCanvas = document.querySelector('#iblPreview');
    this.previewContext = this.previewCanvas ? this.previewCanvas.getContext('2d') : null;

    this.skyUniforms = {
      skyColor: { value: new THREE.Color() },
      horizonColor: { value: new THREE.Color() },
      groundColor: { value: new THREE.Color() },
      skyLevel: { value: 0 },
      horizonLevel: { value: 0 },
      groundLevel: { value: 0 },
      sun1Color: { value: new THREE.Color() },
      sun1Position: { value: new THREE.Vector3() },
      sun1Size: { value: 1 },
      sun1Intensity: { value: 0 },
      sun1Atmosphere: { value: 0 },
      sun2Color: { value: new THREE.Color() },
      sun2Position: { value: new THREE.Vector3() },
      sun2Size: { value: 1.25 },
      sun2Intensity: { value: 0 },
      sun2Atmosphere: { value: 0.5 }
    };

    const material = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: this.skyUniforms,
      vertexShader: `
        precision highp float;
        varying vec3 vWorldPosition;
        void main() {
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        precision highp float;
        uniform vec3 skyColor, horizonColor, groundColor;
        uniform float skyLevel, horizonLevel, groundLevel;
        uniform vec3 sun1Color, sun1Position, sun2Color, sun2Position;
        uniform float sun1Size, sun1Intensity, sun1Atmosphere;
        uniform float sun2Size, sun2Intensity, sun2Atmosphere;
        varying vec3 vWorldPosition;

        vec3 sun(vec3 direction, vec3 position, vec3 color, float size, float intensity, float atmosphere) {
          float alignment = dot(direction, normalize(position));
          float exponent = mix(8000.0 / (size * size), 2.0 / size, clamp(atmosphere, 0.0, 1.0));
          float glow = pow(max(alignment, 0.0), exponent);
          float disk = step(1.0 - (0.0005 * size), alignment);
          return color * intensity * mix(disk, glow * (1.0 + atmosphere * 3.0), atmosphere);
        }

        void main() {
          vec3 direction = normalize(vWorldPosition);
          float height = direction.y;
          vec3 upper = mix(horizonColor, skyColor, smoothstep(horizonLevel, skyLevel, height));
          vec3 lower = mix(horizonColor, groundColor, smoothstep(horizonLevel, groundLevel, height));
          vec3 color = height >= horizonLevel ? upper : lower;
          color += sun(direction, sun1Position, sun1Color, sun1Size, sun1Intensity, sun1Atmosphere);
          color += sun(direction, sun2Position, sun2Color, sun2Size, sun2Intensity, sun2Atmosphere);
          gl_FragColor = vec4(color, 1.0);
        }`
    });

    this.environmentScene.add(new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material));

    // Scaled down to fit properly inside the unit sphere (radius 1)
    this.ringGeometry = new THREE.TorusGeometry(0.5, 0.02, 16, 64);
    this.ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.ringMesh = new THREE.Mesh(this.ringGeometry, this.ringMaterial);
    this.ringMesh.rotation.x = Math.PI / 2;
    this.environmentScene.add(this.ringMesh);
  }

  update(state) {
    const u = this.skyUniforms;
    u.skyColor.value.set(state.skyColor);
    u.horizonColor.value.set(state.horizonColor);
    u.groundColor.value.set(state.groundColor);
    u.skyLevel.value = state.skyLevel;
    u.horizonLevel.value = state.horizonLevel;
    u.groundLevel.value = state.groundLevel;

    [1, 2].forEach((index) => {
      const elevation = THREE.MathUtils.degToRad(90 - state[`sun${index}Elevation`]);
      const azimuth = THREE.MathUtils.degToRad(state[`sun${index}Azimuth`]);
      u[`sun${index}Position`].value.setFromSphericalCoords(100, elevation, azimuth);
      u[`sun${index}Color`].value.set(state[`sun${index}Color`]);
      u[`sun${index}Size`].value = state[`sun${index}Size`] ?? (index === 1 ? 1 : 1.5);
      u[`sun${index}Intensity`].value = state[`sun${index}Visible`] ? state[`sun${index}Intensity`] : 0;
      u[`sun${index}Atmosphere`].value = state[`sun${index}Atmosphere`] ?? (index === 1 ? 0.5 : 0.7);
    });

    this.ringMesh.visible = state.ringVisible ?? true;
    this.ringMesh.position.y = state.ringHeight ?? 0;
    this.ringMaterial.color.set(state.ringColor).multiplyScalar(state.ringIntensity ?? 1);

    if (state.enabled) {
      const newTarget = this.pmremGenerator.fromScene(this.environmentScene);
      if (this.currentTarget) this.currentTarget.dispose();
      this.currentTarget = newTarget;

      this.mainScene.environment = newTarget.texture;
      this.mainScene.environmentIntensity = state.intensity;
      this.mainScene.background = state.background ? newTarget.texture : null;
    } else {
      this.mainScene.environment = null;
      this.mainScene.background = null;
    }

    this.renderPreview(state);
  }

  renderPreview(state) {
    if (!this.previewCanvas || !this.previewContext) return;
    const gradient = this.previewContext.createLinearGradient(0, 0, 0, this.previewCanvas.height);
    gradient.addColorStop(0, state.skyColor);
    gradient.addColorStop(Math.max(0, Math.min(1, 0.5 - state.horizonLevel / 2)), state.horizonColor);
    gradient.addColorStop(1, state.groundColor);
    this.previewContext.fillStyle = gradient;
    this.previewContext.fillRect(0, 0, this.previewCanvas.width, this.previewCanvas.height);
  }

  dispose() {
    if (this.currentTarget) this.currentTarget.dispose();
    this.pmremGenerator.dispose();
    this.ringGeometry.dispose();
    this.ringMaterial.dispose();
  }
}