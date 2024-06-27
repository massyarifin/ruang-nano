document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.getElementById('logout');

    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.setItem('logoutMessage', 'Anda telah berhasil logout');
            window.location.href = "index.html";
        });
    }
});
