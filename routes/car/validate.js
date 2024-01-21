//......yup.........//
const yup = require("yup");
//.....mongoIdPattern......//
const { mongoIdPattern } = require("../../utils/validationHelper");
//.....validateAddCar.......//
module.exports.validateAddCar = yup.object({
  categoryId: yup
    .string()
    .matches(mongoIdPattern, "Invalid Id")
    .typeError("Invalid category Id")
    .required()
    .label("category Id"),
  color: yup.string().required("Color is required"),
  make: yup.string().required("Make is required"),
  registrationNo: yup.string().required("Registration Number is required"),
});
//.....validateEditCar.........//
module.exports.validateEditCar = yup.object({
  categoryId: yup
    .string()
    .matches(mongoIdPattern, "Invalid Id")
    .typeError("Invalid category Id")
    .required()
    .label("category Id"),
  color: yup.string().required("Color is required"),
  make: yup.string().required("Make is required"),
  registrationNo: yup.string().required("Registration Number is required"),
});
