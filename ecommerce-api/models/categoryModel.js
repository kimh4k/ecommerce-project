const db = require("../db/connection"); // adjust this path as needed

// Create a new category
const createCategory = (name, callback) => {
  const query = 'INSERT INTO categories (name) VALUES (?)';
  db.query(query, [name], (err, result) => {
    if (err) return callback(err);
    callback(null, { id: result.insertId, name });
  });
};

// Get all categories with pagination and search
const getCategories = (page, limit, search, callback) => {
  // Set default values for pagination and search if they are not provided
  const offset = (page - 1) * limit;
  const searchQuery = search ? `%${search}%` : '%'; // If there's a search term, it will be used to match categories

  // SQL query to select categories with pagination and search
  const query = 'SELECT * FROM categories WHERE name LIKE ? LIMIT ? OFFSET ?';
  
  // Execute the query with the parameters
  db.query(query, [searchQuery, limit, offset], (err, results) => {
    if (err) return callback(err);
    callback(null, results); // Return the list of categories
  });
};


// Get a category by ID
const getCategoryById = (id, callback) => {
  const query = 'SELECT * FROM categories WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result[0]); // Return the category object
  });
};

// Update a category
const updateCategory = (id, name, callback) => {
  const query = 'UPDATE categories SET name = ? WHERE id = ?';
  db.query(query, [name, id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(new Error('Category not found'));
    }
    callback(null, { id, name });
  });
};

// Delete a category
const deleteCategory = (id, callback) => {
  const query = 'DELETE FROM categories WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return callback(err);
    if (result.affectedRows === 0) {
      return callback(new Error('Category not found'));
    }
    callback(null, { message: 'Category deleted successfully' });
  });
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
