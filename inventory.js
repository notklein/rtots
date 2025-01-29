// Add event listener for the logout button
document.getElementById('logoutButton').addEventListener('click', () => {
    const confirmLogout = confirm('Are you sure you want to logout?'); // Show confirmation dialog
    if (confirmLogout) {
        // Redirect to login page
        window.location.href = 'loginpage.html';
    }
});
