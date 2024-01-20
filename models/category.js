// ....mongoose.......//
const mongoose = require("mongoose");
//.....categories Schema.....//
const category = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});
//....export categories model.....//
module.exports = mongoose.model("category", category);
