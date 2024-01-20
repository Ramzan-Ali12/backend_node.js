//......yup.........//
const yup = require("yup");
//......AddCategory.........//
module.exports.validateAddCategory = yup.object({
  name: yup
    .string()
    .required()
    .test("no-empty-spaces", "Name cannot be empty", (value) => {
      const trimmedValue = value ? value.trim() : "";
      return trimmedValue.length > 0;
    }),
});
//...editCategory.........//
module.exports.validateEditCategory = yup.object({
  name: yup
    .string()
    .required()
    .test("no-empty-spaces", "Name cannot be empty", (value) => {
      const trimmedValue = value ? value.trim() : "";
      return trimmedValue.length > 0;
    }),
});