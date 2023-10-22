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

// Modal Window / Оптимизируем повторяющиеся строки открытия и закрытия, создаем переменные

const openModals = () => {
  modalWindow.classList.add("modal--open");
  body.classList.add("body--fixed");
};

const closeModals = () => {
  modalWindow.classList.remove("modal--open");
  body.classList.remove("body--fixed");
};

// Modal Window / Оптимизированный код открытия и сбрасываем дефолтное поведение

openModalBtn.addEventListener("click", (event) => {
  openModals();
  event.preventDefault();
});

// Modal Window / Оптимизированный код закрытия если event.target = true и click на modal или modal__close-btn то закрываем модальное окно

modalWindow.addEventListener("click", (event) => {
  if (
    event.target &&
    (event.target.classList.contains("modal") ||
      event.target.classList.contains("modal__close-btn"))
  ) {
    closeModals();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.code === "Escape" &&
    modalWindow.classList.contains("modal--open")
  ) {
    closeModals();
  }
});
