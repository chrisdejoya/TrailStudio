import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAShaderFixed } from './shaders/FXAAShaderFixed.js';

const ContrastSaturationShader = {
  uniforms: {
    tDiffuse: { value: null },
    contrast: { value: 1.0 },
    saturation: { value: 1.0 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float contrast;
    uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      vec3 color = (col.rgb - 0.5) * contrast + 0.5;
      float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
      vec3 grayscale = vec3(luminance);
      color = mix(grayscale, color, saturation);
      gl_FragColor = vec4(color, col.a);
    }`
};

function createMainRenderTarget(width, height, samples = 2) {
  // Clamp multi-sampling samples defensively to prevent overhead/crashes
  const maxSamples = Math.min(samples, 4);
  return new THREE.WebGLRenderTarget(width, height, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    samples: maxSamples
  });
}

export function createPostProcessing(renderer, scene, camera) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const composer = new EffectComposer(renderer, createMainRenderTarget(width, height, 2));

  // 1. Base Render Pass
  const renderPass = new RenderPass(scene, camera);
  renderPass.clear = true;
  renderPass.clearColor = new THREE.Color(0, 0, 0);
  renderPass.clearAlpha = 0;
  composer.addPass(renderPass);

  // 2. SSAO Pass
  const aoPass = new SSAOPass(scene, camera, width, height);
  aoPass.enabled = false;
  aoPass.kernelRadius = 8;
  aoPass.minDistance = 0.001;
  aoPass.maxDistance = 0.1;
  composer.addPass(aoPass);

  // 3. Bloom Pass
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.0, 0.5, 0.95);
  bloomPass.enabled = false;
  composer.addPass(bloomPass);

  // 4. Contrast & Saturation Pass (now operates safely on normalized values)
  const postShaderPass = new ShaderPass(ContrastSaturationShader);
  composer.addPass(postShaderPass);

  // 5. OutputPass (Handles tone mapping and color space conversion)
  // Must run BEFORE FXAA so edge-detection processes correct LDR values.
  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  // 6. FXAA Pass (Runs on final sRGB buffer) - Using fixed shader to avoid compiler warnings
  const fxaaPass = new ShaderPass(FXAAShaderFixed);
  const pixelRatio = renderer.getPixelRatio();
  fxaaPass.material.uniforms.resolution.value.set(1 / (width * pixelRatio), 1 / (height * pixelRatio));
  composer.addPass(fxaaPass);

  function updateAntiAliasing() {
    const enabled = document.querySelector('#aaToggle')?.checked ?? true;
    const mode = document.querySelector('#aaQualitySelect')?.value ?? '';

    fxaaPass.enabled = enabled;

    let samples = 0;
    if (enabled) {
      if (mode.includes('2msaa')) samples = 2;
      else if (mode.includes('4msaa') || mode.includes('8msaa')) samples = 4;
    }

    const oldTarget = composer.renderTarget1;
    composer.reset(createMainRenderTarget(window.innerWidth, window.innerHeight, samples));
    if (oldTarget) oldTarget.dispose();
  }

  function resize(w, h) {
    composer.setSize(w, h);
    const pr = renderer.getPixelRatio();
    fxaaPass.material.uniforms.resolution.value.set(1 / (w * pr), 1 / (h * pr));
  }

  return {
    composer,
    renderPass,
    aoPass,
    bloomPass,
    postShaderPass,
    fxaaPass,
    outputPass,
    updateAntiAliasing,
    resize
  };
}