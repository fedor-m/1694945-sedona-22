const buttonNav = document.querySelector('.main-navigation__toggle');
const nav = document.querySelector('.main-navigation');
nav.classList.remove('main-navigation--opened');
buttonNav.classList.remove('main-navigation__toggle--no-js');
buttonNav.addEventListener('click', function () {
  nav.classList.toggle('main-navigation--opened');
});
const existForm = document.querySelector('.form') !== null;
const existPhotos = document.querySelectorAll(".photo__likes-button").length > 0;
if (existForm) {
  const form = document.querySelector('.form');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = this.checkValidity();
    valid ? this.classList.remove("form--invalid") : this.classList.add("form--invalid");
    valid ? modal.classList = "modal modal--success" : modal.classList = "modal modal--error";
    modalClose.addEventListener("click", function () {
      modal.classList = "modal";
    })
  });
}
if (existPhotos) {
  const likeButtons = document.querySelectorAll(".photo__likes-button");
  const likes = document.querySelectorAll(".photo__likes-number");
  for (let i = 0; i < likeButtons.length; i++)
    likeButtons[i].addEventListener("click", function () {
      const number = Number(likes[i].textContent);
      if (likes[i].classList.contains("liked")) {
        likes[i].textContent = number - 1;
        likes[i].classList.remove("liked");
      }
      else {
        likes[i].textContent = number + 1;
        likes[i].classList.add("liked");
      }
    });
}
