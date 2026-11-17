// Links to other sites open in a new tab. Clicks are caught on the document
// (not on each link) because i18n.js rebuilds translated paragraphs, links
// included, when the language changes.
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || !/^https?:$/.test(a.protocol) || a.host === location.host) return;
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
