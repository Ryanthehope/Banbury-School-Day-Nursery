const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
}); 

document.getElementById('year').textContent = new Date().getFullYear();

const revealImages = document.querySelectorAll('img');

revealImages.forEach((img) => {
  img.classList.add('image-reveal');

  // Helps performance
  img.setAttribute('loading', 'lazy');
  img.setAttribute('decoding', 'async');
});

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('image-reveal--visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealImages.forEach((img) => {
  imageObserver.observe(img);
});