const db = require('../db/connection');

// Get all orders with pagination and search
const getOrders = (page, limit, search, callback) => {
  // Sanitize inputs (pagination and search)
  const offset = (page - 1) * limit;
  const query = `SELECT * FROM orders WHERE name LIKE ? LIMIT ? OFFSET ?`;

  db.query(query, [`%${search}%`, limit, offset], (err, results) => {
    if (err) return callback(err);
    callback(null, results); // Return the list of orders
  });
};

// Update the status of an order
const updateOrderStatus = (orderId, status, callback) => {
  const validStatuses = ['pending', 'accepted', 'processing', 'delivering', 'cancelled', 'completed'];

  if (!validStatuses.includes(status)) {
    return callback(new Error('Invalid order status'));
  }

  const query = 'UPDATE orders SET status = ? WHERE id = ?';

  db.query(query, [status, orderId], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(new Error('Order not found'));
    }
    callback(null, { message: 'Order status updated successfully' });
  });
};

// Delete an order
const deleteOrder = (orderId, callback) => {
  const query = 'DELETE FROM orders WHERE id = ?';

  db.query(query, [orderId], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(new Error('Order not found'));
    }
    callback(null, { message: 'Order deleted successfully' });
  });
};

module.exports = {
  getOrders,
  updateOrderStatus,
  deleteOrder
};
