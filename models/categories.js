const mongoose = require("mongoose");
const categories = new mongoose.Schema({
  name: [
    {
      name: { type: String, required: true },
    },
  ],
});
module.exports = mongoose.model("categories", categories);
