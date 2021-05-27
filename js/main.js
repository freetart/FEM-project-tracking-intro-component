"use strict";

const openBtn = document.querySelector(".hamburger__icon--open");
const closeBtn = document.querySelector(".hamburger__icon--close");
const menu = document.querySelector(".mobile-menu");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  openBtn.classList.add("hide");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  openBtn.classList.remove("hide");
  closeBtn.classList.remove("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 850) {
    menu.classList.remove("active");

    closeBtn.classList.add("hide");
    closeBtn.classList.remove("active");

    openBtn.classList.remove("hide");
    openBtn.classList.add("active");
  }
});
