document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validasi username dan password (contoh sederhana)
        if (username === 'user' && password === '1234') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'dashboard.html';
        } else {
            loginMessage.textContent = 'Username atau password salah!';
            loginMessage.style.color = 'red';
        }
    });
});
