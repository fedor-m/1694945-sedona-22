const buttonNav = document.querySelector('.main-navigation__toggle');
const nav = document.querySelector('.main-navigation');
const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
nav.classList.remove('main-navigation--opened');
buttonNav.classList.remove('main-navigation__toggle--no-js');
buttonNav.addEventListener('click', function () {
  nav.classList.toggle('main-navigation--opened');
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = this.checkValidity();
  valid ? this.classList.remove("form--invalid") : this.classList.add("form--invalid");
  valid ? modal.classList = "modal modal--success" : modal.classList = "modal modal--error";
  modalClose.addEventListener("click", function () {
    modal.classList = "modal";
  })
});
