export function setupNumberInputScrubbing() {
  let potentialScrub = false;
  let scrubbing = false;
  let scrubInput = null;
  let startX = 0;
  let startValue = 0;
  let step = 1;

  document.addEventListener('mousedown', (event) => {
    if (event.target.tagName !== 'INPUT' || event.target.type !== 'number') return;

    potentialScrub = true;
    scrubInput = event.target;
    startX = event.clientX;
    startValue = parseFloat(scrubInput.value) || 0;
    step = parseFloat(scrubInput.step) || 1;
  });

  window.addEventListener('mousemove', (event) => {
    if (!potentialScrub || !scrubInput) return;

    const deltaX = event.clientX - startX;
    if (!scrubbing && Math.abs(deltaX) > 4) {
      scrubbing = true;
      scrubInput.blur();
    }

    if (!scrubbing) return;

    const multiplier = event.ctrlKey ? 0.2 : event.shiftKey ? 5 : 1;
    const sensitivity = step < 0.1 ? 0.005 : step < 1 ? 0.02 : 0.1;
    let value = startValue + deltaX * step * sensitivity * 5 * multiplier;
    const min = scrubInput.min === '' ? -Infinity : parseFloat(scrubInput.min);
    const max = scrubInput.max === '' ? Infinity : parseFloat(scrubInput.max);
    value = Math.max(min, Math.min(max, value));

    const decimals = (step.toString().split('.')[1] || '').length;
    scrubInput.value = value.toFixed(decimals > 0 ? decimals : 2);
    scrubInput.dispatchEvent(new Event('input', { bubbles: true }));
  });

  window.addEventListener('mouseup', () => {
    potentialScrub = false;
    scrubbing = false;
    scrubInput = null;
  });
}
