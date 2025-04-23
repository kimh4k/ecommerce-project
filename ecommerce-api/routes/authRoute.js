const express = require("express");
const { completeSignup, login, checkVerifyToken } = require("../controllers/authController");
const router = express.Router();

router.post("/verify", completeSignup);
router.post("/login", login);
router.post("/token/verify",  checkVerifyToken);

module.exports = router;
