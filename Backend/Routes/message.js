const express = require("express");
const saveMessage = require("../Middleware/saveMessage.js");
const router = express.Router();

router.post("/", saveMessage);

module.exports = router;
