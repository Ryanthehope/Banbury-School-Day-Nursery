const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
}); 

document.getElementById('year').textContent = new Date().getFullYear();