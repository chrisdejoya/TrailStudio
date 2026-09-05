export function setupSceneInteraction({
  renderer,
  lightingManager,
  trailManager,
  compositionGrid,
  handleCameraMouseDown,
  handleCameraMouseMove,
  handleCameraWheel,
  handleCameraResize,
  resizePostProcessing,
  scheduleSave,
  saveSettings,
  getButtonLabelManager,
}) {
  const pressedCanvasButtons = new Set();
  let wheelTimer = null;

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      lightingManager.setActiveLight(null);
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const inspector = document.querySelector('#inspector-shell');
      if (inspector) inspector.style.display = inspector.style.display === 'none' ? 'flex' : 'none';
    } else if (event.key === '`') {
      event.preventDefault();
      const hud = document.querySelector('#hud');
      if (hud) hud.style.display = hud.style.display === 'none' ? 'flex' : 'none';
    }
  });

  window.addEventListener('contextmenu', (event) => event.preventDefault());

  renderer.domElement.addEventListener('mousedown', (event) => {
    lightingManager.setActiveLight(null);
    handleCameraMouseDown(event);
    trailManager.setDragging(true);
    pressedCanvasButtons.add(event.button);
    compositionGrid.show();
  });

  window.addEventListener('mouseup', (event) => {
    trailManager.setDragging(false);
    pressedCanvasButtons.delete(event.button);
    if (pressedCanvasButtons.size === 0) compositionGrid.hide();
    saveSettings();
  });

  window.addEventListener('blur', () => {
    pressedCanvasButtons.clear();
    compositionGrid.hide();
  });

  window.addEventListener('mousemove', (event) => {
    handleCameraMouseMove(event, lightingManager.activeLightId, lightingManager.lightsMap);
  });

  renderer.domElement.addEventListener(
    'wheel',
    (event) => {
      handleCameraWheel(event, scheduleSave);
      compositionGrid.show();
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        if (pressedCanvasButtons.size === 0) compositionGrid.hide();
      }, 150);
    },
    { passive: false }
  );

  window.addEventListener('resize', () => {
    handleCameraResize();
    renderer.setSize(innerWidth, innerHeight);
    resizePostProcessing(innerWidth, innerHeight);
    getButtonLabelManager()?.onResize();
    compositionGrid.onResize();
  });

  return () => {
    clearTimeout(wheelTimer);
    pressedCanvasButtons.clear();
  };
}
