const express = require("express");
const {
  verifyToken,
  signup,
  login,
} = require("../Middleware/adminMiddleware.js");

const router = express.Router();

// Admin Signup Route
router.post("/signup", signup);

// Admin Login Route
router.post("/login", login);

// Protected Route Example
router.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "You are authorized!", user: req.user });
});

module.exports = router;
