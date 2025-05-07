const express = require("express");
const router = express.Router();

const {getCurrentAccount} = require('../controllers/accountController');

router.get("/", getCurrentAccount);
module.exports = router;