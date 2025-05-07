const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');


// Remove '/cart' from the route paths
router.post('/add', cartController.addToCart);
router.get('/', cartController.getUserCart);
router.put('/update', cartController.updateCartItem);
router.delete('/delete/:cartItemId', cartController.removeCartItem);

module.exports = router;
