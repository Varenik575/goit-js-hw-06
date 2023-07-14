function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector('body');
const colorName = document.querySelector('span.color');
const changeColorButton = document.querySelector('button.change-color');

changeColorButton.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const currentColor = getRandomHexColor();
  background.style.backgroundColor = currentColor;
  colorName.textContent = `${currentColor}`
}


