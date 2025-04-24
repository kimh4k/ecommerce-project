require("dotenv").config();
const mysql = require("mysql2");

// Create the MySQL connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true // 👈 ADD THIS LINE
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.log(err);
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
    connection.release();  // Release the connection after use
  }
});

module.exports = db;

