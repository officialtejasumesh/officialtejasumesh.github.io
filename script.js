const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
