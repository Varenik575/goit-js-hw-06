const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map((ingredient) => {
  const ItemEl = document.createElement('li');
  ItemEl.textContent = ingredient;
  ItemEl.classList.add('item');
  return ItemEl;
});

const ulEl = document.querySelector('ul#ingredients');
ulEl.append(...ingredientsEl);