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
