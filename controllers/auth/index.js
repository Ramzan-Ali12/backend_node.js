const User = require("../../models/users");
const bcrypt = require("bcrypt");
const { nodeMailer } = require("../../utils/helper");
const sendVerificationEmail = require("../../email-templates/varification-code");

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase();
    let user = null;
    user = await User.findOne({
      email,
    });
    // check if the user not found
    if (!user) {
      return res.status(404).send({ msg: "Invalid Email!" });
    }
    //  check the user.password not found
    if (!user.password)
      return res.status(405).send({
        msg: "Please verify your email!",
      });
    // hash and compare the user password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).send({ msg: "Invalid Password!" });
    }
    const data = {
      id: user._id,
      email: user.email,
      name: user.name,
      status: user.status,
    };
    const token = user.generateToken();

    return res
      .header("authorization", token)
      .status(200)
      .send({ msg: "Login Successful", data });
  } catch (error) {
    res.status(500).send({ msg: err.message });
  }
};
const signUp = async (req, res) => {
  try {
    let { name, email, password, status, timeZone } = req.body;
    // convert email to lowerCase
    email = email.toLowerCase();
    // check the email in db
    const checkUserEmail = await User.findOne({
      email,
    });

    if (checkUserEmail)
      return res
        .status(404)
        .send({ msg: "Account Already Associated With This Email!" });
    // generate otp
    const otp = Math.floor(Math.random() * 9000) + 1000;
    const otpAddedAt = new Date();
    // generate salt
    const salt = await bcrypt.genSalt(10);
    // bcrypt to hash password
    password = await bcrypt.hash(password, salt);
    const data = new User({
      name,
      email,
      password,
      status,
      otp,
      otpAddedAt,
      timeZone,
    });
    // save data in db
    await data.save();
    // send email to the user using nodemailer
    const emailSent = await nodeMailer({
      to: `${email}`,
      subject: "CRUD Application",
      html: sendVerificationEmail({ name, code: otp }),
    });
    return res
      .status(200)
      .send({ msg: "Please check your email for otp", emailSent });
    console.log(emailSent);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
module.exports = { login, signUp };
