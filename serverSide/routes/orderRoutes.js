// routes/orderRoutes.js
const express = require('express');
const { createOrder, getUserOrders, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protected routes
router.post('/create', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);
router.post('/update-status', authMiddleware, updateOrderStatus);

module.exports = router;
