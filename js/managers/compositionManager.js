/**
 * Composition Grid Overlay
 * Displays corner brackets, center cross, and rule-of-thirds lines during canvas drag/scroll
 */
export class CompositionGrid {
  constructor() {
    this.container = null;
    this.visible = false;
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'composition-grid';
    document.body.appendChild(this.container);
  }

  buildSVG() {
    const rootStyle = getComputedStyle(document.documentElement);
    const bracketSize = parseFloat(rootStyle.getPropertyValue('--grid-bracket-size')) || 24;
    const crossSize = parseFloat(rootStyle.getPropertyValue('--grid-cross-size')) || 40;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const bw = bracketSize;
    const bh = bracketSize;
    const cw = crossSize;
    const ch = crossSize;

    return `
      <svg viewBox="0 0 ${vw} ${vh}" preserveAspectRatio="none" width="100%" height="100%">
        <!-- Corner brackets -->
        <g class="grid-bracket">
          <!-- Top-left -->
          <path d="M 0 0 H ${bw} M 0 0 V ${bh}" />
          <!-- Top-right -->
          <path d="M ${vw} 0 H ${vw - bw} M ${vw} 0 V ${bh}" />
          <!-- Bottom-left -->
          <path d="M 0 ${vh} H ${bw} M 0 ${vh} V ${vh - bh}" />
          <!-- Bottom-right -->
          <path d="M ${vw} ${vh} H ${vw - bw} M ${vw} ${vh} V ${vh - bh}" />
        </g>
        <!-- Edge center T-markers -->
        <g class="grid-bracket">
          <!-- Top center -->
          <path d="M ${vw / 2 - bw / 2} 0 H ${vw / 2 + bw / 2} M ${vw / 2} 0 V ${bh}" />
          <!-- Bottom center -->
          <path d="M ${vw / 2 - bw / 2} ${vh} H ${vw / 2 + bw / 2} M ${vw / 2} ${vh} V ${vh - bh}" />
          <!-- Left center -->
          <path d="M 0 ${vh / 2 - bh / 2} V ${vh / 2 + bh / 2} M 0 ${vh / 2} H ${bw}" />
          <!-- Right center -->
          <path d="M ${vw} ${vh / 2 - bh / 2} V ${vh / 2 + bh / 2} M ${vw} ${vh / 2} H ${vw - bw}" />
        </g>
        <!-- Center cross -->
        <g class="grid-cross">
          <line x1="${vw / 2}" y1="${vh / 2 - ch / 2}" x2="${vw / 2}" y2="${vh / 2 + ch / 2}" />
          <line x1="${vw / 2 - cw / 2}" y1="${vh / 2}" x2="${vw / 2 + cw / 2}" y2="${vh / 2}" />
        </g>
        <!-- Rule of thirds -->
        <g class="grid-thirds">
          <line x1="${vw / 3}" y1="0" x2="${vw / 3}" y2="${vh}" />
          <line x1="${2 * vw / 3}" y1="0" x2="${2 * vw / 3}" y2="${vh}" />
          <line x1="0" y1="${vh / 3}" x2="${vw}" y2="${vh / 3}" />
          <line x1="0" y1="${2 * vh / 3}" x2="${vw}" y2="${2 * vh / 3}" />
        </g>
      </svg>
    `;
  }

  show() {
    if (!this.visible) {
      this.visible = true;
      this.container.innerHTML = this.buildSVG();
      requestAnimationFrame(() => this.container.classList.add('visible'));
    }
  }

  hide() {
    if (this.visible) {
      this.visible = false;
      this.container.classList.remove('visible');
    }
  }

  onResize() {
    if (this.visible) {
      this.container.innerHTML = this.buildSVG();
    }
  }
}