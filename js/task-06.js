
const inputEl = document.querySelector('input#validation-input');
const requiredLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    const currentLength = event.currentTarget.value.length;
    inputEl.classList.remove("invalid", "valid");
    
    if (currentLength === Number(requiredLength)) {

       inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.add("invalid");
    }
    
};




