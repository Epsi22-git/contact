const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://epsi22charle:SkbC4hXXtDUgA96m@cluster0.qlf6p.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
