//.....mongoose........//
const mongoose = require("mongoose");
//......car Schema.....//
const car = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  color: { type: String },
  model: { type: String },
  make: { type: String },
  registrationNo: { type: String },
});
//...export car model...//
module.exports = mongoose.model("car", car);
