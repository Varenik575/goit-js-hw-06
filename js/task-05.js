const inputEl = document.querySelector('input#name-input');
console.log(inputEl);

const outputEl = document.querySelector('span#name-output');
console.log(outputEl);

inputEl.addEventListener('input', onInput);

function onInput() {
    outputEl.textContent = inputEl.value;
    if (inputEl.value === "") { outputEl.textContent = "Anonymous" };
}