//......Express..............//
const express = require("express");
//......validator............//
const { Validator } = require("../../middleware/validator");
//......validation..........//
const { validateAddCar, validateEditCar } = require("./validate");
//.....Controller function.....//
const {
  addCar,
  editCar,
  getAllCar,
  deleteCar,
} = require("../../controllers/car/index");
//.......express router.......//
const app = express.Router();
// add car
app.post("/add-car/", Validator(validateAddCar, "body"), addCar);
// edit car
app.put("/edit-car/:id/", Validator(validateEditCar, "body"), editCar);
// get all
app.get("/get-all-cars/", getAllCar);
// delete
app.delete("/delete-car/:id", deleteCar);
module.exports = app;
