const categoryModel = require('../models/categoryModel');

// Create a new category
const createCategory = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Category name is required' });

  categoryModel.createCategory(name, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error creating category', error: err });
    res.status(201).json({ message: 'Category created successfully', category: result });
  });
};

// Get all categories with pagination and search
const getCategories = (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query; // Default page to 1, limit to 10
  categoryModel.getCategories(page, limit, search, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error fetching categories', error: err });
    res.status(200).json(result); // Return the categories as a response
  });
};

// Update a category
const updateCategory = (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'Category name is required' });

  categoryModel.updateCategory(categoryId, name, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error updating category', error: err });
    res.status(200).json({ message: 'Category updated successfully' });
  });
};

// Delete a category
const deleteCategory = (req, res) => {
  const { categoryId } = req.params;

  categoryModel.deleteCategory(categoryId, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deleting category', error: err });
    res.status(200).json({ message: 'Category deleted successfully' });
  });
};

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory
};
