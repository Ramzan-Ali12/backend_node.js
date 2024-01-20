//.....Mongoose.........//
const { default: mongoose } = require("mongoose");

//...categories mode.........//
const Categories = require("../../models/category");

//...........addCategories......//
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    //find the category
    const category = await Categories.findOne({
      name,
    });
    if (category)
      return res.status(404).send({ msg: "Category Already Exist!" });
    // Create a new category
    const data = new Categories({
      name,
    });
    await data.save();
    // Save the new category to the database
    return res.status(200).send({ msg: "Category added Successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
//...........editCategory...............//
const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Validate if the provided ID is a valid MongoDB ObjectId
    const isValidObjectId = mongoose.isValidObjectId(id);
    if (!isValidObjectId)
      return res.status(400).send({ msg: "Invalid Category ID" });

    // Find the category by ID
    const category = await Categories.findOne({ _id: id });
    if (!category) return res.status(404).send({ msg: "Category not found" });
    // Update the category
    const updatedCategory = await Categories.updateOne(
      { _id: id },
      // Include 'name' property if truthy
      { ...(name && { name }) }
    );

    res
      .status(200)
      .send({ msg: "Category Updated Successfully", updatedCategory });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
//.......getAllCategories................//
const getAllCategories = async (req, res) => {
  try {
    // Retrieve all categories from the database
    const categories = await Categories.find();
    res
      .status(200)
      .send({ msg: "All Categories Retrieved Successfully", categories });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
//...........deleteCategory...............//
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    // Validate if the provided ID is a valid MongoDB ObjectId
    const isValidObjectId = mongoose.isValidObjectId(id);
    if (!isValidObjectId)
      return res.status(400).send({ msg: "Invalid Category ID" });

    // Find the category by ID
    const category = await Categories.findOne({ _id: id });
    if (!category)
      return res.status(404).send({ msg: "Category not found deleted" });
    // delete the category
    const deletedCategory = await Categories.deleteOne({ _id: id });

    res
      .status(200)
      .send({ msg: "Category Deleted Successfully", deletedCategory });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
module.exports = {
  addCategory,
  editCategory,
  getAllCategories,
  deleteCategory,
};
