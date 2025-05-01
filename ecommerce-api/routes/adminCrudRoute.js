const express = require('express');
const router = express.Router();
const adminUserController = require('../controllers/adminUserController');
const adminCategoryController = require('../controllers/adminCategoryController');
const adminProductController = require('../controllers/adminProductController');
const adminOrderController = require('../controllers/adminOrderController');

// Admin Routes for User
router.get('/users', adminUserController.getAllUsers);
router.patch('/users/:userId/activate', adminUserController.activateUser);
router.patch('/users/:userId/deactivate', adminUserController.deactivateUser);

// Admin Routes for Category
router.post('/categories', adminCategoryController.createCategory);
router.get('/categories', adminCategoryController.getCategories);
router.patch('/categories/:categoryId', adminCategoryController.updateCategory);
router.delete('/categories/:categoryId', adminCategoryController.deleteCategory);

// Admin Routes for Product
router.post('/products', adminProductController.createProduct);
router.get('/products', adminProductController.getProducts);
router.patch('/products/:productId', adminProductController.updateProduct);
router.delete('/products/:productId', adminProductController.deleteProduct);

// Admin Routes for Order
router.get('/orders', adminOrderController.getOrders);
router.patch('/orders/:orderId/status', adminOrderController.updateOrderStatus);
router.delete('/orders/:orderId', adminOrderController.deleteOrder);

module.exports = router;
