require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("x-login-token");
  const apiKey = req.header("x-api-key");

  if (!token && !apiKey) {
    return res.status(401).json({ message: "Access denied" });
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid credentials" });
      req.user = user;
      next();
    });
  } else if (apiKey) {
    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ message: "Invalid API key" });
    }
    next();
  }
};

module.exports = verifyToken;
