const mongoose = require("mongoose");
//Message model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  message: { type: String, required: true, maxlength: 200 },
});
// Message model
module.exports = mongoose.model("Message", messageSchema);
