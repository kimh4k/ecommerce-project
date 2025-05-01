const productModel = require('../models/productModel');

// Create a new product
const createProduct = (req, res) => {
  const { name, price, stock, categoryId, description, status } = req.body;
  if (!name || !price || !stock || !categoryId) return res.status(400).json({ message: 'All fields are required' });

  productModel.createProduct(name, price, stock, categoryId, description, status, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating product', error: err });
    res.status(201).json({ message: 'Product created successfully', product: result });
  });
};

// Get products with pagination, sorting, and search
const getProducts = (req, res) => {
  const { page = 1, limit = 10, search = '', sort = 'created_at' } = req.query;
  productModel.getProducts(page, limit, search, sort, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error fetching products', error: err });
    res.status(200).json(result);
  });
};

// Update a product
const updateProduct = (req, res) => {
  const { productId } = req.params;
  const { name, price, stock, categoryId, description, status } = req.body;

  if (!name || !price || !stock || !categoryId) return res.status(400).json({ message: 'All fields are required' });

  productModel.updateProduct(productId, name, price, stock, categoryId, description, status, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating product', error: err });
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

// Delete a product
const deleteProduct = (req, res) => {
  const { productId } = req.params;

  productModel.deleteProduct(productId, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting product', error: err });
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
};
