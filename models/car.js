const mongoose = require("mongoose");
const car = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  color: { type: String },
  model: { type: String },
  make: { type: String },
  registrationNo: { type: String, required: true },
});
module.exports = mongoose.model("car", car);
