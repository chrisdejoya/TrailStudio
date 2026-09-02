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

    // Convert to viewport percentages
    const bracketPctW = bracketSize / window.innerWidth * 100;
    const bracketPctH = bracketSize / window.innerHeight * 100;
    const crossPctW = crossSize / window.innerWidth * 100;
    const crossPctH = crossSize / window.innerHeight * 100;

    return `
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
        <!-- Corner brackets -->
        <g class="grid-bracket">
          <!-- Top-left -->
          <path d="M 5 5 H ${5 + bracketPctW} M 5 5 V ${5 + bracketPctH}" />
          <!-- Top-right -->
          <path d="M 95 5 H ${95 - bracketPctW} M 95 5 V ${5 + bracketPctH}" />
          <!-- Bottom-left -->
          <path d="M 5 95 H ${5 + bracketPctW} M 5 95 V ${95 - bracketPctH}" />
          <!-- Bottom-right -->
          <path d="M 95 95 H ${95 - bracketPctW} M 95 95 V ${95 - bracketPctH}" />
        </g>
        <!-- Center cross -->
        <g class="grid-cross">
          <line x1="50" y1="${50 - crossPctH / 2}" x2="50" y2="${50 + crossPctH / 2}" />
          <line x1="${50 - crossPctW / 2}" y1="50" x2="${50 + crossPctW / 2}" y2="50" />
        </g>
        <!-- Rule of thirds -->
        <g class="grid-thirds">
          <line x1="33.333" y1="0" x2="33.333" y2="100" />
          <line x1="66.666" y1="0" x2="66.666" y2="100" />
          <line x1="0" y1="33.333" x2="100" y2="33.333" />
          <line x1="0" y1="66.666" x2="100" y2="66.666" />
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