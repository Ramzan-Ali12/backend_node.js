const express = require("express");
const app = express.Router();
// add car
app.post("/add", addCar);
// edit car
app.put("/edit/:id", editCar);
// get all
app.get("/get-all/:id", getAll);
// delete
app.delete("delete/:id", deleteCar);
