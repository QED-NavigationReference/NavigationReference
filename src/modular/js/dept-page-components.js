/*
  Department of Education - Main Menu behavior
  Supports:
  - animated mobile menu toggle
  - mobile submenu expand/collapse
  - desktop hover/focus open behavior
  - outside click and Escape close
*/
(function () {
  var nav = document.getElementById('doe-main-nav');
  var toggle = document.querySelector('.doe-main-nav-toggle');
  if (!nav) return;

  var submenuToggles = Array.prototype.slice.call(
    nav.querySelectorAll('.doe-main-nav__submenu-toggle')
  );

  function isMobile() {
    return window.matchMedia('(max-width: 920px)').matches;
  }

  function setMenuOpen(open) {
    if (!toggle) return;
    nav.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function setSubmenuOpen(button, open) {
    var submenuId = button.getAttribute('aria-controls');
    var submenu = submenuId ? document.getElementById(submenuId) : null;
    if (!submenu) return;

    button.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    submenu.classList.toggle('is-open', open);
    submenu.hidden = !open;
  }

  function closeSubmenus(exceptButton) {
    submenuToggles.forEach(function (button) {
      setSubmenuOpen(button, Boolean(exceptButton) && button === exceptButton);
    });
  }

  function closeAll() {
    closeSubmenus(null);
    if (isMobile()) {
      setMenuOpen(false);
    }
  }

  submenuToggles.forEach(function (button) {
    var menuItem = button.closest('.doe-menu-item');
    setSubmenuOpen(button, false);

    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var isOpen = button.getAttribute('aria-expanded') === 'true';
      closeSubmenus(isOpen ? null : button);
    });

    if (!menuItem) return;

    menuItem.addEventListener('mouseenter', function () {
      if (!isMobile()) {
        closeSubmenus(button);
      }
    });

    menuItem.addEventListener('mouseleave', function () {
      if (!isMobile()) {
        setSubmenuOpen(button, false);
      }
    });

    menuItem.addEventListener('focusin', function () {
      if (!isMobile()) {
        closeSubmenus(button);
      }
    });

    menuItem.addEventListener('focusout', function () {
      if (!isMobile()) {
        window.setTimeout(function () {
          if (!menuItem.contains(document.activeElement)) {
            setSubmenuOpen(button, false);
          }
        }, 0);
      }
    });
  });

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
      if (isOpen) {
        closeSubmenus(null);
      }
    });
  }

  Array.prototype.slice.call(nav.querySelectorAll('a')).forEach(function (link) {
    link.addEventListener('click', function () {
      if (isMobile()) {
        closeAll();
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && (!toggle || !toggle.contains(event.target))) {
      closeAll();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAll();
      if (toggle) {
        toggle.focus();
      }
    }
  });
})();
