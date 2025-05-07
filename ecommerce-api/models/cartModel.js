const db = require("../db/connection"); // Assuming this is your database connection

// Add to cart
const addToCart = (userId, productId, quantity, callback) => {
  // First, check if the cart exists for the user
  const checkCartQuery = 'SELECT * FROM carts WHERE user_id = ?';
  db.query(checkCartQuery, [userId], (err, cartResults) => {
    if (err) return callback(err);

    let cartId;
    if (cartResults.length > 0) {
      // If a cart already exists, get the cart ID
      cartId = cartResults[0].id;
    } else {
      // If no cart exists, create a new cart for the user
      const createCartQuery = 'INSERT INTO carts (user_id) VALUES (?)';
      db.query(createCartQuery, [userId], (err, result) => {
        if (err) return callback(err);
        cartId = result.insertId; // New cart created, get the new cart ID
      });
    }

    // Now, check if the product already exists in the cart for the user
    const checkCartItemQuery = 'SELECT * FROM cart_items WHERE cart_id = ? AND product_id = ?';
    db.query(checkCartItemQuery, [cartId, productId], (err, cartItemResults) => {
      if (err) return callback(err);

      if (cartItemResults.length > 0) {
        // If the item is already in the cart, update the quantity
        const updateQuantityQuery = 'UPDATE cart_items SET quantity = quantity + ? WHERE cart_id = ? AND product_id = ?';
        db.query(updateQuantityQuery, [quantity, cartId, productId], (err, result) => {
          if (err) return callback(err);
          callback(null, { message: 'Product quantity updated in cart', cartItem: result });
        });
      } else {
        // If the item is not in the cart, add a new entry
        const insertCartItemQuery = 'INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)';
        db.query(insertCartItemQuery, [cartId, productId, quantity], (err, result) => {
          if (err) return callback(err);
          callback(null, { message: 'Product added to cart', cartItem: result });
        });
      }
    });
  });
};

module.exports = {
  addToCart,
};
