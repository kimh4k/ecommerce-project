// const initializeDatabase = require("./db/dbSetup");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// initializeDatabase();

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminCrudRoute');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
module.exports = app;