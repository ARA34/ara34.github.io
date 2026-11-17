// Dark mode. Loaded in <head> so the saved theme is applied before the page
// paints (no flash of the light theme). The choice is kept in localStorage, so
// it carries across pages and return visits.
(function () {
  var root = document.documentElement;

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    // There is one toggle in the sidebar legend and one in the phone-only line.
    var toggles = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].onclick = function (e) {
        e.preventDefault();
        var dark = root.getAttribute('data-theme') !== 'dark';
        if (dark) root.setAttribute('data-theme', 'dark');
        else root.removeAttribute('data-theme');
        try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      };
    }
  });
})();
