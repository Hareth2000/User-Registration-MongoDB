// models/orderModel.js
const mongoose = require('mongoose');

// Define the schema for the product in the order
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

// Define the schema for the order
const orderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Reference to the user who placed the order
    required: true 
  },
  products: [productSchema], // Array of products in the order
  totalAmount: { type: Number, required: true }, // Total price of all products
  status: { 
    type: String, 
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], 
    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now } // Order creation date
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
