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

// CORS Configuration
const allowedOrigins = [
  "https://hirengajjar.onrender.com",
  "http://localhost:5173",
  "*",
];
//CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Middlewares
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
