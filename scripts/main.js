/* main.js — shared behaviour loaded on every page */

/* ---------- 1. Header scroll shadow ---------- */
(function () {
  var header = document.getElementById('site-header');
  if (!header) return;
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ---------- 2. Active nav link ----------
   Each <a> in .site-header-nav carries data-page="home|about|books|contact".
   We check the current pathname and add class="active" to the matching link. */
(function () {
  var path = window.location.pathname;
  document.querySelectorAll('.site-header-nav a[data-page]').forEach(function (link) {
    var page = link.dataset.page;
    var active = false;
    if (page === 'home' && (path === '/' || /\/(index\.html)?$/.test(path) && !/\/(about|books|contact)/.test(path))) {
      active = true;
    } else if (page === 'about' && /\/about(\.html)?$/.test(path)) {
      active = true;
    } else if (page === 'books' && /\/books/.test(path)) {
      active = true;
    } else if (page === 'contact' && /\/contact(\.html)?$/.test(path)) {
      active = true;
    }
    if (active) link.classList.add('active');
  });
})();

/* ---------- 3. Roman numeral helper ---------- */
function romanize(n) {
  var map = [
    [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
    [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
    [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
  ];
  var out = '';
  for (var i = 0; i < map.length; i++) {
    while (n >= map[i][0]) { out += map[i][1]; n -= map[i][0]; }
  }
  return out;
}
window.romanize = romanize;
