document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.mk-carousel-wrap').forEach(function (wrap) {
    var carousel = wrap.querySelector('.mk-carousel');
    if (!carousel) return;

    var arrowSVG = '<svg viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.5H28M0 7.5L8 0.5M0 7.5L8 14.5" stroke="currentColor" stroke-width="1.3" fill="none"/></svg>';

    var prev = document.createElement('button');
    prev.className = 'mk-arrow prev';
    prev.setAttribute('aria-label', 'Previous photo');
    prev.innerHTML = arrowSVG;

    var next = document.createElement('button');
    next.className = 'mk-arrow next';
    next.setAttribute('aria-label', 'Next photo');
    next.innerHTML = arrowSVG;

    prev.addEventListener('click', function () {
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    });

    wrap.appendChild(prev);
    wrap.appendChild(next);
  });
});
