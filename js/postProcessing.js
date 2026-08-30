import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

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
  return new THREE.WebGLRenderTarget(width, height, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    samples
  });
}

export function createPostProcessing(renderer, scene, camera) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const composer = new EffectComposer(renderer, createMainRenderTarget(width, height, 2));

  const renderPass = new RenderPass(scene, camera);
  renderPass.clear = true;
  renderPass.clearColor = new THREE.Color(0, 0, 0);
  renderPass.clearAlpha = 0;
  composer.addPass(renderPass);

  const aoPass = new SSAOPass(scene, camera, width, height);
  aoPass.enabled = false;
  aoPass.kernelRadius = 8;
  aoPass.minDistance = 0.001;
  aoPass.maxDistance = 0.1;
  composer.addPass(aoPass);

  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.0, 0.5, 0.95);
  bloomPass.enabled = false;
  composer.addPass(bloomPass);

  const postShaderPass = new ShaderPass(ContrastSaturationShader);
  composer.addPass(postShaderPass);

  const fxaaPass = new ShaderPass(FXAAShader);
  const pixelRatio = renderer.getPixelRatio();
  fxaaPass.material.uniforms.resolution.value.x = 1 / (width * pixelRatio);
  fxaaPass.material.uniforms.resolution.value.y = 1 / (height * pixelRatio);
  composer.addPass(fxaaPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  function updateAntiAliasing() {
    const enabled = document.querySelector('#aaToggle')?.checked ?? true;
    const mode = document.querySelector('#aaQualitySelect')?.value ?? '';

    fxaaPass.enabled = enabled;

    let samples = 0;
    if (enabled) {
      if (mode.includes('2msaa')) samples = 2;
      else if (mode.includes('4msaa')) samples = 4;
      else if (mode.includes('8msaa')) samples = 8;
    }

    const oldTarget = composer.renderTarget1;
    composer.reset(createMainRenderTarget(window.innerWidth, window.innerHeight, samples));
    oldTarget.dispose();
  }

  function resize(width, height) {
    composer.setSize(width, height);
    aoPass.setSize(width, height);
    const pr = renderer.getPixelRatio();
    fxaaPass.material.uniforms.resolution.value.x = 1 / (width * pr);
    fxaaPass.material.uniforms.resolution.value.y = 1 / (height * pr);
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