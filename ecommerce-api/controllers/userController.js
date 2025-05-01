const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
    const { email, role, fullName } = req.body;
    if (!email || !fullName) {
      return res.status(400).json({ message: "Email and Fullname are required" });
    }
    userModel.createUser(email, fullName, role, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error creating user", err: err });
      }
      res.status(201).json({ message: "User created successfully", inviteLink: `https://dms.moj.gov.kh/verify-account/${result.inviteToken}` });
      // sendEmail.createAccountInviteLink(result.inviteToken, email,
      //   (emailResponse) => {
      //     if (emailResponse.success) {
      //       res.status(201).json({ message: "User created and email sent", emailResponse });
      //     } else {
      //       res.status(500).json({ message: "User created but email sending failed", emailResponse });
      //     }
      //   }
      // )
      
    });
  };

const getAllUsers = (req, res) =>{
    userModel.getAllUsers((err, result) =>{
        if (err) {
            return res.status(500).json({ message: "Can't get users" });
          }
        return res.status(200).json(result);
    })
}



const updateUserFullName = (req, res) => {
  const { oldEmail, newFullName, password } = req.body;

  if (!oldEmail || !newFullName || !password) {
    return res.status(400).json({ message: "Old email, new full name, and password are required" });
  }

  userModel.getUserByEmail(oldEmail, (err, user) => {
    if (err) return res.status(500).json({ message: "Error fetching user", error: err });
    if (!user) return res.status(404).json({ message: "User not found" });

    bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
      if (bcryptErr || !isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      userModel.updateUserFullName(oldEmail, newFullName, (updateErr, result) => {
        if (updateErr) return res.status(500).json({ message: "Error updating full name", error: updateErr });
        res.status(200).json({ success: true, message: "Full name updated successfully" });
      });
    });
  });
};


const updateUserEmail = (req, res) => {
  const { oldFullName, newEmail, password } = req.body;

  if (!oldFullName || !newEmail || !password) {
    return res.status(400).json({ message: "Old full name, new email, and password are required" });
  }

  userModel.getUserByFullName(oldFullName, (err, user) => {
    if (err) return res.status(500).json({ message: "Error fetching user", error: err });
    if (!user) return res.status(404).json({ message: "User not found" });

    bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
      if (bcryptErr || !isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      userModel.updateUserEmail(oldFullName, newEmail, (updateErr, result) => {
        if (updateErr) return res.status(500).json({ message: "Error updating email", error: updateErr });
        res.status(200).json({ success: true, message: "Email updated successfully" });
      });
    });
  });
};

module.exports = {
    createUser,
    getAllUsers,
    updateUserFullName,
    updateUserEmail
    
}