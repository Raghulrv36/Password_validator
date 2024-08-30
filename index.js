function verifyPasswords() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (username === '') {
        showErrorMessage('Username is required.');
        return;
    }
    
    if (email === '') {
        showErrorMessage('Email is required.');
        return;
    }
    
    if (!validateEmail(email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    if (password === '') {
        showErrorMessage('Password is required.');
        return;
    }
    
    if (password.length < 8) {
        showErrorMessage('Password must be at least 8 characters long.');
        return;
    }
    
    if (confirmPassword === '') {
        showErrorMessage('Please confirm your password.');
        return;
    }
    
    if (password !== confirmPassword) {
        showErrorMessage('Passwords do not match!');
        return;
    }

    alert('Form submitted successfully!');

    // Clear the form fields after successful submission
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
}

function showErrorMessage(message) {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}