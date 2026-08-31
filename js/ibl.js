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

        vec3 rectLight(vec3 direction, vec3 position, vec3 color, float size, float intensity) {
          vec3 lightDir = normalize(position);
          vec3 up = abs(lightDir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
          vec3 tangent = normalize(cross(up, lightDir));
          vec3 bitangent = cross(lightDir, tangent);
          vec3 relDir = direction - lightDir * dot(direction, lightDir);
          float xCoord = dot(relDir, tangent);
          float yCoord = dot(relDir, bitangent);
          float halfWidth = 0.05 * size;
          float halfHeight = 0.1 * size;
          float dx = max(0.0, abs(xCoord) - halfWidth);
          float dy = max(0.0, abs(yCoord) - halfHeight);
          float dist = sqrt(dx * dx + dy * dy);
          float falloff = smoothstep(halfWidth + 0.05, 0.0, dist);
          float alignment = max(0.0, dot(direction, lightDir));
          return color * intensity * falloff * pow(alignment, 4.0);
        }

        void main() {
          vec3 direction = normalize(vWorldPosition);
          
          // --- FRONT-TO-BACK BIAS ---
          // direction.z ranges from -1 (back) to +1 (front). 
          // Adjust the multiplier (e.g., 0.4) to control how dramatic the front/back contrast is.
          float frontBackFactor = direction.z * 0.4; 

          float azimuthAngle = atan(direction.z, direction.x);
          float horizontalShift = sin(azimuthAngle) * 0.03;
          float height = direction.y + horizontalShift;
          
          vec3 dynamicHorizonColor = mix(horizonColor, skyColor * 0.5, cos(azimuthAngle) * 0.15);
          
          vec3 upper = mix(dynamicHorizonColor, skyColor, smoothstep(horizonLevel, skyLevel, height));
          vec3 lower = mix(dynamicHorizonColor, groundColor, smoothstep(horizonLevel, groundLevel, height));
          vec3 color = height >= horizonLevel ? upper : lower;

          // Apply front-to-back lighting skew (brighten front Z+, darken back Z-)
          color *= (1.0 + frontBackFactor);
          
          // Light sources
          color += sun(direction, sun1Position, sun1Color, sun1Size, sun1Intensity, sun1Atmosphere);
          color += rectLight(direction, sun2Position, sun2Color, sun2Size, sun2Intensity);

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

    // Sun 1 (Spherical disk/glow)
    const sun1El = THREE.MathUtils.degToRad(90 - state.sun1Elevation);
    const sun1Az = THREE.MathUtils.degToRad(state.sun1Azimuth);
    u.sun1Position.value.setFromSphericalCoords(100, sun1El, sun1Az);
    u.sun1Color.value.set(state.sun1Color);
    u.sun1Size.value = state.sun1Size;
    u.sun1Intensity.value = state.sun1Visible ? state.sun1Intensity : 0;
    u.sun1Atmosphere.value = state.sun1Atmosphere;

    // Sun 2 (Rectangular softbox)
    const sun2El = THREE.MathUtils.degToRad(90 - state.sun2Elevation);
    const sun2Az = THREE.MathUtils.degToRad(state.sun2Azimuth);
    u.sun2Position.value.setFromSphericalCoords(100, sun2El, sun2Az);
    u.sun2Color.value.set(state.sun2Color);
    u.sun2Size.value = state.sun2Size;
    u.sun2Intensity.value = state.sun2Visible ? state.sun2Intensity : 0;
    u.sun2Atmosphere.value = state.sun2Atmosphere;

    // Ring updates
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
    const ctx = this.previewContext;
    const w = this.previewCanvas.width;
    const h = this.previewCanvas.height;

    // Clear and draw background vertical gradient with horizontal variance simulation
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, state.skyColor);
    gradient.addColorStop(0.5, state.horizonColor);
    gradient.addColorStop(1, state.groundColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Draw rough preview approximations of Sun 1 and Sun 2 positions on the strip
    const drawLightPreview = (azimuth, color, size, isRect) => {
      const x = (azimuth / 360) * w;
      const y = h * 0.4; // Upper region
      ctx.save();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      if (isRect) {
        ctx.fillRect(x - (size * 4), y - (size * 2), size * 8, size * 4);
      } else {
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    if (state.sun1Visible) drawLightPreview(state.sun1Azimuth, state.sun1Color, state.sun1Size, false);
    if (state.sun2Visible) drawLightPreview(state.sun2Azimuth, state.sun2Color, state.sun2Size, true);
  }

  dispose() {
    if (this.currentTarget) this.currentTarget.dispose();
    this.pmremGenerator.dispose();
    this.ringGeometry.dispose();
    this.ringMaterial.dispose();
  }
}