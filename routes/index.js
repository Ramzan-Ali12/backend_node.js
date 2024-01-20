const app = require("express").Router();
//.......route for auth.........//
app.use("/auth", require("./auth"));
//.......route for Category....//
app.use("/categories", require("./category"));
//......exports app module.......//
module.exports = { pms: app };
