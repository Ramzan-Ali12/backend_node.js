const nodemailer = require("nodemailer");
// createTransport using nodemailer
const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});
// send email using nodemailer
const nodeMailer = async ({ to, subject, html }) => {
  let emailSent = true;
  try {
    // call the transported method
    await mailTransporter.sendMail({
      to,
      from: process.env.NODEMAILER_USER,
      subject,
      html,
    });
  } catch (err) {
    emailSent = false;
    console.error("msg: Email Sending Failed!", err);
  }

  return emailSent;
};
// timeZones 
const timeZones = [
  "Asia/Karachi",
  "Asia/Dubai",
  "Asia/Riyadh",
  "Asia/Muscat",
  "Asia/Qatar",
];
// exports the module
module.exports = { timeZones, nodeMailer };
