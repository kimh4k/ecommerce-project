const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");


const completeSignup = (req, res) => {
  const { inviteToken, password , fullName} = req.body;
  if (!inviteToken || !password || !fullName) {
    return res.status(400).json({ message: "Invite token, fullname and password are required" });
  }

  userModel.completeSignup(fullName, inviteToken ,password, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.success) return res.status(400).json({ message: result.message });
    res.status(200).json({ success: result.success, message: result.message });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  userModel.getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error login user", error: err });
    }

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err)
        return res.status(500).json({ message: "Error verifying password" });

      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });

      // Generate JWT token
      const token = jwt.sign(
        {email: user.email, role: user.role },
        process.env.JWT_SECRET,
      );

      res.status(200).json({ message: "Login successful", token });
    });
  });
};

const checkVerifyToken = (req, res) =>{
  const {inviteToken} = req.body;
  if(!inviteToken) return res.status(401).json({ message: "No invite token provided" });
   userModel.verifyInviteToken(inviteToken, (error, result) => {
    if (error) {
      return res.status(401).json(error);
    }
    const user = result.user
    res.status(200).json({email: user.email, fullName: user.fullName });
  });
}

module.exports = {
  login,
  completeSignup,
  checkVerifyToken
};
