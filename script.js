document.addEventListener('DOMContentLoaded', function() {
    const authBtn = document.getElementById('authBtn');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (authBtn) {
        if (isLoggedIn === 'true') {
            // Pag naka-login, lahat ng tabs magiging "Logout"
            authBtn.innerText = 'Logout';
            authBtn.style.backgroundColor = '#C70039'; // Red para sa Logout
            authBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                alert("Logged out successfully!");
                window.location.href = 'index.html';
            });
        } else {
            // Pag hindi naka-login, "Login" ang makikita sa lahat
            authBtn.innerText = 'Login';
            authBtn.href = 'login.html';
            authBtn.style.backgroundColor = '#00ff00'; // Orange para sa Login
        }
    }
});