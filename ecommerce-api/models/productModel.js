const db = require('../db/connection'); // adjust the path if needed

// Create a new product
const createProduct = (name, price, stock, categoryId, description, status, callback) => {
  const sql = `INSERT INTO products (name, price, stock, category_id, description, status) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, price, stock, categoryId, description, status], (err, result) => {
    if (err) return callback(err);
    const insertedProduct = {
      id: result.insertId,
      name,
      price,
      stock,
      categoryId,
      description,
      status
    };
    callback(null, insertedProduct);
  });
};

// Get products with pagination, search, and sorting
const getProducts = (page, limit, search, sort, callback) => {
  const offset = (page - 1) * limit;
  const sql = `SELECT * FROM products WHERE name LIKE ? ORDER BY ${sort} LIMIT ? OFFSET ?`;
  db.query(sql, [`%${search}%`, parseInt(limit), offset], callback);
};

// Update a product
const updateProduct = (productId, name, price, stock, categoryId, description, status, callback) => {
  const sql = `UPDATE products SET name = ?, price = ?, stock = ?, category_id = ?, description = ?, status = ? WHERE id = ?`;
  db.query(sql, [name, price, stock, categoryId, description, status, productId], callback);
};

// Delete a product
const deleteProduct = (productId, callback) => {
  const sql = `DELETE FROM products WHERE id = ?`;
  db.query(sql, [productId], callback);
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
};
