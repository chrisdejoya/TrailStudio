
    function reportInspectorChange(control, value = control.value) {
      if (window.parent === window) return;

      const payload = { type: 'inspector-control', value };
      if (control.id === 'modeSelector') {
        payload.control = 'mode';
      } else {
        const panel = control.closest('#group-lighting .panel');
        if (panel) {
          payload.control = 'light';
          payload.lightIndex = Array.from(document.querySelectorAll('#group-lighting .panel')).indexOf(panel);
          payload.field = control.dataset.slider || control.closest('.row, .row-stacked, .slider-row')?.querySelector('span')?.textContent.trim() || '';
        } else if (control.dataset.slider) {
          payload.control = control.dataset.slider;
        } else {
          payload.control = control.id || '';
        }
      }
      window.parent.postMessage(payload, '*');
    }

    function loadScene() {
      window.parent.postMessage({ type: 'inspector-action', action: 'load-scene' }, '*');
    }

    function saveScene() {
      window.parent.postMessage({ type: 'inspector-action', action: 'save-scene' }, '*');
    }

    function resetScene() {
      window.parent.postMessage({ type: 'inspector-action', action: 'reset-scene' }, '*');
    }

    function enhanceSelect(select) {
      const wrapper = document.createElement('div');
      wrapper.className = 'custom-select';
      const ownerId = `custom-select-${document.querySelectorAll('.custom-select').length}`;
      wrapper.dataset.owner = ownerId;
      select.parentNode.insertBefore(wrapper, select);
      wrapper.appendChild(select);

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'custom-select-trigger';
      trigger.dataset.owner = ownerId;
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');

      const menu = document.createElement('div');
      menu.className = 'custom-select-menu';
      menu.dataset.owner = ownerId;
      menu.setAttribute('role', 'listbox');

      const positionMenu = () => {
        const rect = trigger.getBoundingClientRect();
        const shellRect = document.querySelector('.inspector-shell')?.getBoundingClientRect();
        const menuHeight = Math.min(menu.scrollHeight, 220);
        const spaceBelow = window.innerHeight - rect.bottom - 8;
        const openAbove = spaceBelow < menuHeight && rect.top > menuHeight + 8;

        const shellLeft = shellRect ? shellRect.left + 4 : 8;
        const shellRight = shellRect ? shellRect.right - 4 : window.innerWidth - 8;
        const shellWidth = Math.max(0, shellRight - shellLeft);
        const menuWidth = Math.min(rect.width, shellWidth);
        const left = Math.min(Math.max(shellLeft, rect.left), Math.max(shellLeft, shellRight - menuWidth));

        menu.style.left = `${left}px`;
        menu.style.right = 'auto';
        menu.style.width = `${menuWidth}px`;

        const topPosition = openAbove ? rect.top - menuHeight - 4 : rect.bottom + 4;
        menu.style.top = `${Math.min(Math.max(8, topPosition), window.innerHeight - menuHeight - 8)}px`;
      };

      const syncDisplay = () => {
        const selectedOption = select.options[select.selectedIndex];
        trigger.textContent = selectedOption ? selectedOption.textContent : '';
        menu.querySelectorAll('.custom-select-option').forEach(option => {
          option.classList.toggle('selected', option.dataset.value === select.value);
        });
      };

      Array.from(select.options).forEach(option => {
        const menuOption = document.createElement('div');
        menuOption.className = 'custom-select-option';
        menuOption.textContent = option.textContent;
        menuOption.dataset.value = option.value;
        menuOption.setAttribute('role', 'option');
        menuOption.addEventListener('click', () => {
          select.value = option.value;
          if (typeof select.onchange === 'function') {
            select.onchange.call(select, { target: select, currentTarget: select });
          } else {
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
          reportInspectorChange(select, option.value);
          syncDisplay();
          wrapper.classList.remove('open');
          menu.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        });
        menu.appendChild(menuOption);
      });

      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        document.querySelectorAll('.custom-select.open').forEach(openWrapper => {
          if (openWrapper === wrapper) return;
          openWrapper.classList.remove('open');
          const openTrigger = openWrapper.querySelector('.custom-select-trigger');
          openTrigger.setAttribute('aria-expanded', 'false');
          document.querySelector(`.custom-select-menu[data-owner="${openWrapper.dataset.owner}"]`).classList.remove('is-open');
        });

        if (wrapper.classList.contains('open')) {
          wrapper.classList.remove('open');
          menu.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          return;
        }

        wrapper.classList.add('open');
        positionMenu();
        menu.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      });
      select.addEventListener('change', syncDisplay);
      wrapper.append(trigger);
      document.body.appendChild(menu);
      syncDisplay();
    }

    document.querySelectorAll('select').forEach(enhanceSelect);
    document.addEventListener('click', (event) => {
      document.querySelectorAll('.custom-select.open').forEach(wrapper => {
        if (!wrapper.contains(event.target)) {
          wrapper.classList.remove('open');
          const trigger = wrapper.querySelector('.custom-select-trigger');
          const menu = document.querySelector(`.custom-select-menu[data-owner="${trigger.dataset.owner}"]`);
          trigger.setAttribute('aria-expanded', 'false');
          if (menu) menu.classList.remove('is-open');
        }
      });
    });

    document.querySelectorAll('input, select').forEach(control => {
      const isUiScaleControl = control.id === 'ui-scale-slider' || control.dataset.slider === 'ui-scale-slider';
      if (isUiScaleControl) {
        control.addEventListener('change', () => reportInspectorChange(control));
        return;
      }
      control.addEventListener('input', () => reportInspectorChange(control));
      control.addEventListener('change', () => reportInspectorChange(control));
    });

    const uiScaleSlider = document.getElementById('ui-scale-slider');
    const uiScaleText = document.querySelector('.drag-input[data-slider="ui-scale-slider"]');

    function syncUiScale(value, shouldReport = false) {
      const normalized = Number(value);
      if (!Number.isFinite(normalized)) return;
      const clamped = Math.min(1.5, Math.max(0.75, normalized));
      document.documentElement.style.setProperty('--ui-scale', clamped.toFixed(2));
      if (uiScaleSlider) uiScaleSlider.value = clamped.toFixed(2);
      if (uiScaleText && document.activeElement !== uiScaleText) uiScaleText.value = clamped.toFixed(2);
      if (shouldReport) {
        reportInspectorChange(uiScaleSlider || uiScaleText, clamped.toFixed(2));
      }
    }

    if (uiScaleSlider) {
      uiScaleSlider.addEventListener('input', (event) => {
        const numericValue = parseFloat(event.target.value);
        if (!Number.isFinite(numericValue)) return;
        syncUiScale(event.target.value, false);
      });
      uiScaleSlider.addEventListener('change', (event) => syncUiScale(event.target.value, true));
    }

    if (uiScaleText) {
      uiScaleText.addEventListener('change', (event) => syncUiScale(event.target.value, true));
    }

    syncUiScale(uiScaleSlider ? uiScaleSlider.value : 1, false);

    function switchMode(groupId) {
      const activeGroup = document.querySelector('.inspector-group.active');
      const targetGroup = document.getElementById(groupId);
      const inspectorScroll = document.getElementById('inspectorScroll');

      if (activeGroup === targetGroup) {
        if (inspectorScroll) inspectorScroll.scrollTop = 0;
        return;
      }

      if (inspectorScroll) inspectorScroll.scrollTop = 0;

      if (activeGroup) {
        activeGroup.classList.remove('is-visible');
        setTimeout(() => {
          activeGroup.classList.remove('active');
          if (targetGroup) {
            targetGroup.classList.add('active');
            requestAnimationFrame(() => {
              targetGroup.classList.add('is-visible');
            });
          }
        }, 200);
      } else if (targetGroup) {
        targetGroup.classList.add('active');
        requestAnimationFrame(() => {
          targetGroup.classList.add('is-visible');
        });
      }
    }

    function togglePanel(headerElement) {
      headerElement.closest('.panel').classList.toggle('collapsed');
    }

    /* jscolor-compatible color swatches */
    function normalizeHexColor(value) {
      const raw = (value || '#ffffff').trim();
      const match = raw.match(/^#?([0-9a-fA-F]{6})$/);
      if (!match) return '#ffffff';
      return '#' + match[1].toUpperCase();
    }

    function syncSwatchDisplay(textInput, swatchButton, nextColor) {
      const color = normalizeHexColor(nextColor || textInput.value || swatchButton.dataset.color || '#ffffff');
      textInput.value = color;
      swatchButton.dataset.color = color;
      swatchButton.style.backgroundColor = color;
      swatchButton.style.boxShadow = `inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 0 1px rgba(15,23,42,0.8)`;
    }

    function setupJsColorSwatch(wrapper) {
      const nativeInput = wrapper.querySelector('input[type="color"]');
      const initialValue = normalizeHexColor(nativeInput ? nativeInput.value : '#ffffff');

      if (!nativeInput || typeof window.jscolor === 'undefined') {
        return;
      }

      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.className = 'hex-color-input';
      textInput.value = initialValue;
      textInput.maxLength = 7;
      textInput.setAttribute('aria-label', 'Hex color value');

      const swatchButton = document.createElement('button');
      swatchButton.type = 'button';
      swatchButton.className = 'color-swatch-button';
      swatchButton.setAttribute('aria-label', 'Choose color');
      swatchButton.dataset.color = initialValue;
      swatchButton.style.backgroundColor = initialValue;

      const anchor = document.createElement('div');
      anchor.style.position = 'fixed';
      anchor.style.left = '0px';
      anchor.style.top = '0px';
      anchor.style.width = '1px';
      anchor.style.height = '1px';
      anchor.style.pointerEvents = 'none';
      anchor.style.opacity = '0';
      document.body.appendChild(anchor);

      wrapper.innerHTML = '';
      wrapper.appendChild(textInput);
      wrapper.appendChild(swatchButton);

      const picker = new jscolor(anchor, {
        value: initialValue,
        valueElement: textInput,
        previewElement: swatchButton,
        format: 'hex',
        hash: true,
        uppercase: true,
        alphaChannel: false,
        mode: 'HSV',
        position: 'bottom',
        smartPosition: true,
        closeButton: true,
        closeText: 'Close',
        hideOnLeave: false,
        showOnClick: false,
        shadow: false,
        width: 176,
        height: 88,
        padding: 8,
        sliderSize: 14,
        borderWidth: 1,
        controlBorderWidth: 1,
        pointerThickness: 2,
        buttonHeight: 28,
        borderRadius: 8,
        backgroundColor: 'rgba(15, 23, 32, 0.98)',
        borderColor: 'rgba(58, 66, 80, 1)',
        controlBorderColor: 'rgba(148, 163, 184, 0.9)',
        buttonColor: 'rgba(240, 245, 249, 1)',
        pointerColor: 'rgba(255,255,255,1)',
      });

      picker.fromString(initialValue);
      syncSwatchDisplay(textInput, swatchButton, initialValue);

      swatchButton.addEventListener('pointerdown', (event) => {
        const popup = document.querySelector('.jscolor-wrap');
        if (!popup || !popup.contains(event.target)) {
          swatchButton.dataset.revertColor = swatchButton.dataset.color || initialValue;
          picker.show(event);
          requestAnimationFrame(() => {
            const wrap = document.querySelector('.jscolor-wrap');
            if (!wrap) return;
            const popupWidth = Math.min(300, window.innerWidth - 24);
            wrap.style.width = `${popupWidth}px`;
            wrap.style.position = 'fixed';
            wrap.style.left = `${Math.min(event.clientX + 12, window.innerWidth - popupWidth - 12)}px`;
            wrap.style.top = `${Math.max(12, event.clientY - 12)}px`;
            wrap.style.zIndex = '5000';
          });
        }
      });

      textInput.addEventListener('change', () => {
        const safeValue = normalizeHexColor(textInput.value);
        textInput.value = safeValue;
        picker.fromString(safeValue);
        syncSwatchDisplay(textInput, swatchButton, safeValue);
      });

      textInput.addEventListener('input', () => {
        const next = normalizeHexColor(textInput.value);
        if (next !== '#FFFFFF' && /^#?[0-9A-Fa-f]{0,6}$/.test(textInput.value || '')) {
          swatchButton.style.backgroundColor = '#' + (textInput.value.replace('#', '').toUpperCase().padEnd(6, '0'));
        }
      });

      const originalShow = picker.show.bind(picker);
      picker.show = function (event) {
        const panel = document.querySelector('.inspector-scroll') || document.body;
        const panelRect = panel.getBoundingClientRect();
        const panelWidth = Math.min(260, Math.max(220, panelRect.width - 18));
        const clickX = event ? event.clientX : panelRect.left + 28;
        const clickY = event ? event.clientY : panelRect.top + 40;
        const x = Math.min(Math.max(panelRect.left + 8, clickX - 12), window.innerWidth - panelWidth - 12);
        const y = Math.min(Math.max(8, clickY - 18), window.innerHeight - 220);

        anchor.style.position = 'fixed';
        anchor.style.left = `${clickX}px`;
        anchor.style.top = `${clickY}px`;
        anchor.style.width = '1px';
        anchor.style.height = '1px';
        picker.fixed = true;

        const result = originalShow();
        const wrap = document.querySelector('.jscolor-wrap');
        if (wrap) {
          wrap.style.position = 'fixed';
          wrap.style.width = `${panelWidth}px`;
          wrap.style.left = `${x}px`;
          wrap.style.top = `${y}px`;
          wrap.style.zIndex = '5000';
        }
        return result;
      };

      swatchButton.addEventListener('click', (event) => {
        if (event.button !== 0) return;
        const popup = document.querySelector('.jscolor-wrap');
        if (!popup || !popup.contains(event.target)) {
          picker.show(event);
        }
      });

      swatchButton.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        picker.show(event);
      });
    }

    if (typeof window.jscolor !== 'undefined') {
      document.querySelectorAll('.color-swatch-wrapper').forEach(setupJsColorSwatch);

      document.addEventListener('pointerdown', (event) => {
        const pickerWrap = event.target.closest('.jscolor-wrap');
        const swatchButton = event.target.closest('.color-swatch-button');
        const hexInput = event.target.closest('.hex-color-input');

        if (pickerWrap || swatchButton || hexInput) return;

        const activePicker = document.querySelector('.jscolor-active');
        if (!activePicker || !activePicker.jscolor) return;

        const revertColor = activePicker.dataset.revertColor || activePicker.dataset.color || '#FFFFFF';
        activePicker.jscolor.fromString(revertColor);
        activePicker.style.backgroundColor = revertColor;
        activePicker.jscolor.hide();
      });
    }

    /* Three.js Dynamic Light Controls Manager */
    function updateLightType(selectElem) {
      const body = selectElem.closest('.panel-body');
      const lightType = selectElem.value;

      const groundColor = body.querySelector('.field-ground-color');
      const rotation = body.querySelector('.field-rotation');
      const distance = body.querySelector('.field-distance');
      const decay = body.querySelector('.field-decay');
      const angle = body.querySelector('.field-angle');
      const penumbra = body.querySelector('.field-penumbra');
      const shadows = body.querySelector('.field-shadows');

      if (groundColor) groundColor.style.display = 'none';
      if (rotation) rotation.style.display = 'none';
      if (distance) distance.style.display = 'none';
      if (decay) decay.style.display = 'none';
      if (angle) angle.style.display = 'none';
      if (penumbra) penumbra.style.display = 'none';
      if (shadows) shadows.style.display = 'flex';

      switch(lightType) {
        case 'hemisphere':
          if (groundColor) groundColor.style.display = 'flex';
          if (shadows) shadows.style.display = 'none';
          break;
        case 'directional':
          if (rotation) rotation.style.display = 'flex';
          break;
        case 'point':
          if (distance) distance.style.display = 'flex';
          if (decay) decay.style.display = 'flex';
          break;
        case 'spot':
          if (rotation) rotation.style.display = 'flex';
          if (distance) distance.style.display = 'flex';
          if (decay) decay.style.display = 'flex';
          if (angle) angle.style.display = 'flex';
          if (penumbra) penumbra.style.display = 'flex';
          break;
      }
    }

    function updateSliderTrack(slider) {
      const min = parseFloat(slider.min) || 0;
      const max = parseFloat(slider.max) || 100;
      const val = parseFloat(slider.value) || 0;
      const percentage = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
      slider.style.background = `linear-gradient(to right, #8e8e8e 0%, #8e8e8e ${percentage}%, #121214 ${percentage}%, #121214 100%)`;
    }

    document.querySelectorAll('input[type="range"]').forEach(slider => {
      updateSliderTrack(slider);
      slider.addEventListener('input', (e) => {
        updateSliderTrack(e.target);
        const boundInput = document.querySelector(`input[data-slider="${e.target.id}"]`);
        if (boundInput) boundInput.value = parseFloat(e.target.value).toFixed(1);
      });
    });

    document.querySelectorAll('.reset-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentContext = icon.closest('.row-stacked, .slider-row, .row');
        if (!parentContext) return;

        const inputs = parentContext.querySelectorAll('input[type="text"], input[type="number"]');
        inputs.forEach(input => {
          input.value = "0.0";
          const sliderId = input.getAttribute('data-slider');
          if (sliderId) {
            const slider = document.getElementById(sliderId);
            if (slider) {
              slider.value = 0.0;
              updateSliderTrack(slider);
            }
          }
        });
      });
    });

    document.querySelectorAll('.drag-input').forEach(input => {
      let isDragging = false;
      let startX = 0;
      let startVal = 0;

      input.addEventListener('mousedown', (e) => {
        if (document.activeElement === input) return;
        isDragging = true;
        startX = e.clientX;
        startVal = parseFloat(input.value) || 0;
        document.body.style.cursor = 'ew-resize';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const deltaX = e.clientX - startX;
        const stepChange = Math.round(deltaX / 5) * 0.1;
        const newVal = (startVal + stepChange).toFixed(1);
        
        input.value = newVal;

        const sliderId = input.getAttribute('data-slider');
        if (sliderId) {
          const slider = document.getElementById(sliderId);
          if (slider) {
            slider.value = newVal;
            updateSliderTrack(slider);
          }
        }
      });

      window.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.style.cursor = 'default';
        }
      });
    });

    const inspectorScroll = document.getElementById('inspectorScroll');
    let scrollDragStartY = 0;
    let scrollDragStartTop = 0;
    let isScrollDragging = false;

    inspectorScroll.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('input, select, button, label, .mode-header, .panel-header, .color-swatch-wrapper, .custom-select, .custom-select-menu')) return;

      isScrollDragging = true;
      scrollDragStartY = event.clientY;
      scrollDragStartTop = inspectorScroll.scrollTop;
      inspectorScroll.classList.add('is-dragging');
      inspectorScroll.setPointerCapture(event.pointerId);
    });

    inspectorScroll.addEventListener('pointermove', (event) => {
      if (!isScrollDragging) return;

      inspectorScroll.scrollTop = scrollDragStartTop - (event.clientY - scrollDragStartY);
    });

    const stopScrollDrag = () => {
      isScrollDragging = false;
      inspectorScroll.classList.remove('is-dragging');
    };

    inspectorScroll.addEventListener('pointerup', stopScrollDrag);
    inspectorScroll.addEventListener('pointercancel', stopScrollDrag);
  
