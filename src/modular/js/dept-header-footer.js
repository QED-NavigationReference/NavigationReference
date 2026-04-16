(function () {
  var toggle = document.querySelector('[data-header-toggle]');
  var tools = document.querySelector('[data-header-tools]');

  if (toggle && tools) {
    toggle.addEventListener('click', function () {
      var isOpen = tools.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var yearNode = document.querySelector('[data-footer-year]');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
})();
