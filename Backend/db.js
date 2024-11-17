const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect("mongodb://localhost:27017/hiren_409_messages", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //mongodb://localhost:27017/hiren_409_messages
    console.log("Database connected!");
  } catch (error) {
    console.error("Failed to connect! : ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
