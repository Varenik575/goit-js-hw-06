function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const numberInput = document.querySelector('input')
const createButton = document.querySelector('button.data-create')

console.log(createButton);