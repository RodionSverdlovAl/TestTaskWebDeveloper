const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, select');
const registerBtn = document.getElementById('register-btn');
const phoneInput = document.getElementById('phone-input');
const emailInput = document.getElementById('email-input');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');

function validateForm() {
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
        }
    });

    registerBtn.disabled = !isValid;
}

function validatePhone() {
    const phoneRegex = /^\+?\d{10,}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.classList.add('invalid');
        phoneError.style.display = 'block';
    } else {
        phoneInput.classList.remove('invalid');
        phoneError.style.display = 'none';
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        emailError.style.display = 'block';
    } else {
        emailInput.classList.remove('invalid');
        emailError.style.display = 'none';
    }
}

inputs.forEach(input => {
    input.addEventListener('input', validateForm);
});

phoneInput.addEventListener('input', validatePhone);
emailInput.addEventListener('input', validateEmail);

function handleAvatarUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const avatarUpload = document.getElementById('avatar-upload');
        avatarUpload.style.backgroundImage = `url(${e.target.result})`;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function resetAvatar() {
    const avatarUpload = document.getElementById('avatar-upload');
    avatarUpload.style.backgroundImage = '';

    const avatarInput = document.getElementById('avatar-input');
    avatarInput.value = '';
}