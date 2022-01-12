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

/* === NEW SWIPER === */

/* === SCROLL SECTIONS ACTIVE LINK === */

/* === SHOW SCROLL UP === */

/* === SCROLL REVEAL ANIMATION === */
