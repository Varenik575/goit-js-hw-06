const fontSliderEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

fontSliderEl.addEventListener('input', onSliderMovement);

function onSliderMovement(event) {
    textEl.style.fontSize =`${fontSliderEl.value}px`;
}

