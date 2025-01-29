// Fetch and display customer orders
async function fetchCustomerOrders() {
    try {
        // Fetch orders from the backend
        const response = await fetch('http://localhost:3000/orders');
        const orders = await response.json(); // Convert the response to JSON

        // Reference the customerOrders <ul> element
        const ordersList = document.getElementById('customerOrders');
        ordersList.innerHTML = ''; // Clear the list before adding new items

        // Loop through the orders and display them
        orders.forEach(order => {
            const li = document.createElement('li');
            li.textContent = `${order.customerName} - Status: ${order.orderStatus}`;
            ordersList.appendChild(li); // Append each order to the list
        });
    } catch (err) {
        console.error('Error fetching orders:', err);
        alert('Failed to fetch orders. Please try again later.');
    }
}

// Load orders when the page loads
window.onload = fetchCustomerOrders;

// Optional: Auto-refresh the order list every 5 seconds
setInterval(fetchCustomerOrders, 5000);
