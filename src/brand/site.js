document.querySelectorAll('.pillar-tabs').forEach(function (tabs) {
  var grid = document.getElementById(tabs.dataset.controls);
  var empty = grid ? grid.parentElement.querySelector('.blog-empty') : null;
  if (!grid) return;

  tabs.addEventListener('click', function (e) {
    var btn = e.target.closest('.pillar-tab');
    if (!btn) return;

    tabs.querySelectorAll('.pillar-tab').forEach(function (b) {
      b.classList.toggle('active', b === btn);
    });

    var pillar = btn.dataset.pillar;
    var visibleCount = 0;
    grid.querySelectorAll('.blog-card').forEach(function (card) {
      var show = pillar === 'all' || card.dataset.pillar === pillar;
      card.hidden = !show;
      if (show) visibleCount++;
    });

    if (empty) empty.classList.toggle('visible', visibleCount === 0);
  });
});

(function () {
  var toggle = document.getElementById('mobileMenuToggle');
  var menu = document.getElementById('mobileMenu');
  var close = document.getElementById('mobileMenuClose');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
})();
