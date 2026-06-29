(function() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 120px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function(el) {
    obs.observe(el);
  });
})();
