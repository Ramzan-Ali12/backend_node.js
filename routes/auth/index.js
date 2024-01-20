//.........express.............//
const express = require("express");
//....validator................//
const { Validator } = require("../../middleware/validator");
// .....validateLogin.....validateSignUp....//
const { validateLogin, validateSignUp } = require("./validate");
// .......login .........SignUp............//
const { login, signUp } = require("../../controllers/auth/index");
// ........app.........//
const app = express.Router();
//.......login route.....//
app.post("/login", Validator(validateLogin, "body"), login);
//.......signup route.....//
app.post("/sign-up", Validator(validateSignUp, "body"), signUp);
// .....export app......//
module.exports = app;

