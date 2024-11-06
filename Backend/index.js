const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const messagesRoute = require("./Routes/message.js");
const connectDB = require("./db");
// Configs
dotenv.config();
// Connect to Database
connectDB();
//Middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());
app.use("/api/messages", messagesRoute);
// Backend server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
