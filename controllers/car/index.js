//.....Mongoose.........//
const { default: mongoose } = require("mongoose");
//....Car Model........//
const Car = require("../../models/car");

//..........Add Car........//
const addCar = async (req, res) => {
  try {
    const { categoryId, color, model, make, registrationNo } = req.body;
    // find the Car
    const car = await Car.findOne({
      registrationNo,
    });

    if (car) return res.status(409).send({ msg: "Car Already Exists" });
    // Create new Car
    const data = new Car({
      categoryId,
      color,
      model,
      make,
      registrationNo,
    });
    await data.save();
    res.status(200).send({ msg: "Car added Successfully", data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
//.....updateCar........//
const editCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryId, color, model, make, registrationNo } = req.body;
    // Validate if the provided ID is a valid MongoDB ObjectId
    const isValidObjectId = mongoose.isValidObjectId(id);
    if (!isValidObjectId)
      return res.status(400).send({ msg: "Invalid Car ID" });
    // check if the car found
    const car = Car.findOne({ _id: id });
    // check if the car not found
    if (!car) return res.status(404).send({ msg: "Car not found" });
    const data = await Car.updateOne(
      { _id: id },
      {
        ...(categoryId && { categoryId }),
        ...(color && { color }),
        ...(model && { model }),
        ...(make && { make }),
        ...(registrationNo && { registrationNo }),
      }
    );
    res.status(200).send({ msg: "Car updated Successfully!", data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
//....getAllCar.........//
const getAllCar = async (req, res) => {
  try {
    // find the car details
    const carFound = await Car.find().populate("categoryId", "name");
    // check if the car details not found
    if (!carFound) return res.status(404).send({ msg: "Car not Found" });
    // if the details found then send
    res.status(200).send({ msg: "Car details found Successfully", carFound });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
//....deleteCar.........//
const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    // Validate if the provided ID is a valid MongoDB ObjectId
    const isValidObjectId = mongoose.isValidObjectId(id);
    if (!isValidObjectId)
      return res.status(400).send({ msg: "Invalid Car ID" });
    // find the car by id
    const carFound = await Car.findOne({ _id: id });
    // check if car not found
    if (!carFound)
      return res.status(404).send({ msg: "Car not found deleted" });
    // delete the car
    const deleteCar = await Car.deleteOne({ _id: id });
    res.status(200).send({ msg: "Car deleted Successfully", deleteCar });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
//...export modules.....//
module.exports = { addCar, editCar, getAllCar, deleteCar };
