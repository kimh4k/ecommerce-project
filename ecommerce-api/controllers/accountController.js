
const userModel = require("../models/userModel");
const getCurrentAccount=(req, res) =>{
    const {email} = req.user;
    userModel.getUserByEmail(email, (err, user) => {
        if (err) {
          return res.status(500).json({ message: "Error login user", error: err });
        }
    
        if (!user) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({email:user.email, fullName:user.fullName})

    })
}

module.exports ={
    getCurrentAccount
}