/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) =>
  link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
);

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((skillHeader) =>
  skillHeader.addEventListener("click", toggleSkills)
);

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabsContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContent.forEach((tabContent) =>
      tabContent.classList.remove("qualification__active")
    );
    target.classList.add("qualification__active");

    tabs.forEach((tab) => tab.classList.remove("qualification__active"));
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const btnsOpenModal = document.querySelectorAll(".services__button");
const btnsCloseModal = document.querySelectorAll(".services__modal-close");
const modals = document.querySelectorAll(".services__modal");

btnsOpenModal.forEach((openModal, i) => {
  openModal.addEventListener("click", () => {
    modals[i].classList.add("active-modal");
  });
});

btnsCloseModal.forEach((closeModal, i) => {
  closeModal.addEventListener("click", () => {
    modals[i].classList.remove("active-modal");
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
