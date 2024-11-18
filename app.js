// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Placeholder for authentication logic
    if (username === "123" && password === "123") {
        alert("Login successful!");
        // Redirect to the homepage or dashboard
    } else {
        alert("Invalid username or password.");
    }
    

    
});