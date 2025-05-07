const initializeDatabase = require("./db/dbSetup");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

initializeDatabase();

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoute'); 
const verifyToken = require('./middlewares/verifyToken');
const adminRoutes = require('./routes/adminCrudRoute');
const cartRoutes = require('./routes/cartRoute');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/v1/auth", authRoutes);
app.use("/v1/users", userRoutes);
app.use("/v1/account", verifyToken, accountRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/v1/cart', cartRoutes);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
module.exports = app;