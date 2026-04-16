/*
  Department of Education - Main Menu behavior
  Supports:
  - click/tap open
  - hover open (desktop)
  - keyboard: Enter/Space to open, Escape to close
  - outside click closes open menus
*/
(function () {
  var nav = document.getElementById('doe-main-nav');
  var toggle = document.querySelector('.doe-main-nav-toggle');
  if (!nav) return;

  var menuItems = Array.prototype.slice.call(
    nav.querySelectorAll('.doe-menu-item--has-submenu')
  );

  function setOpen(item, open) {
    var button = item.querySelector('button');
    var submenu = item.querySelector('.doe-submenu');
    if (!button || !submenu) return;
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    submenu.hidden = !open;
  }

  function closeAll(exceptItem) {
    menuItems.forEach(function (item) {
      if (exceptItem && item === exceptItem) return;
      setOpen(item, false);
    });
  }

  menuItems.forEach(function (item) {
    var button = item.querySelector('button');
    var submenu = item.querySelector('.doe-submenu');
    if (!button || !submenu) return;

    // Ensure deterministic initial state for assistive tech.
    setOpen(item, false);

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      closeAll(item);
      setOpen(item, !isOpen);
    });

    button.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setOpen(item, false);
        button.focus();
      }
    });

    item.addEventListener('mouseenter', function () {
      closeAll(item);
      setOpen(item, true);
    });

    item.addEventListener('mouseleave', function () {
      setOpen(item, false);
    });

    item.addEventListener('focusin', function () {
      closeAll(item);
      setOpen(item, true);
    });

    item.addEventListener('focusout', function () {
      setTimeout(function () {
        if (!item.contains(document.activeElement)) {
          setOpen(item, false);
        }
      }, 0);
    });
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      closeAll();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAll();
    }
  });

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) closeAll();
    });
  }
})();
