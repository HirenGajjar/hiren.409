const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const messagesRoute = require("./Routes/message.js");
const connectDB = require("./db");
const getMessage = require("./Middleware/getMessage.js");
// Configs
app.use(express.json());
dotenv.config();
// Connect to Database
connectDB();
//Middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use("/api/messages", messagesRoute);
app.use("/api/admin/messages", getMessage);

// Backend server
app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
});
