const express = require("express");

app.post("/login", Validator(validateLogin, "body"), login);
