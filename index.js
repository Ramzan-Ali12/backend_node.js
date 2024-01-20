//...for env......//
require("dotenv").config();
//......express......//
const express = require("express");
//......app.........//
const app = express();
//......http to createServer........//
const http = require("http");
//.....// calling body-parser to handle the Request Object from POST requests........//
const bodyParser = require("body-parser");
//.....CORS comes from "Cross-Origin resource sharing" CORS is a feature that restricts 
// a web browser from making an API request from one domain to other domain.
const cors = require("cors");
//....dbConnection........//
const dbConnection = require("./config/database");
//....user cors........//
app.use(cors());
//.....parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: true }));
//.....parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
//...createServer.........//
const server = http.createServer(app);
//.........route........//
app.use("/", require("./app/app"));
//......Establish a connection to the database using the dbConnection function.........//
dbConnection().then(() => {
//......Once the database connection is established, start the server and listen for incoming requests.......//
  server.listen(process.env.PORT, () => console.info(`Application running`));
});
