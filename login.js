document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // For demonstration: User is 'admin' and Pass is 'lostkidz2024'
    if (user === "admin" && pass === "lostkidz2024") {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "index.html"; // Redirect to shop
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
    // Sa loob ng login function mo:
if (user === "admin" && pass === "lostkidz2024") {
    localStorage.setItem('isLoggedIn', 'true');
    alert("Login Successful!");
    
    // Titingnan kung galing siya sa cart
    window.location.href = "cart.html"; 
}
});