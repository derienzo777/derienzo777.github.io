(function() {
  var ring = document.getElementById('cursorRing');
  if (!ring) return;
  document.addEventListener('mousemove', function(e) {
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
  });
})();
