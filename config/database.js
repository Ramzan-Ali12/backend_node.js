// ........mongoose..........//
const mongoose = require("mongoose");
// .........databaseConnection........//
const dbConnection = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //...check if connected to database
    if (connected) {
      console.info("Connected to the CRUD mongoDB");
      return true;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
//.....export module.......//
module.exports = dbConnection;
