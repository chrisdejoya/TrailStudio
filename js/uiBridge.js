export function bindSliderAndInput(sliderSel, inputSel, callback, decimals = 2) {
  const slider = document.querySelector(sliderSel);
  const input = document.querySelector(inputSel);
  if (!slider || !input) return;

  slider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    input.value = Number.isFinite(val) ? val.toFixed(decimals) : '0';
    callback(val);
  });

  input.addEventListener('input', (e) => {
    const min = slider.min !== '' ? parseFloat(slider.min) : -Infinity;
    const max = slider.max !== '' ? parseFloat(slider.max) : Infinity;
    const val = Math.max(min, Math.min(max, parseFloat(e.target.value) || 0));
    slider.value = val;
    callback(val);
  });
}

export function exposeAppApi(api) {
  window.TrailStudioApp = {
    ...window.TrailStudioApp,
    ...api
  };
}

export function registerParentMessageBridge(app) {
  window.addEventListener('message', (event) => {
    const data = event.data || {};
    if (!data || !(data.type === 'inspector-control' || data.type === 'inspector-action')) return;

    if (data.type === 'inspector-action') {
      switch (data.action) {
        case 'load-scene':
          if (typeof app.loadDefaultScene === 'function') app.loadDefaultScene();
          break;
        case 'save-scene':
          if (typeof app.exportSettings === 'function') app.exportSettings();
          break;
        case 'reset-scene':
          if (typeof app.resetCamera === 'function') app.resetCamera();
          break;
        default:
          break;
      }
      return;
    }

    if (data.control === 'mode' && typeof app.setMode === 'function') {
      app.setMode(data.value);
      return;
    }

    if (data.control === 'camera' && typeof app.updateCameraFromBridge === 'function') {
      app.updateCameraFromBridge(data);
      return;
    }

    if (data.control === 'light' && typeof app.updateLightFromBridge === 'function') {
      app.updateLightFromBridge(data);
    }
  });
}
