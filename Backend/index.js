const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const messagesRoute = require("./Routes/message.js");
const connectDB = require("./db");
// Configs
app.use(express.json());
dotenv.config();
// Connect to Database
connectDB();
//Middlewares
app.use(
  cors({
    origin: "https://hirengajjar.onrender.com/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use("/api/messages", messagesRoute);
// Backend server
app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
});
