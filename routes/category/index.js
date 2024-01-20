//........express..............//
const express = require("express");
//....validator................//
const { Validator } = require("../../middleware/validator");
//.....validateAddCategory......//
const { validateAddCategory, validateEditCategory } = require("./validate");
//.......Categories...........//
const {
  addCategory,
  editCategory,
  getAllCategories,
  deleteCategory,
} = require("../../controllers/categories/index");
//.......app........//
const app = express.Router();
//.....addCategory........//
app.post("/add-category/", Validator(validateAddCategory, "body"), addCategory);
//....edit car...........//
app.put(
  "/edit-category/:id",
  Validator(validateEditCategory, "body"),
  editCategory
);
//....getAllCategories......//
app.get("/get-all-categories/", getAllCategories);
//.....deleteCategory......//
app.delete("/delete-category/:id", deleteCategory);
module.exports = app;
