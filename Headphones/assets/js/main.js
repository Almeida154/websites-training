/* === Toggle Menu === */
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav__link');

function toggleMenu() {
  navMenu.classList.toggle('show-menu');
}

navToggle.addEventListener('click', toggleMenu);
navClose.addEventListener('click', toggleMenu);

navLinks.forEach((link) => link.addEventListener('click', toggleMenu));

/* === Nav Background on Scroll === */
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');

  if (this.scrollY > 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
});
