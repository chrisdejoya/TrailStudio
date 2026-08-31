// colorPicker.js

const COLOR_PICKER_STYLES = `
    .custom-color-picker-wrapper {
      position: relative;
      display: inline-block;
    }

    .color-preview-btn {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .color-preview-btn:hover {
      border-color: rgba(255, 255, 255, 0.8);
    }

    .color-popup {
      position: absolute;
      top: 45px;
      left: 0;
      width: 200px;
      background: #1e1e1e;
      border: 2px solid #333;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
      z-index: 1000;
      user-select: none;
    }

    .color-saturation-box {
      position: relative;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, rgba(255,255,255,0));
      border-radius: 3px;
      cursor: crosshair;
    }

    .color-cursor {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      box-shadow: 0 0 2px rgba(0,0,0,0.8);
    }

    .color-sliders {
      margin-top: 5px;
    }

    .color-sliders input[type="range"] {
      width: 100%;
      appearance: none;
      height: 20px;
      border-radius: 3px;
      background: linear-gradient(to right, red, #ff0, lime, cyan, blue, magenta, red);
      outline: none;
      cursor: pointer;
    }

    .color-hex-row {
      margin-top: 5px;
    }

    .hex-input {
      width: 100%;
      background: #2a2a2a;
      border: 1px solid #444;
      color: #fff;
      padding: 5px;
      border-radius: 3px;
      font-family: monospace;
      box-sizing: border-box;
      text-align: center;
    }
`;

// Inject styles automatically into document head once
if (!document.getElementById('custom-color-picker-styles')) {
  const styleEl = document.createElement('style');
  styleEl.id = 'custom-color-picker-styles';
  styleEl.textContent = COLOR_PICKER_STYLES;
  document.head.appendChild(styleEl);
}

export class CustomColorPicker {
  constructor(containerElement, initialColor = '#ffffff', onChange = () => {}) {
    this.container = typeof containerElement === 'string' 
      ? document.querySelector(containerElement) 
      : containerElement;
    
    if (!this.container) return;

    this.color = this.parseColor(initialColor);
    this.onChange = onChange;
    this.isOpen = false;

    this.render();
    this.bindEvents();
  }

  parseColor(input) {
    const c = document.createElement('canvas').getContext('2d');
    c.fillStyle = input;
    return c.fillStyle;
  }

  render() {
    this.container.classList.add('custom-color-picker-wrapper');
    this.container.innerHTML = `
      <div class="color-preview-btn" style="background-color: ${this.color};"></div>
      <div class="color-popup" style="display: none;">
        <div class="color-saturation-box">
          <div class="color-cursor"></div>
        </div>
        <div class="color-sliders">
          <input type="range" min="0" max="360" value="0" class="hue-slider">
        </div>
        <div class="color-hex-row">
          <input type="text" class="hex-input" value="${this.color}">
        </div>
      </div>
    `;

    this.previewBtn = this.container.querySelector('.color-preview-btn');
    this.popup = this.container.querySelector('.color-popup');
    this.satBox = this.container.querySelector('.color-saturation-box');
    this.cursor = this.container.querySelector('.color-cursor');
    this.hueSlider = this.container.querySelector('.hue-slider');
    this.hexInput = this.container.querySelector('.hex-input');

    this.updateFromHex(this.color, false);
  }

  bindEvents() {
    this.previewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.togglePopup();
    });

    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.container.contains(e.target)) {
        this.closePopup();
      }
    });

    this.hexInput.addEventListener('input', (e) => {
      let val = e.target.value;
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-F]{6}$/i.test(val)) {
        this.updateFromHex(val, true);
      }
    });

    this.hueSlider.addEventListener('input', () => {
      this.updateFromSliders();
    });

    let isDragging = false;
    this.satBox.addEventListener('mousedown', (e) => {
      isDragging = true;
      this.handleSatBoxMove(e);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) this.handleSatBoxMove(e);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

  togglePopup() {
    this.isOpen ? this.closePopup() : this.openPopup();
  }

  openPopup() {
    this.isOpen = true;
    this.popup.style.display = 'block';
    this.updateFromHex(this.color, false);
  }

  closePopup() {
    this.isOpen = false;
    this.popup.style.display = 'none';
  }

  handleSatBoxMove(e) {
    const rect = this.satBox.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

    const s = x / rect.width;
    const v = 1 - (y / rect.height);

    this.cursor.style.left = `${x}px`;
    this.cursor.style.top = `${y}px`;

    const hue = parseFloat(this.hueSlider.value);
    const rgb = this.hsvToRgb(hue, s, v);
    const hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);

    this.color = hex;
    this.previewBtn.style.backgroundColor = hex;
    this.hexInput.value = hex;

    this.onChange(hex);
  }

  updateFromSliders() {
    const hue = parseFloat(this.hueSlider.value);
    this.satBox.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    
    const rect = this.satBox.getBoundingClientRect();
    const left = parseFloat(this.cursor.style.left) || 0;
    const top = parseFloat(this.cursor.style.top) || 0;
    
    const s = rect.width ? left / rect.width : 0;
    const v = rect.height ? 1 - (top / rect.height) : 1;

    const rgb = this.hsvToRgb(hue, s, v);
    const hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);

    this.color = hex;
    this.previewBtn.style.backgroundColor = hex;
    this.hexInput.value = hex;

    this.onChange(hex);
  }

  updateFromHex(hex, triggerCallback = true) {
    this.color = hex;
    this.previewBtn.style.backgroundColor = hex;
    this.hexInput.value = hex;

    const rgb = this.hexToRgb(hex);
    const hsv = this.rgbToHsv(rgb.r, rgb.g, rgb.b);

    this.hueSlider.value = hsv.h;
    this.satBox.style.backgroundColor = `hsl(${hsv.h}, 100%, 50%)`;

    const rect = this.satBox.getBoundingClientRect();
    const width = rect.width || 176;
    const height = rect.height || 120;

    this.cursor.style.left = `${hsv.s * width}px`;
    this.cursor.style.top = `${(1 - hsv.v) * height}px`;

    if (triggerCallback) {
      this.onChange(hex);
    }
  }

  hexToRgb(hex) {
    let c = parseInt(hex.slice(1), 16);
    return { r: (c >> 16) & 255, g: (c >> 8) & 255, b: c & 255 };
  }

  rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  rgbToHsv(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    let d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s, v: v };
  }

  hsvToRgb(h, s, v) {
    let r, g, b;
    let i = Math.floor(h / 60);
    let f = h / 60 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
  }
}