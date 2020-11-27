const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmail = (mailOptions) => {
  transporter.sendMail(mailOptions, function (error, info, next) {
    if (error) {
      next(error);
    } else {
      console.log("Email sent: " + info.response);
      next(null);
    }
  });
};

module.exports = { sendEmail };
