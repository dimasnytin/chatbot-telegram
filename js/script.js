const burgerBtn = document.querySelector(".header__menu_open");
const wrap = document.querySelector("html");
const body = document.body;

burgerBtn.addEventListener("click", burgerBtnHandler);

function burgerBtnHandler(e) {
  e.preventDefault();
  body.classList.toggle("noscroll");
  wrap.classList.toggle("noscroll");
}
