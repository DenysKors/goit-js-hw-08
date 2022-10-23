import throttle from 'lodash.throttle';

const refs = {
    formRef: document.querySelector('.feedback-form'),
    inputRef: document.querySelector('input'),
    textAreaRef: document.querySelector('textarea'),
}

refs.formRef.addEventListener('submit', onFormSubit);
refs.formRef.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('load', onWndwLoad);

function onWndwLoad() { 
    if (localStorage.getItem('feedback-form-state') !== null) { 
        const userSavedData = JSON.parse(localStorage.getItem('feedback-form-state'));

        refs.inputRef.value = userSavedData.email;
        refs.textAreaRef.value = userSavedData.message;
    }
}

function onFormInput(event) {
    userLocalData = {
        email: `${refs.inputRef.value}`,
        message: `${refs.textAreaRef.value}`,
    };

    if (event.target.name === 'email') {
        userLocalData.email = event.target.value;
    } else
        
    if (event.target.name === 'message') {
        userLocalData.message = event.target.value;
    }

 localStorage.setItem('feedback-form-state', JSON.stringify(userLocalData));
}

function onFormSubit(event) { 
    event.preventDefault();

    if (event.currentTarget.email.value === '' || event.currentTarget.message.value === '') {
        return alert('Пожалуйста заполните поля Email и Message!');
    }

    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
    alert('Форма успешно отправлена!')
}