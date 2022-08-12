import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name = "email"]'),
    message: document.querySelector('[name="message"]'),
};

const STORAGE_DATA = "feedback-form-state";

let storageObj = {};

if (localStorage.getItem(STORAGE_DATA)) { 
    const lastEmail = JSON.parse(localStorage.getItem(STORAGE_DATA)).email;
    const lastMessage = JSON.parse(localStorage.getItem(STORAGE_DATA)).message;
    
    refs.email.value = lastEmail ? lastEmail : '';
    storageObj.email = refs.email.value;
    refs.message.value = lastMessage ? lastMessage : '';
    storageObj.message = refs.message.value;
};



const onFormInput = (e) => { 
    if (e.target.name === 'email') {
        storageObj.email = e.target.value;
    } else {
        storageObj.message = e.target.value;
    };
    localStorage.setItem(STORAGE_DATA, JSON.stringify(storageObj));
    
   
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_DATA)));
    storageObj = {};
    localStorage.clear();
    refs.form.reset();
};


// ----Event listeners---
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);