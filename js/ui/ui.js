// UI utility functions for TrailStudio

// Mode switching
export function switchMode(value) {
  const tabs = document.querySelectorAll('.mode-tab');
  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.mode === value);
  });

  if (window.TrailStudioApp && typeof window.TrailStudioApp.setMode === 'function') {
    window.TrailStudioApp.setMode(value);
  }
}

// Panel collapsing
export function togglePanel(header) {
  const panel = header.closest('.panel');
  if (panel) panel.classList.toggle('collapsed');
}

// Get all dimmable elements in the active group (panels + light-cards)
function getDimmableElements(group) {
  return group.querySelectorAll('.panel, .light-card');
}

// Panel/content focus dimming - dim entire panel on mousedown, restore on mouseup
export function initPanelDimming() {
  document.addEventListener('mousedown', (e) => {
    const target = e.target;
    if (!target.matches('input, select, textarea, [contenteditable]')) return;

    const panelBody = target.closest('.panel-body-content');
    if (!panelBody) return;

    const activePanel = panelBody.closest('.panel, .light-card');
    const group = activePanel?.closest('.inspector-group.active');
    if (!group) return;

    getDimmableElements(group).forEach(p => {
      if (p !== activePanel) p.classList.add('dimmed');
    });
  });

  document.addEventListener('mouseup', () => {
    document.querySelectorAll('.inspector-group.active .panel.dimmed, .inspector-group.active .light-card.dimmed').forEach(p => {
      p.classList.remove('dimmed');
    });
  });
}

// Global drag dimming - fade all UI while dragging on canvas
export function initCanvasDragDimming() {
  const app = document.querySelector('#app');
  let isCanvasDrag = false;
  let wheelTimer = null;

  if (!app) return;

  app.addEventListener('mousedown', (e) => {
    // Start drag dimming for left/middle/right mouse on canvas (not on UI elements)
    if (e.target.closest('.inspector-shell, #hud')) return;
    // Ensure it's the canvas (Three.js adds it to #app)
    if (!e.target.closest('canvas')) return;
    
    isCanvasDrag = true;
    document.body.classList.add('canvas-dragging');
  });

  window.addEventListener('mouseup', () => {
    if (isCanvasDrag) {
      isCanvasDrag = false;
      document.body.classList.remove('canvas-dragging');
    }
  });

  window.addEventListener('mouseleave', () => {
    if (isCanvasDrag) {
      isCanvasDrag = false;
      document.body.classList.remove('canvas-dragging');
    }
  });

  // Mouse wheel scrolling on canvas - dim UI while scrolling
  app.addEventListener('wheel', (e) => {
    if (e.target.closest('.inspector-shell, #hud')) return;
    if (!e.target.closest('canvas')) return;
    
    document.body.classList.add('canvas-dragging');
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => {
      if (!isCanvasDrag) { // Don't remove if actively dragging
        document.body.classList.remove('canvas-dragging');
      }
    }, 150); // Keep dimmed for 150ms after last wheel event
  }, { passive: true });
}

// Auto-hide UI after inactivity
export function initAutoHideUI() {
  const uiShell = document.querySelector('.inspector-shell');
  const hud = document.querySelector('#hud');
  const bottomDock = document.querySelector('#bottom-dock');
  let hideTimer = null;
  const HIDE_DELAY = 5000;

  function showUI() {
    uiShell?.classList.remove('ui-hidden');
    hud?.classList.remove('ui-hidden');
    bottomDock?.classList.remove('ui-hidden');
  }

  function hideUI() {
    uiShell?.classList.add('ui-hidden');
    hud?.classList.add('ui-hidden');
    bottomDock?.classList.add('ui-hidden');
  }

  function resetHideTimer() {
    clearTimeout(hideTimer);
    showUI();
    hideTimer = setTimeout(hideUI, HIDE_DELAY);
  }

  // Track any mouse activity on the document
  ['mousemove', 'mousedown', 'wheel', 'keydown', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, resetHideTimer, { passive: true });
  });

  // Initialize timer
  resetHideTimer();
}

// Mac OS dock neighbor scaling
export function initDockScaling() {
  const dockItems = document.querySelectorAll('.dock-item');
  dockItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      dockItems.forEach((other, i) => {
        const distance = Math.abs(i - index);
        if (distance === 0) return; // hovered item handled by CSS
        other.style.transition = 'transform 0.15s cubic-bezier(0.15, 1, 0.25, 1), filter 0.15s ease';
        if (distance === 1) {
          other.style.transform = 'scale(1.15)';
          other.style.zIndex = '5';
          const img = other.querySelector('img');
          if (img) img.style.filter = 'brightness(1.15)';
        } else if (distance === 2) {
          other.style.transform = 'scale(1.05)';
          other.style.zIndex = '3';
          const img = other.querySelector('img');
          if (img) img.style.filter = 'brightness(1.08)';
        }
      });
    });
    item.addEventListener('mouseleave', () => {
      dockItems.forEach((other) => {
        other.style.transition = 'transform 0.15s cubic-bezier(0.15, 1, 0.25, 1), filter 0.15s ease';
        other.style.transform = '';
        other.style.zIndex = '';
        const img = other.querySelector('img');
        if (img) img.style.filter = '';
      });
    });
  });
}

// Initialize all UI utilities
export function initUI() {
  initPanelDimming();
  initCanvasDragDimming();
  initAutoHideUI();
  initDockScaling();
}

// Initialize on load
initUI();

// Expose globals for onclick handlers in HTML
window.switchMode = switchMode;
window.togglePanel = togglePanel;