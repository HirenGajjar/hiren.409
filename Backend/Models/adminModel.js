const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Automatically trim any spaces around the username
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensure passwords are at least 6 characters
  },
});

// Hash password before saving the admin
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Only hash the password if it's modified (for example, during signup or password change)
    this.password = await bcrypt.hash(this.password, 10);
  }
  next(); // Proceed with the save operation
});

// Method to validate password
adminSchema.methods.isPasswordValid = async function (password) {
  // Compare the password entered by the user with the hashed password
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Admin", adminSchema);
