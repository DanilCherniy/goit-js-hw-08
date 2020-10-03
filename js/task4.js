// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const buttonsRef = document.querySelectorAll('#counter button');
let btnDecRef;
let btnIncRef;
buttonsRef.forEach(el =>
  el.dataset.action === 'decrement' ? (btnDecRef = el) : (btnIncRef = el),
);

const counterRef = document.querySelector('span');
let counterValue = counterRef.textContent;

btnDecRef.addEventListener('click', decrement);
btnIncRef.addEventListener('click', increment);

function increment() {
  !isNaN(counterValue)
    ? (counterValue = Number(counterValue) + 1)
    : counterValue;
  console.log(counterValue);
  counterRef.textContent = counterValue;
}

function decrement() {
  !isNaN(counterValue)
    ? (counterValue = Number(counterValue) - 1)
    : counterValue;
  console.log(counterValue);
  counterRef.textContent = counterValue;
}
