const nodemailer = require("nodemailer");
const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});
const nodeMailer = async ({ to, subject, html }) => {
  let emailSent = true;
  try {
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

const timeZones = [
  "Asia/Karachi",
  "Asia/Dubai",
  "Asia/Riyadh",
  "Asia/Muscat",
  "Asia/Qatar",
];
module.exports = { timeZones, nodeMailer };
