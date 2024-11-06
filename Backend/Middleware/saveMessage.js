const Message = require("../Models/message.js");

const saveMessage = async (req, res) => {
  const { name, email, message } = req.body;
  // Incase of empty fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res
      .status(201)
      .json({ message: `${name} has sent a message : ${message}` });
  } catch (error) {
    res.status(500).json({ message: "Failed saving message.", error });
  }
};

module.exports = saveMessage;
