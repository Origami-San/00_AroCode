// Burger Menu

const openBtn = document.querySelector(".burger-icon");
const body = document.querySelector(".body");
const nav = document.querySelector(".nav__list");

openBtn.addEventListener("click", () => {
  body.classList.toggle("body--opened-menu");
});

nav.addEventListener("click", (event) => {
  if (
    event.target &&
    event.target.classList.contains("nav__link") &&
    document.documentElement.clientWidth <= 900
  ) {
    body.classList.remove("body--opened-menu");
  }
});

// Modal Window

const openModalBtn = document.querySelector(".team__gift-btn");
const modalWindow = document.querySelector(".modal");

openModalBtn.addEventListener("click", (event) => {
  modalWindow.classList.add("modal--open");
  body.classList.add("body--fixed");
  event.preventDefault();
});

modalWindow.addEventListener("click", (event) => {
  if (
    (event.target && event.target.classList.contains("modal")) ||
    (event.target && event.target.classList.contains("modal__close-btn"))
  ) {
    modalWindow.classList.remove("modal--open");
    body.classList.remove("body--fixed");
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.code === "Escape" &&
    modalWindow.classList.contains("modal--open")
  ) {
    modalWindow.classList.remove("modal--open");
    body.classList.remove("body--fixed");
  }
});
