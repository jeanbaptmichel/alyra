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
