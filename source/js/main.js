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
  form.setAttribute("novalidate", true);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = this.checkValidity();
    valid ? (this.classList.remove("form--invalid"), sendData(form)) : (this.classList.add("form--invalid"), setInvalid(form));
    valid ? modal.classList = "modal modal--success" : modal.classList = "modal modal--error";
    modalClose.addEventListener("click", function () {
      modal.classList = "modal";
    })
    function setInvalid(f) {
      const phone = f.querySelector(".form__item--phone");
      const email = f.querySelector(".form__item--email");
      phone.querySelector(".form__input--phone").checkValidity() ? phone.classList.remove("invalid") : phone.classList.add("invalid");
      email.querySelector(".form__input--email").checkValidity() ? email.classList.remove("invalid") : email.classList.add("invalid");
      phone.querySelector(".form__input--phone").addEventListener("change", function () {
        changeStatus(this, phone);
      });
      email.querySelector(".form__input--email").addEventListener("change", function () {
        changeStatus(this, email);
      });
    }
    function changeStatus(input, parent) {
      input.checkValidity() ? parent.classList.remove("invalid") : parent.classList.add("invalid");
    }
    function sendData(f) {
      let formData = new FormData(f);
      let request = new XMLHttpRequest();
      request.open("POST", form.getAttribute("action"), true);
      request.send(formData);
    }
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
