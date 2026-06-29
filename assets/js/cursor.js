(function() {
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');
  if (!cursor || !ring) return;
  var mx = 0, my = 0, rx = 0, ry = 0, ringReady = false;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    if (!ringReady) { rx = mx; ry = my; ringReady = true; }
  });
  (function animRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
  });
})();
