// user model
"use-strict";
require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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

module.exports = mongoose.model("users", users);
