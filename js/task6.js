// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

inputRef.placeholder = `Введи ${inputRef.dataset.length} символов`;

inputRef.addEventListener('blur', () => {
  if (inputRef.value.length > Number(inputRef.dataset.length)) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else if (inputRef.value.length > 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else inputRef.removeAttribute('class');
  console.log(inputRef);
});
