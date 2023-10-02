const openBtn = document.querySelector(".btn-open");
const modalWindow = document.querySelector(".modal");
const body = document.querySelector(".body");

const openModals = () => {
  modalWindow.classList.add("modal--open");
  body.classList.add("body--fixed");
};

const closeModals = () => {
  modalWindow.classList.remove("modal--open");
  body.classList.remove("body--fixed");
};

openBtn.addEventListener("click", openModals);

modalWindow.addEventListener("click", (event) => {
  if (
    (event.target && event.target.classList.contains("modal")) ||
    (event.target && event.target.classList.contains("modal__close-btn"))
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
