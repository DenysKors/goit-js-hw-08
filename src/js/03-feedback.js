import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form')
const inputRef = document.querySelector('input')
const textAreaRef = document.querySelector('textarea')

formRef.addEventListener('submit', onFormSubit);
formRef.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('load', onWndwLoad);

const userLocalData = {
    
};

function onWndwLoad() { 
    if (localStorage.getItem('feedback-form-state') !== null) { 
        const userSavedData = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (userSavedData.email) {
            inputRef.value = userSavedData.email;
            }
        if (userSavedData.message) {
            textAreaRef.value = userSavedData.message;
        }
    }
}

function onFormInput(event) {
    if (event.target.name === 'email') {
        userLocalData.email = event.target.value;
    }
    if (event.target.name === 'message') {
        userLocalData.message = event.target.value;
    }
 localStorage.setItem('feedback-form-state', JSON.stringify(userLocalData));
}

function onFormSubit(event) { 
    event.preventDefault();
    if (event.currentTarget.email.value === '' || event.currentTarget.message.value === '') {
        return alert('Пожалуйста заполните поля!')
    }
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
    alert('Форма успешно отправлена!')
}