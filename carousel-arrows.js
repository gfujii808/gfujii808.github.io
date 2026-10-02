document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.mk-carousel-wrap').forEach(function (wrap) {
    var carousel = wrap.querySelector('.mk-carousel');
    if (!carousel) return;

    var prev = document.createElement('button');
    prev.className = 'mk-arrow prev';
    prev.setAttribute('aria-label', 'Previous photo');
    prev.innerHTML = '&#8249;';

    var next = document.createElement('button');
    next.className = 'mk-arrow next';
    next.setAttribute('aria-label', 'Next photo');
    next.innerHTML = '&#8250;';

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
