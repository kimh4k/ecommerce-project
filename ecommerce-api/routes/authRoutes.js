const express = require('express');
const router = express.Router();
const { signup, login, resetPassword } = require('../controllers/authController');

// Define routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/reset-password', resetPassword);

module.exports = router;
