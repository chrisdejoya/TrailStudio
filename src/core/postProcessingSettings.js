const query = (selector) => document.querySelector(selector);

export function applyPostProcessingSettings(
  state,
  { updateAntiAliasing, bloomPass, aoPass, renderer, postShaderPass }
) {
  if (!state) return;

  if (state.aaEnabled !== undefined) query('#aaToggle').checked = state.aaEnabled;
  if (state.aaQuality) query('#aaQualitySelect').value = state.aaQuality;
  updateAntiAliasing();

  if (state.shadowQuality) {
    const select = query('#shadowQualitySelect');
    select.value = state.shadowQuality;
    select.dispatchEvent(new Event('change'));
  }

  if (state.bloom) {
    const bloom = state.bloom;
    query('#bloomToggle').checked = bloom.enabled;
    bloomPass.enabled = bloom.enabled;
    bloomPass.strength = bloom.strength;
    bloomPass.radius = bloom.radius;
    bloomPass.threshold = bloom.threshold;
    query('#bloomStrength').value = bloom.strength;
    query('#bloomStrengthInput').value = bloom.strength.toFixed(2);
    query('#bloomRadius').value = bloom.radius;
    query('#bloomRadiusInput').value = bloom.radius.toFixed(2);
    query('#bloomThreshold').value = bloom.threshold;
    query('#bloomThresholdInput').value = bloom.threshold.toFixed(2);
  }

  if (state.ambientOcclusion) {
    const ambientOcclusion = state.ambientOcclusion;
    query('#aoToggle').checked = ambientOcclusion.enabled;
    aoPass.enabled = ambientOcclusion.enabled;
    aoPass.kernelRadius = ambientOcclusion.radius;
    aoPass.minDistance = ambientOcclusion.minDistance;
    aoPass.maxDistance = ambientOcclusion.maxDistance;
    query('#aoRadius').value = ambientOcclusion.radius;
    query('#aoRadiusInput').value = ambientOcclusion.radius.toFixed(2);
    query('#aoMinDistance').value = ambientOcclusion.minDistance;
    query('#aoMinDistanceInput').value = ambientOcclusion.minDistance.toFixed(3);
    query('#aoMaxDistance').value = ambientOcclusion.maxDistance;
    query('#aoMaxDistanceInput').value = ambientOcclusion.maxDistance.toFixed(2);
  }

  if (state.color) {
    const color = state.color;
    const toneMapping = query('#toneMappingSelect');
    toneMapping.value = color.toneMapping;
    toneMapping.dispatchEvent(new Event('change'));
    query('#exposureRange').value = color.exposure;
    query('#exposureInput').value = color.exposure.toFixed(2);
    renderer.toneMappingExposure = color.exposure;
    query('#contrastRange').value = color.contrast;
    query('#contrastInput').value = color.contrast.toFixed(2);
    postShaderPass.uniforms.contrast.value = color.contrast;
    query('#saturationRange').value = color.saturation;
    query('#saturationInput').value = color.saturation.toFixed(2);
    postShaderPass.uniforms.saturation.value = color.saturation;
  }
}
