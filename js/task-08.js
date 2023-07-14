const formEl = document.querySelector('form.login-form')
const alertMessage = "Please fill all the fields in the form!"

formEl.addEventListener('submit', OnFormSubmit);

function OnFormSubmit(event) {
    
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if ((email.value === '') || (password.value === '')) {
        alert(alertMessage);
    }
    else {
        const data = {
            email: email.value,
            password: password.value,
        }
        
        console.log(data);
        formEl.reset();
    }
    
}

