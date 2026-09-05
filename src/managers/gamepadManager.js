// gamepadManager.js

export const STANDARD_BUTTONS = [
  'A / Cross',
  'B / Circle',
  'X / Square',
  'Y / Triangle',
  'L1 / LB',
  'R1 / RB',
  'L2 / LT',
  'R2 / RT',
  'Select / Back',
  'Start',
  'L3 / Thumb',
  'R3 / Thumb',
  'D-Pad Up',
  'D-Pad Down',
  'D-Pad Left',
  'D-Pad Right',
  'Vendor',
];

export const DPAD_DIAGONAL_BUTTONS = [
  { index: 19, name: 'D-Pad Up-Left', vertical: 12, horizontal: 14 },
  { index: 20, name: 'D-Pad Up-Right', vertical: 12, horizontal: 15 },
  { index: 21, name: 'D-Pad Down-Left', vertical: 13, horizontal: 14 },
  { index: 22, name: 'D-Pad Down-Right', vertical: 13, horizontal: 15 },
];

export function getDpadDirectionalStates(buttons, axes = [], includeStick = false) {
  const stickThreshold = 0.3;
  const stickX = axes[0] || 0;
  const stickY = axes[1] || 0;
  const getButtonState = (index) => {
    const button = buttons[index] || { pressed: false, value: 0 };
    const value = button.value || 0;
    return { pressed: Boolean(button.pressed) || value > 0.1, value };
  };
  const states = [
    { index: 12, name: 'D-Pad Up', ...getButtonState(12) },
    { index: 13, name: 'D-Pad Down', ...getButtonState(13) },
    { index: 14, name: 'D-Pad Left', ...getButtonState(14) },
    { index: 15, name: 'D-Pad Right', ...getButtonState(15) },
  ];

  if (includeStick) {
    const stickMagnitude = Math.hypot(stickX, stickY);
    if (stickMagnitude > stickThreshold) {
      const angle = Math.atan2(stickY, stickX);
      const octant = Math.round(angle / (Math.PI / 4));
      const direction = ((octant % 8) + 8) % 8;
      const selectedCardinals = {
        0: [15],
        1: [13, 15],
        2: [13],
        3: [13, 14],
        4: [14],
        5: [12, 14],
        6: [12],
        7: [12, 15],
      }[direction];

      selectedCardinals.forEach((index) => {
        const state = states.find((candidate) => candidate.index === index);
        const stickValue = index === 12 || index === 13 ? Math.abs(stickY) : Math.abs(stickX);
        state.pressed = true;
        state.value = Math.max(state.value, stickValue);
      });
    }
  }

  const stateByIndex = Object.fromEntries(states.map((state) => [state.index, state]));
  return [
    ...states,
    ...DPAD_DIAGONAL_BUTTONS.map(({ index, name, vertical, horizontal }) => ({
      index,
      name,
      pressed: Boolean(stateByIndex[vertical].pressed && stateByIndex[horizontal].pressed),
      value: Math.min(stateByIndex[vertical].value, stateByIndex[horizontal].value),
    })),
  ];
}

export function getDpadDiagonalStates(buttons) {
  return getDpadDirectionalStates(buttons).slice(4);
}

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
    const result = [];
    for (let i = 0; i < gamepads.length; i++) {
      const pad = gamepads[i];
      if (pad) result.push(pad);
    }
    return result;
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
        mapping: pad.mapping,
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
          value: btn.value,
        });
      }
    });

    // Process Axes
    pad.axes.forEach((val, idx) => {
      const prevVal = this.previousState.axes[idx] || 0;
      if (Math.abs(val - prevVal) > 0.01) {
        // Deadzone threshold
        this.onAxisChange({
          index: idx,
          value: val,
        });
      }
    });

    // Diagonals are virtual buttons derived from two cardinal D-pad inputs.
    getDpadDiagonalStates(pad.buttons).forEach((button) => {
      const prev = this.previousState.buttons[button.index] || { pressed: false, value: 0 };
      if (button.pressed !== prev.pressed || button.value !== prev.value) {
        this.onButtonChange(button);
      }
    });

    // Cache current state
    const buttonState = pad.buttons.map((b) => ({ pressed: b.pressed, value: b.value }));
    getDpadDiagonalStates(pad.buttons).forEach(({ index, pressed, value }) => {
      buttonState[index] = { pressed, value };
    });

    this.previousState = {
      buttons: buttonState,
      axes: [...pad.axes],
    };
  }
}
