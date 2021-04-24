let buttonNav = document.querySelector('.main-navigation__toggle');
let nav = document.querySelector('.main-navigation');
nav.classList.remove('main-navigation--opened');
buttonNav.classList.remove('main-navigation__toggle--no-js');
buttonNav.addEventListener('click', function () {
  nav.classList.toggle('main-navigation--opened');
});
