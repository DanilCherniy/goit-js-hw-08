// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = images
  .map(({ url, alt }) => {
    return `<li class='gallery-list-item'><img src='${url}' alt='${alt}' class='gallery-list-img'></li>`;

    // Без шаблонных строк:

    // const imgRef = document.createElement('img');
    // imgRef.setAttribute('src', url);
    // imgRef.alt = alt;
    // imgRef.classList.add('gallery-list-img');

    // const listItemRef = document.createElement('li');
    // listItemRef.appendChild(imgRef);
    // listItemRef.classList.add('gallery-list-item');

    // return listItemRef.outerHTML;
  })
  .join('');

console.log(gallery);

const galleryListRef = document.querySelector('#gallery');
galleryListRef.classList.add('gallery-list');

galleryListRef.insertAdjacentHTML('afterbegin', gallery);
