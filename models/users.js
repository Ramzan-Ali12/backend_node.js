// user model
"use-strict";
// .....dotenv..........//
require("dotenv").config();
//....mongoose.........//
const mongoose = require("mongoose");
//.....jsonWetToken.......//
const jwt = require("jsonwebtoken");
//......User Schema.......//
const users = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    timeZone: {
      type: String,
      default: "Asia/Karachi",
    },
    otp: {
      type: Number,
    },
    otpAddedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
// .......generateToke............//
users.methods.generateToken = function () {
  const maxAge = 3 * 24 * 60 * 60;

  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_KEY,
    {
      expiresIn: maxAge,
    }
  );

  return token;
};
// ........export users model...........//
module.exports = mongoose.model("users", users);
