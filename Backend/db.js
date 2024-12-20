const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected!");
  } catch (error) {
    console.error("Failed to connect! : ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
