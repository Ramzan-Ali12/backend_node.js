//.....mongoose........//
const mongoose = require("mongoose");
//......car Schema.....//
const car = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    color: { type: String },
    model: { type: String },
    make: { type: String },
    registrationNo: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);
//...export car model...//
module.exports = mongoose.model("car", car);
