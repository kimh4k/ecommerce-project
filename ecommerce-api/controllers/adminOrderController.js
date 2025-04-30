const orderModel = require('../models/orderModel');

// Get all orders with pagination and search
const getOrders = (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  orderModel.getOrders(page, limit, search, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error fetching orders', error: err });
    res.status(200).json(result);
  });
};

// Update order status
const updateOrderStatus = (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const validStatuses = ['pending', 'accepted', 'processing', 'delivering', 'cancelled', 'completed'];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid order status' });
  }

  orderModel.updateOrderStatus(orderId, status, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating order status', error: err });
    res.status(200).json({ message: 'Order status updated successfully' });
  });
};

// Delete an order
const deleteOrder = (req, res) => {
  const { orderId } = req.params;

  orderModel.deleteOrder(orderId, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting order', error: err });
    res.status(200).json({ message: 'Order deleted successfully' });
  });
};

module.exports = {
  getOrders,
  updateOrderStatus,
  deleteOrder
};
