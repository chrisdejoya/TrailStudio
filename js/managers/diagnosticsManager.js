import { STANDARD_BUTTONS } from './gamepadManager.js';

export class DiagnosticsPanel {
  constructor() {
    this.hudUI = {
      mapping: document.querySelector('#mapping'),
      axisCount: document.querySelector('#axisCount'),
      buttonCount: document.querySelector('#buttonCount'),
      leftValue: document.querySelector('#lx'),
      rightValue: document.querySelector('#rx'),
      leftBar: document.querySelector('#lxBar'),
      rightBar: document.querySelector('#rxBar'),
      leftDot: document.querySelector('#leftDot'),
      rightDot: document.querySelector('#rightDot'),
      status: document.querySelector('#status'),
      buttons: document.querySelector('#buttons'),
      buttonElements: [],
      buttonValues: [],
      buttonPressureBars: []
    };

    this.lastSnapshot = null;
  }

  getHudUI() {
    return this.hudUI;
  }

  setStatus(ok) {
    const text = ok ? 'Connected' : 'Waiting';
    const className = 'status ' + (ok ? 'connected' : '');
    if (this.hudUI.status && this.hudUI.status.textContent !== text) {
      this.hudUI.status.textContent = text;
      this.hudUI.status.className = className;
    }
  }

  fmt(v) {
    return Number(v || 0).toFixed(3);
  }

  setDot(id, x, y) {
    const dot = id === 'leftDot' ? this.hudUI.leftDot : this.hudUI.rightDot;
    if (!dot) return;
    dot.style.left = `${50 + Math.max(-1, Math.min(1, x)) * 45}%`;
    dot.style.top = `${50 + Math.max(-1, Math.min(1, y)) * 45}%`;
  }

  getButtonLabel(i) {
    return STANDARD_BUTTONS[i] || `B${i}`;
  }

  buildUI(pad) {
    if (!this.hudUI.buttons) return;
    this.hudUI.buttons.innerHTML = '';
    this.hudUI.buttonElements = [];
    this.hudUI.buttonValues = [];
    this.hudUI.buttonPressureBars = [];

    pad.buttons.forEach((button, i) => {
      const el = document.createElement('div');
      el.className = 'btn' + (button.pressed ? ' on' : '');
      el.dataset.button = i;
      el.innerHTML = `
        <div class="btn-header"><span class="b-name">${this.getButtonLabel(i)}</span><span class="b-val">${this.fmt(button.value)}</span></div>
        <div class="pressure-bar" style="width:${(button.value || 0) * 100}%"></div>
      `;
      this.hudUI.buttons.appendChild(el);
      this.hudUI.buttonElements[i] = el;
      this.hudUI.buttonValues[i] = el.querySelector('.b-val');
      this.hudUI.buttonPressureBars[i] = el.querySelector('.pressure-bar');
    });
  }

  resetSnapshot() {
    this.lastSnapshot = null;
  }

  update(pad) {
    if (!pad) return;

    const mapping = pad.mapping || 'non-standard';
    if (this.hudUI.mapping) this.hudUI.mapping.textContent = mapping;
    if (this.hudUI.axisCount) this.hudUI.axisCount.textContent = String(pad.axes.length);
    if (this.hudUI.buttonCount) this.hudUI.buttonCount.textContent = String(pad.buttons.length);

    const ax = pad.axes;
    const lx = ax[0] || 0, ly = ax[1] || 0, rx = ax[2] || 0, ry = ax[3] || 0;

    if (this.hudUI.leftValue) this.hudUI.leftValue.textContent = `${this.fmt(lx)}, ${this.fmt(ly)}`;
    if (this.hudUI.rightValue) this.hudUI.rightValue.textContent = `${this.fmt(rx)}, ${this.fmt(ry)}`;
    if (this.hudUI.leftBar) this.hudUI.leftBar.style.width = `${Math.min(100, Math.hypot(lx, ly) * 100)}%`;
    if (this.hudUI.rightBar) this.hudUI.rightBar.style.width = `${Math.min(100, Math.hypot(rx, ry) * 100)}%`;

    this.setDot('leftDot', lx, ly); 
    this.setDot('rightDot', rx, ry);

    if (!this.lastSnapshot || this.lastSnapshot.id !== pad.id || this.lastSnapshot.buttons.length !== pad.buttons.length) {
      this.buildUI(pad);
      this.lastSnapshot = { id: pad.id, axes: [], buttons: pad.buttons.map((b) => b.value) };
    }

    pad.buttons.forEach((button, i) => {
      const val = button.value;
      const isPressed = button.pressed || val > 0.1;

      const visual = this.hudUI.buttonElements[i];
      if (visual) {
        if (visual.classList.contains('on') !== isPressed) {
          visual.classList.toggle('on', isPressed);
        }
        const valueText = this.fmt(val);
        const pressureWidth = `${(val || 0) * 100}%`;
        
        if (this.hudUI.buttonValues[i] && this.hudUI.buttonValues[i].textContent !== valueText) {
          this.hudUI.buttonValues[i].textContent = valueText;
        }
        if (this.hudUI.buttonPressureBars[i] && this.hudUI.buttonPressureBars[i].style.width !== pressureWidth) {
          this.hudUI.buttonPressureBars[i].style.width = pressureWidth;
        }
      }
    });

    this.lastSnapshot.axes = pad.axes.slice();
    this.lastSnapshot.buttons = pad.buttons.map((b) => b.value);
  }
}