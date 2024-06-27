document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Halaman yang memerlukan login
    const protectedPages = [
        'dashboard.html',
        'forum.html',
        'recommendations.html',
        'results.html',
        'subjects.html',
        'nano-learning.html'
    ];

    const currentPage = window.location.pathname.split('/').pop();

    // Redirect ke halaman login jika belum login dan berada di halaman yang memerlukan login
    if (!isLoggedIn && protectedPages.includes(currentPage)) {
        window.location.href = 'login.html';
    }
});
