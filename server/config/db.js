const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    // Exit the process with a failure code if we can't connect to the DB
    process.exit(1);
  }
};

module.exports = connectDB;