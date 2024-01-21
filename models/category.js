// ....mongoose.......//
const mongoose = require("mongoose");
//.....category Schema.....//
const category = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);
//....export category model.....//
module.exports = mongoose.model("category", category);
