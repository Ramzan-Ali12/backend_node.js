//....express.......//
const express = require("express");
//.....routes......//
const { pms } = require("../routes");
//......express router.....//
const app = express.Router();
//.....express.urlencoded() .....just like express.json() converts request body to JSON,
//it also carries out some other functionalities like: converting form-data to JSON etc.
app.use(express.urlencoded({ extended: true }));
//....express.json()...... is a built express middleware that convert request body to JSON .....//
app.use(express.json());
//....middleware for routes starting with /api/.........//
app.use("/api/", pms);
// ....export app.......//
module.exports = app;
