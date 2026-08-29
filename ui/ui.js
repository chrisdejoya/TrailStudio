
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
        const menuHeight = Math.min(menu.scrollHeight, 220);
        const spaceBelow = window.innerHeight - rect.bottom - 8;
        const openAbove = spaceBelow < menuHeight && rect.top > menuHeight + 8;

        menu.style.left = 'auto';
        menu.style.right = `${window.innerWidth - rect.right}px`;
        menu.style.width = `${rect.width}px`;
        menu.style.top = openAbove
          ? `${rect.top - menuHeight - 4}px`
          : `${rect.bottom + 4}px`;
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

      trigger.addEventListener('click', () => {
        document.querySelectorAll('.custom-select.open').forEach(openWrapper => {
          openWrapper.classList.remove('open');
          const openTrigger = openWrapper.querySelector('.custom-select-trigger');
          openTrigger.setAttribute('aria-expanded', 'false');
          document.querySelector(`.custom-select-menu[data-owner="${openWrapper.dataset.owner}"]`).classList.remove('is-open');
        });
        const isOpen = wrapper.classList.toggle('open');
        if (isOpen) {
          positionMenu();
          menu.classList.add('is-open');
        } else {
          menu.classList.remove('is-open');
        }
        trigger.setAttribute('aria-expanded', String(isOpen));
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
      control.addEventListener('input', () => reportInspectorChange(control));
      control.addEventListener('change', () => reportInspectorChange(control));
    });

    function switchMode(groupId) {
      const activeGroup = document.querySelector('.inspector-group.active');
      const targetGroup = document.getElementById(groupId);

      if (activeGroup === targetGroup) return;

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

    /* OBS-Compatible Color Picker Handler */
    document.querySelectorAll('.color-swatch-wrapper input[type="color"]').forEach(input => {
      input.addEventListener('input', (e) => {
        const display = e.target.nextElementSibling;
        if (display) display.style.backgroundColor = e.target.value;
      });
    });

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
  
