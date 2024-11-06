const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  message: { type: String, required: true, maxlength: 200 },
});

module.exports = mongoose.model("Message", messageSchema);
