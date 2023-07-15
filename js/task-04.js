
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const decrementBtn = document.querySelector('button[data-action = "decrement"]');

const valueEl = document.querySelector('#value');
let counterValue = 0;


incrementBtn.addEventListener('click', onIncrementBtnClick);

decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
    counterValue++; 
    valueEl.textContent = counterValue;
};

function onDecrementBtnClick() {
    counterValue--;
    valueEl.textContent = counterValue;
}

