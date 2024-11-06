const express = require("express");

const router = express.Router();

router.post("/", saveMessage);

module.exports = router;
