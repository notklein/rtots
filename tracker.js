



document.getElementById('addorder').addEventListener('click', addOrder);
        document.getElementById('removeorder').addEventListener('click', removeOrder);

        function addOrder() {
            const customerName = prompt("Please enter the customer's name:");
        
            if (customerName) {
                const orderStatus = "Preparing";
                const li = document.createElement('li');
                li.textContent = `${customerName} - Status: ${orderStatus}`;
                li.setAttribute('data-customer-name', customerName);
        
                // Add order to the DOM
                document.getElementById('orders').appendChild(li);
        
                // Save to localStorage
                const orders = JSON.parse(localStorage.getItem('orders')) || [];
                orders.push({ customerName, orderStatus });
                localStorage.setItem('orders', JSON.stringify(orders));
            } else {
                alert("Customer name is required!");
            }
        }

        function removeOrder() {
            const customerName = prompt("Please enter the customer's name to remove:");

            // Find the list item by customer name and remove it
            const orderItems = document.querySelectorAll('#orders li');
            let found = false; // Flag to check if the order was found
            orderItems.forEach(item => {
                if (item.getAttribute('data-customer-name') === customerName) {
                    item.remove();
                    found = true; // Set found flag to true
                }
            });

            if (!found) {
                alert("No order found for this customer name."); // Alert if order not found
            }
        }

        function loadOrders() {
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.forEach(order => {
                const li = document.createElement('li');
                li.textContent = `${order.customerName} - Status: ${order.orderStatus}`;
                li.setAttribute('data-customer-name', order.customerName);
                document.getElementById('orders').appendChild(li);
            });
        }
        
        window.onload = loadOrders;