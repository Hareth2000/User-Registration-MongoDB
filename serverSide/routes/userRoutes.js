const express = require('express');
const { getUserProfile, registerUser, loginUser, logoutUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', authMiddleware, getUserProfile);

// Logout route
router.post('/logout', logoutUser);

module.exports = router;
