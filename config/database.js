const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connected) {
      console.info("Connected to the CRUD mongoDB");
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = dbConnection;
