const express = require("express");
// validator to validate the request
const { Validator } = require("../../middleware/ensure-auth");
const { validateLogin, validateSignUp } = require("./validate");
const { login, signUp } = require("../../controllers/auth/index");
const app = express.Router();

app.post("/login", Validator(validateLogin, "body"), login);
app.post("/sign-up", Validator(validateSignUp, "body"), signUp);
module.exports = app;
