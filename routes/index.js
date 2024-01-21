const app = require("express").Router();
//.......route for auth.........//
app.use("/auth", require("./auth"));
//.......route for Category....//
app.use("/category", require("./category"));
//.......route for Car.........//
app.use("/car", require("./car"));
//......exports app module.......//
module.exports = { pms: app };
