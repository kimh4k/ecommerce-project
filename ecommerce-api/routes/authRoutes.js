const express = require('express');
const router = express.Router();
const { completeSignup, login,checkVerifyToken  } = require('../controllers/authController');

// Define routes
router.post('/signup', completeSignup);
router.post('/login', login);
router.post("/token/verify",  checkVerifyToken);

module.exports = router;
