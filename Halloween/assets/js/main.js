/* === SHOW MENU === */
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navMenu = document.querySelector('#nav-menu');

// Show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* === REMOVE MENU MOBILE === */
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/* === HOME SWIPER === */
var swiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* === CHANGE BACKGROUND HEADER === */
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
});

/* === NEW SWIPER === */
var newSwiper = new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: true,
});

/* === SCROLL SECTIONS ACTIVE LINK === */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add('active-link');
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove('active-link');
    }
  });
});

/* === SHOW SCROLL UP === */
window.addEventListener('scroll', function () {
  const scrollup = document.getElementById('scroll-up');
  if (this.scrollY >= 460) scrollup.classList.add('show-scroll');
  else scrollup.classList.remove('show-scroll');
});

/* === SCROLL REVEAL ANIMATION === */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal('.home-swiper, .new-swiper, .newsletter__container');
sr.reveal('.category__data, .trick__content, .footer__content', {
  interval: 100,
});
sr.reveal('.about__data, .discount__img', { origin: 'left' });
sr.reveal('.about__img, .discount__data', { origin: 'right' });
