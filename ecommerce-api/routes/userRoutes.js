const { 
    createUser,
    getAllUsers,
} = require('../controllers/userController');
const express = require("express");
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();
router.get("/",  getAllUsers);
router.post("/create",  createUser);
//router.post("/update",verifyToken,updateUser)



module.exports = router;