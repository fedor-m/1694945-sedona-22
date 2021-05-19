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
