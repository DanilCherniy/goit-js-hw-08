// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//    Получится 'В списке 3 категории.'
const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и
//    количество элементов в категории(всех вложенных в него элементов li).
//    Например для первой категории получится:
//    Категория: Животные
//    Количество элементов: 4

// Old school
// for (const category of categoriesRef) {
//   console.log(
//     `${category.querySelector('h2').textContent} - ${category.querySelectorAll('li').length}.`,
//   );
// }

const categoriesTitleAndCount = Array.from(categoriesRef)
  .map(
    category =>
      `Категория: ${
        category.querySelector('h2').textContent
      }\nКоличество элементов:${category.querySelectorAll('li').length}`,
  )
  .join('\n\n');

console.log(categoriesTitleAndCount);
