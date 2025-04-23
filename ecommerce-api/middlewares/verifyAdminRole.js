const userModel = require('../models/userModel')
const verifyAdminRole = (req, res, next) =>{
    const user = req.user;
    if(user.role !== userModel.UserRoles.SYSTEM_ADMIN) return res.status(403).json({ message: "No permission to perform this task" });
    next();
}

module.exports = verifyAdminRole 