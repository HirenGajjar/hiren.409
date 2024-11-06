//Start the server
const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
