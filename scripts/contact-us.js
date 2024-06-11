import { showMessage } from "./helpers/showMessage.js";

const contactUsForm = document.getElementById('contact-us-form');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const showError = (element, message) => {
    element.textContent = message;
    element.style.display = 'block';
}

const validateField = (value, condition, errorElement, errorMessage) => {
    if (!condition(value)) {
        showError(errorElement, errorMessage);
        return false;
    }
    return true;
}

window.addEventListener('load', () => {
    const fields = ['name', 'email', 'message', 'inquiry'];
    fields.forEach(field => {
        const savedValue = sessionStorage.getItem(field);
        if (savedValue) {
            document.getElementById(field).value = savedValue;
        }
    });
});

contactUsForm.addEventListener('input', (e) => {
    sessionStorage.setItem(e.target.id, e.target.value);
});

contactUsForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const inquiry = document.getElementById('inquiry').value;

    const errors = {
        name: document.getElementById('name-error'),
        email: document.getElementById('email-error'),
        message: document.getElementById('message-error'),
        inquiry: document.getElementById('inquiry-error')
    };

    Object.values(errors).forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });

    let valid = true;

    valid &= validateField(name, value => value.trim() !== '', errors.name, 'Please enter your name.');
    valid &= validateField(email, value => value.trim() !== '', errors.email, 'Please enter your email.');
    valid &= validateField(email, value => /\S+@\S+\.\S+/.test(value), errors.email, 'Please enter a valid email address.');
    valid &= validateField(message, value => value.trim() !== '', errors.message, 'Please enter your message.');
    valid &= validateField(message, value => value.length <= 250, errors.message, 'Message cannot be more than 250 characters.');
    valid &= validateField(inquiry, value => value !== '#' && value.trim() !== '', errors.inquiry, 'Please select an inquiry option.');

    if (valid) {
        const formData = new FormData(contactUsForm);
        for (let item of formData) {
            console.log(`${capitalize(item[0])}: ${item[1]}`);
        }

        showMessage('Thank You', "Thank you for reaching out to us!", 5000, true)

        contactUsForm.reset();
        sessionStorage.clear();
    }
});