let buttonNav = document.querySelector('.main-navigation__toggle');
let nav = document.querySelector('.main-navigation');
buttonNav.addEventListener('click', function () {
  nav.classList.toggle('main-navigation--opened');
});
