// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('input');
const divBoxesRef = document.querySelector('#boxes');
let inputValue = 0;

const buttonsRef = document.querySelectorAll('#controls button');
let btnRender;
let btnDestroy;
buttonsRef.forEach(el =>
  el.dataset.action === 'render' ? (btnRender = el) : (btnDestroy = el),
);

inputRef.addEventListener('blur', () => (inputValue = Number(inputRef.value)));

btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputValue;
  const divArr = [];

  for (let i = 0; i < amount; i += 1) {
    divArr[i] = document.createElement('div');
    divArr[i].style.width = `${i * 10 + 30}px`;
    divArr[i].style.height = `${i * 10 + 30}px`;
    divArr[
      i
    ].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    console.log(divArr[i]);
  }

  divBoxesRef.append(...divArr);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
  console.clear();
}

function randomColor() {
  return Math.floor(Math.random() * (256 - 0)) + 0;
}
