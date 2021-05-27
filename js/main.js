"use strict";

const openBtn = document.querySelector(".hamburger__icon--open");
const closeBtn = document.querySelector(".hamburger__icon--close");
const menu = document.querySelector(".mobile-menu");
const preloaderEl = document.querySelector(".preloader");

const openMenu = () => {
  menu.classList.add("active");
  openBtn.classList.add("hide");
  closeBtn.classList.add("active");
};

const closeMenu = () => {
  menu.classList.remove("active");
  openBtn.classList.remove("hide");
  closeBtn.classList.remove("active");
};

const closeMenuOnResize = () => {
  if (window.innerWidth >= 850) {
    menu.classList.remove("active");

    closeBtn.classList.add("hide");
    closeBtn.classList.remove("active");

    openBtn.classList.remove("hide");
    openBtn.classList.add("active");
  }
};

const hidePreloader = () => preloaderEl.classList.add("hide-preloader");

window.addEventListener("load", hidePreloader);
openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
window.addEventListener("resize", closeMenuOnResize);
