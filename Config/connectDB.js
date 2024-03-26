const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`Database is Connected`);
  } catch (error) {
    console.log(`Database is Not Connected`);
  }

};
module.exports = connectDB

