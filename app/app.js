const express = require("express");

const { pms } = require("../routes");

const app = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/", pms);

module.exports = app;
