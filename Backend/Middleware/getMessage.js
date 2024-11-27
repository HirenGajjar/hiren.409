const Message = require("../Models/message.js");

const getMessage = async (req, res) => {
  try {
    const messages = await Message.find();
    console.log(messages);

    res.status(200).json(messages); // Return the messages as JSON
  } catch (error) {
    res.status(500).json({ message: "Failed fetching messages.", error });
  }
};

module.exports = getMessage;
