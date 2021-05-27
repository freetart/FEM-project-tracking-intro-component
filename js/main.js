"use strict";

const openBtn = document.querySelector(".hamburger__icon--open");
const closeBtn = document.querySelector(".hamburger__icon--close");
const menu = document.querySelector(".mobile-menu");

function openMenu() {
  menu.classList.add("active");
  openBtn.classList.add("hide");
  closeBtn.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
  openBtn.classList.remove("hide");
  closeBtn.classList.remove("active");
}

function closeMenuOnResize() {
  if (window.innerWidth >= 850) {
    menu.classList.remove("active");

    closeBtn.classList.add("hide");
    closeBtn.classList.remove("active");

    openBtn.classList.remove("hide");
    openBtn.classList.add("active");
  }
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
window.addEventListener("resize", closeMenuOnResize);
