const yup = require("yup");
const { passwordPattern } = require("../../utils/validationHelper");
const { timeZones } = require("../../utils/helper");
module.exports.validateSignUp = yup.object({
  name: yup
    .string()
    .required()
    .test("no-empty-spaces", "Name cannot be empty", (value) => {
      const trimmedValue = value ? value.trim() : "";
      return trimmedValue.length > 0;
    }),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      passwordPattern,
      "Min Characters should be 8 with atleast one number, one lower and one upper case"
    )
    .required()
    .label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Do Not Match")
    .required()
    .label("Confirm Password"),
  timeZone: yup
    .string()
    .oneOf(timeZones, "Invalid Time Zone")
    .required("Time Zone is requried"),
});
module.exports.validateLogin = yup.object({
  email: yup
    .string()
    .email()
    .typeError("Must be an email")
    .required("Email is required"),
  password: yup
    .string()
    .typeError("Must be a password")
    .required("Password is required"),
});
