// Fetch all orders when the page loads
async function fetchOrders() {
    const response = await fetch('http://localhost:3000/pizzaOrders'); // Fetch orders from the server
    const orders = await response.json();
    const ordersList = document.getElementById('orders'); // Assuming there's a <ul> or <div> to show orders
    ordersList.innerHTML = ''; // Clear current list

    orders.forEach(order => {
        const li = document.createElement('li'); // Create a list item for each order
        li.textContent = `${order.customerName} - Status: ${order.orderStatus}`;
        li.setAttribute('data-id', order._id); // Use MongoDB's ID for updates/removals
        ordersList.appendChild(li); // Add the order to the page
    });
}

// Add a new order
document.getElementById('addorder').addEventListener('click', async () => {
    const customerName = prompt("Please enter the customer's name:");
    if (customerName) {
        await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerName }) // Send customer name to the backend
        });
        fetchOrders(); // Refresh the order list after adding
    }
});

// Remove an order
document.getElementById('removeorder').addEventListener('click', async () => {
    const customerName = prompt("Please enter the customer's name to remove:");
    const orders = Array.from(document.querySelectorAll('#orders li')); // Assuming orders are listed inside an <ul>

    const orderToDelete = orders.find(order => 
        order.textContent.includes(customerName)
    );

    if (orderToDelete) {
        const orderId = orderToDelete.getAttribute('data-id'); // Get the ID from the clicked item
        await fetch(`http://localhost:3000/orders/${orderId}`, { method: 'DELETE' });
        fetchOrders(); // Refresh the order list after removing
    } else {
        alert("Order not found");
    }

});
// Add event listener for the logout button
document.getElementById('logoutButton').addEventListener('click', () => {
    const confirmLogout = confirm('Are you sure you want to logout?'); // Show confirmation dialog
    if (confirmLogout) {
        // Redirect to login page
        window.location.href = 'loginpage.html';
    }
});


// Load orders when the page loads
window.onload = fetchOrders;
