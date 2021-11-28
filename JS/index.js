const emailErrorIcon = document.querySelector('.email-error-icon');
const emailErrorText = document.querySelector('.email-error-text');
const form = document.querySelector('.coming-soon-form');
const emailBox = document.querySelector('.email-box');

const setError = () => {
    emailBox.classList.add('error-email-box');
    emailErrorIcon.classList.remove('hidden');
    emailErrorText.classList.remove('hidden');
}
const setSucces = () => {
    emailBox.classList.remove('.error-email-box');
    emailErrorIcon.classList.add('hidden');
    emailErrorText.classList.add('hidden');
}


const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const checkEmail = () => {
    const emailValue = emailBox.value.trim();
    if (emailValue === '' || !validateEmail(emailValue)) {
        setError();
    } else if (validateEmail(emailValue)) {
        setSuccess();
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
});

