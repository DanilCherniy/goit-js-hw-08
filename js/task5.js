// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
  outputRef.textContent = inputRef.value === '' ? 'незнакомец' : inputRef.value;
  console.log(outputRef.textContent);
});
