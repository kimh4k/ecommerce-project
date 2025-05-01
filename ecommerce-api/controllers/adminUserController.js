const userModel = require('../models/userModel');

// Get all users
const getAllUsers = (req, res) => {
  userModel.getAllUsers((err, result) => {
    if (err) return res.status(500).json({ message: 'Unable to fetch users', error: err });
    return res.status(200).json(result);
  });
};

// Activate a user
const activateUser = (req, res) => {
  const { userId } = req.params;
  userModel.updateUserStatus(userId, 'active', (err, result) => {
    if (err) return res.status(500).json({ message: 'Error activating user', error: err });
    res.status(200).json({ message: 'User activated successfully' });
  });
};

// Deactivate a user
const deactivateUser = (req, res) => {
  const { userId } = req.params;
  userModel.updateUserStatus(userId, 'inactive', (err, result) => {
    if (err) return res.status(500).json({ message: 'Error deactivating user', error: err });
    res.status(200).json({ message: 'User deactivated successfully' });
  });
};

module.exports = {
  getAllUsers,
  activateUser,
  deactivateUser
};
