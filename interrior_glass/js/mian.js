const page = document.body;
const burger = document.querySelector('.burger');
const active = document.querySelector('.icon-menu');
const menu = document.getElementById('list');
const navbar = document.getElementById('navbar');
// функция показа меню
const showMenu = function (el) {
  el.style.display != 'flex'
    ? (el.style.display = 'flex')
    : (el.style.display = 'none');
};
const toggleMobileNav = function () {
  // меняем иконки при клике
  active.classList.toggle('icon-cancel');
  active.classList.toggle('icon-menu');
  page.classList.toggle('bg_gray');
  // выстраиваем навигацию в колонку и выравниваем по праваму краю
  navbar.style.flexDirection = 'column-reverse';
  menu.style.flexDirection = 'column';
  navbar.style.alignItems = 'flex-end';
  menu.style.alignItems = 'flex-end';
  // показываем меню
  showMenu(menu);
};
// клик по кнопке бургера
burger.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
});
// клик по окну за приделами навигации, если на boby нет класса
window.addEventListener('click', function () {
  if (page.classList.contains('bg_gray')) toggleMobileNav();
});
// останавливаем клик внутри открытой навигации (что б навигация была кликабельна)
menu.addEventListener('click', function (event) {
  event.stopPropagation();
});

// кнопка вверх при скролинге
const html = document.documentElement;
const arrow = document.querySelector('.scrollTop');
setInterval(function () {
  html.scrollTop > 700 ? (arrow.style.opacity = 1) : (arrow.style.opacity = 0);
  arrow.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
}, 100);
