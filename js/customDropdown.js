(function () {
  function closeAllMenus(exceptWrapper) {
    document.querySelectorAll('.custom-select.open').forEach((wrapper) => {
      if (wrapper === exceptWrapper) return;
      wrapper.classList.remove('open');
      const trigger = wrapper.querySelector('.custom-select-trigger');
      const menu = wrapper.querySelector('.custom-select-menu');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      if (menu) menu.classList.remove('is-open');
    });
  }

  function bindSelect(select) {
    if (!select || select.dataset.customDropdownBound === 'true') return;

    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select';
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const menu = document.createElement('div');
    menu.className = 'custom-select-menu';
    menu.setAttribute('role', 'listbox');

    function syncDisplay() {
      const selectedOption = select.options[select.selectedIndex];
      trigger.textContent = selectedOption ? selectedOption.textContent : '';
      menu.querySelectorAll('.custom-select-option').forEach((option) => {
        option.classList.toggle('selected', option.dataset.value === select.value);
      });
    }

    Array.from(select.options).forEach((option) => {
      const menuOption = document.createElement('div');
      menuOption.className = 'custom-select-option';
      menuOption.textContent = option.textContent;
      menuOption.dataset.value = option.value;
      menuOption.setAttribute('role', 'option');
      menuOption.addEventListener('click', (event) => {
        event.stopPropagation();
        select.value = option.value;
        if (typeof select.onchange === 'function') {
          select.onchange.call(select, { target: select, currentTarget: select });
        } else {
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
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
      closeAllMenus(wrapper);

      const isOpen = wrapper.classList.toggle('open');
      menu.classList.toggle('is-open', isOpen);
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    select.addEventListener('change', syncDisplay);
    select.dataset.customDropdownBound = 'true';
    syncDisplay();
  }

  function bindAll(root = document) {
    root.querySelectorAll('select').forEach(bindSelect);
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.custom-select')) {
      closeAllMenus();
    }
  });

  window.CustomDropdown = {
    bindSelect,
    bindAll
  };
})();
