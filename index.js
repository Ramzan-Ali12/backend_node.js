require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnection = require("./config/database");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const server = http.createServer(app);
// routes
app.use("/", require("./app/app"));

dbConnection().then(() => {
  server.listen(process.env.PORT, () => console.info(`Application running`));
});
