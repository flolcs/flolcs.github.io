// NAV
const btnOpenMenu = document.querySelector(".ri-menu-line");
const btnCloseMenu = document.querySelector(".ri-close-line");
const sousMenu = document.querySelector("ul");

btnOpenMenu.addEventListener("click", () => {
  sousMenu.style.display = "flex";
  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "block";
  sousMenu.classList.remove("close-menu");
});

btnCloseMenu.addEventListener("click", () => {
  sousMenu.classList.add("close-menu");
  btnOpenMenu.style.display = "block";
  btnCloseMenu.style.display = "none";
});

// MUSIC
const music = document.querySelector(".icon-music");
const mySong = document.querySelector("#mySong");

music.addEventListener("click", () => {
  if (mySong.paused) {
    mySong.play();
    music.classList.remove("music-desactive");
    music.classList.add("music-active");
  } else {
    mySong.pause();
    music.classList.remove("music-active");
    music.classList.add("music-desactive");
  }
});

// TYPED JS
const typedh2 = new Typed("h2", {
  strings: ["Développeur web", "Développeur front-end"],
  typeSpeed: 40,
  backSpeed: 40,
  startDelay: 500,
  smartBackspace: true,
});

// LOCOMOTIVE SCROLL
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// SWIPER JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    425: {
      slidesPerView: 1.8,
    },
    500: {
      slidesPerView: 2.1,
    },
    600: {
      slidesPerView: 2.4,
    },
    768: {
      slidesPerView: 2.8,
    },
    900: {
      slidesPerView: 3.3,
    },
    1000: {
      slidesPerView: 3.7,
    },
    1000: {
      slidesPerView: 3.4,
    },
    1500: {
      slidesPerView: 3.8,
    },
    2000: {
      slidesPerView: 4.2,
    },
    2500: {
      slidesPerView: 4.6,
    },
    3000: {
      slidesPerView: 5.2,
    },
  },
});
