const bcrypt = require("bcryptjs");
const db = require("../db/connection");
const crypto = require("crypto");

const UserRoles = Object.freeze({
  SYSTEM_ADMIN: 'system admin',
  BUYER: 'buyer',
});

const verifyInviteToken = (inviteToken, callback) => {
  const sql = "SELECT * FROM users WHERE verify_token = ? AND verify_expires_at > ?";
  const now = new Date();

  db.query(sql, [inviteToken, now], (error, results) => {
    
    if (error) return callback({message: error.sqlMessage}, null);
    if (results.length === 0) {
      return callback({ success: false, message: "Invalid or expired invite token" }, null);
    }
    callback(null, { success: true, user: results[0] });
  });
};


const completeSignup = (fullName, inviteToken, password, callback) => {
  verifyInviteToken(inviteToken, (error, result) => {
    if (error) return callback(error, null);
    if (!result.success) return callback(null, result);

    const user = result.user;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return callback(err, null);

      const sql = "UPDATE users SET fullName = ?, password = ?, verified = ?, verify_token = NULL, verify_expires_at = NULL WHERE id = ?";
      db.query(sql, [fullName, hashedPassword, true, user.id], (updateError, updateResult) => {
        if (updateError) return callback({message: updateError.sqlMessage}, null);
        callback(null, { success: true, message: "User successfully verified" });
      });
    });
  });
};


const getUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (error, results) => {
    if (error) return callback({message: error.sqlMessage}, null);
    callback(null, results[0]); 
  });
};

const createUser = (email, fullName, role, callback) => {

  let userRole = Object.values(UserRoles).includes(role) ? role : UserRoles.GENERAL_DEPARTMENT;

  const inviteToken = crypto.randomBytes(10).toString("hex");
  const tokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  const sql = "INSERT INTO users (email, fullName, role, verify_token, verify_expires_at, verified) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [email, fullName, userRole, inviteToken, tokenExpiresAt, false], (error, result) => {
    if (error) return callback({message: error.sqlMessage}, null);
    callback(null, { inviteToken });
  });
};

const getAllUsers = (callback) => {
  const sql = "SELECT * FROM users ;";
  db.query(sql,(error, results) => {
    if (error) return callback(error, null);
    callback(null, results); 
  });
}

const getUserByFullName = (fullName, callback) => {
  const sql = "SELECT * FROM users WHERE fullName = ?";
  db.query(sql, [fullName], (error, results) => {
    if (error) return callback({ message: error.sqlMessage }, null);
    callback(null, results[0]);
  });
};




module.exports = { getUserByEmail ,createUser, UserRoles, completeSignup, getAllUsers,getUserByFullName ,verifyInviteToken};
