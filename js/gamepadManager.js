// gamepadManager.js

export const STANDARD_BUTTONS = [
  'A / Cross', 'B / Circle', 'X / Square', 'Y / Triangle',
  'L1 / LB', 'R1 / RB', 'L2 / LT', 'R2 / RT',
  'Select / Back', 'Start', 'L3 / Thumb', 'R3 / Thumb',
  'D-Pad Up', 'D-Pad Down', 'D-Pad Left', 'D-Pad Right', 'Vendor'
];

export class GamepadManager {
  constructor(options = {}) {
    this.hudUI = options.hudUI || null;
    this.meshMappings = options.meshMappings || {};
    this.onButtonChange = options.onButtonChange || (() => {});
    this.onAxisChange = options.onAxisChange || (() => {});
    this.onPadChange = options.onPadChange || (() => {}); // Added callback for pad selection/changes
    
    this.activePadIndex = null;
    this.rafId = null;
    this.previousState = { buttons: [], axes: [] };

    this.initListeners();
  }

  initListeners() {
    window.addEventListener('gamepadconnected', (e) => {
      this.refreshPads();
      if (this.activePadIndex === null) {
        this.selectPad(e.gamepad.index);
      }
    });

    window.addEventListener('gamepaddisconnected', (e) => {
      this.refreshPads();
      if (this.activePadIndex === e.gamepad.index) {
        this.activePadIndex = null;
        this.stopPolling();
        this.onPadChange(null); // Notify UI that controller was disconnected
      }
    });
  }

  refreshPads() {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    return Array.from(gamepads).filter(Boolean);
  }

  selectPad(index) {
    this.activePadIndex = index;
    this.startPolling();
    
    const pad = this.getSelectedPad();
    if (pad) {
      // Pass the controller's browser ID (name) and details to the callback
      this.onPadChange({ 
        id: pad.id, 
        index: pad.index, 
        mapping: pad.mapping 
      });
    }
  }

  getSelectedPad() {
    if (this.activePadIndex === null) return null;
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    return gamepads[this.activePadIndex] || null;
  }

  startPolling() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    
    const poll = () => {
      this.processPad();
      this.rafId = requestAnimationFrame(poll);
    };
    
    this.rafId = requestAnimationFrame(poll);
  }

  stopPolling() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  processPad() {
    const pad = this.getSelectedPad();
    if (!pad) return;

    // Process Buttons
    pad.buttons.forEach((btn, idx) => {
      const prev = this.previousState.buttons[idx] || { pressed: false, value: 0 };
      if (btn.pressed !== prev.pressed || btn.value !== prev.value) {
        this.onButtonChange({
          index: idx,
          name: STANDARD_BUTTONS[idx] || `Button ${idx}`,
          pressed: btn.pressed,
          value: btn.value
        });
      }
    });

    // Process Axes
    pad.axes.forEach((val, idx) => {
      const prevVal = this.previousState.axes[idx] || 0;
      if (Math.abs(val - prevVal) > 0.01) { // Deadzone threshold
        this.onAxisChange({
          index: idx,
          value: val
        });
      }
    });

    // Cache current state
    this.previousState = {
      buttons: pad.buttons.map(b => ({ pressed: b.pressed, value: b.value })),
      axes: [...pad.axes]
    };
  }
}