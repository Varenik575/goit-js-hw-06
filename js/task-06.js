
const inputEl = document.querySelector('input#validation-input');
const requiredLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', OnInputBlur);


function OnInputBlur(event) {
    const currentLength = event.currentTarget.value.length;

    
    if (Number(currentLength) === Number(requiredLength)) {
        if (inputEl.classList.contains("invalid"))
        {
            inputEl.classList.replace("invalid", "valid");
        }

        inputEl.classList.add("valid");
    }
    else {
        if (inputEl.classList.contains("valid"))
        {
            inputEl.classList.replace("valid", "invalid");
        }

        inputEl.classList.add("invalid");
    }
    
};




