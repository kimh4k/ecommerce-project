const Cart = require('../models/cartModel');

// Add product to the cart
exports.addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  // Ensure req.user.id is available
  if (!req.user || !req.user.id) {
    return res.status(400).json({ error: 'User not authenticated' });
  }

  const userId = req.user.id;

  Cart.addToCart(userId, productId, quantity, (err, cartItem) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Product added to cart', cartItem });
  });
};

// Get user's cart items
exports.getUserCart = (req, res) => {
  const userId = req.user.id;

  Cart.getUserCart(userId, (err, cartItems) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(cartItems);
  });
};

// Update cart item quantity
exports.updateCartItem = (req, res) => {
  const { cartItemId, quantity } = req.body;

  Cart.updateCartItem(cartItemId, quantity, (err, updatedItem) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Cart updated', updatedItem });
  });
};

// Remove cart item
exports.removeCartItem = (req, res) => {
  const { cartItemId } = req.params;

  Cart.deleteCartItem(cartItemId, (err, response) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(response);
  });
};
