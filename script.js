// Получаем элемент header
const header = document.querySelector('.header');

// Функция для изменения класса при прокрутке
function handleScroll() {
  if (window.scrollY > 0) {
    // Если прокручено вниз, добавляем класс
    header.classList.add('scrolled');
  } else {
    // Если мы на верхней части страницы, удаляем класс
    header.classList.remove('scrolled');
  }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);


const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// Обработчик клика по бургеру
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('show');  
  
});


