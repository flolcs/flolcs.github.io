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
