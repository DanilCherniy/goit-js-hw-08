// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text');

inputRef.addEventListener('input', () => {
  outputRef.style.fontSize = `${Number(inputRef.value) * 2}%`;
  console.log(
    'inputRef.value = ',
    inputRef.value,
    '   font-size:',
    outputRef.style.fontSize,
  );
});
