const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pizzaOrders', {
    // Remove the deprecated options
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully!');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


// Order Schema
const orderSchema = new mongoose.Schema({
    customerName: String,
    orderStatus: { type: String, default: 'Preparing' }
});

const Order = mongoose.model('Order', orderSchema);

// API to get all orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).send(err);
    }
});

// API to add an order
app.post('/orders', async (req, res) => {
    const { customerName } = req.body;
    const newOrder = new Order({ customerName });
    try {
        await newOrder.save();
        res.status(201).send('Order added');
    } catch (err) {
        res.status(500).send(err);
    }
});

// API to update an order's status
app.put('/orders/:id', async (req, res) => {
    const { id } = req.params;
    const { orderStatus } = req.body;
    try {
        await Order.findByIdAndUpdate(id, { orderStatus });
        res.send('Order updated');
    } catch (err) {
        res.status(500).send(err);
    }
});

// API to remove an order
app.delete('/orders/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Order.findByIdAndRemove(id);
        res.send('Order removed');
    } catch (err) {
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
