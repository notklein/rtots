document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Predefined username and password
    const fixedUsername = 'admin';
    const fixedPassword = 'password123';
    
    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    // Clear previous error messages
    errorMessage.textContent = '';
    
    // Check if the entered credentials match the fixed ones
    if (username === fixedUsername && password === fixedPassword) {
        // If the credentials are correct, proceed with form submission
        alert('Login successful! Redirecting...');
        this.submit();  // This will submit the form, or you can redirect to another page
    } else {
        // If the credentials don't match, show an error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }

    if (username === fixedUsername && password === fixedPassword) {
        // Redirect to a dashboard or home page
        window.location.href = 'main.html'; // Replace with your desired URL
    }
    
});
