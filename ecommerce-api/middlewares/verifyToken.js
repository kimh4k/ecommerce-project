require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get token from Authorization header
  const token = req.header("x-login-token");
  const apiKey = req.header("x-api-key");

  if (!token && !apiKey) {
    return res
      .status(401)
      .json({ message: "Access denied" });
  }

  if (token) {
    // Verify the token using the JWT_SECRET
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid credentials" });
      }

      // If valid, attach the user info to the request object
      req.user = user;

      next();
    });
  }

  if (apiKey) {
    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ message: "Access denied. Invalid credentials" });
    }
    next();
  }
};

module.exports = verifyToken;
