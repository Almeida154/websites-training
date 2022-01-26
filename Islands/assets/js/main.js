/* === Show Menu === */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

/* === Popup === */
const btnOpenVideo = document.querySelectorAll('.island__video-content');
const islandPopup = document.getElementById('popup');
const btnCloseVideo = document.getElementById('popup-close');

btnOpenVideo.forEach((b) =>
  b.addEventListener('click', function () {
    islandPopup.classList.add('show-popup');
  })
);

btnCloseVideo.addEventListener('click', () => {
  islandPopup.classList.remove('show-popup');
});

/* === Swiper === */
let galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  loop: true,
  thumbs: {
    swiper: galleryThumbs,
  },
});

/* === GSAP === */
const controlImg = document.querySelectorAll('.controls__img');

function scrollAnimation() {
  gsap.from('.island__subtitle', {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  gsap.from('.island__title', {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    y: -20,
  });
  gsap.from('.island__description', {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from('.island__button', {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: -20,
  });
  gsap.from('.island__video-content', {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });

  islandsPopup.classList.remove('show-popup');
}

controlImg.forEach((c) => c.addEventListener('click', scrollAnimation));
