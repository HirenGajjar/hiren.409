const express = require("express");
const saveMessage = require("../Middleware/saveMessage.js");
const getMessage = require("../Middleware/getMessage.js");
const router = express.Router();

router.post("/", saveMessage);

// To get the data

router.get("/", getMessage);

module.exports = router;
