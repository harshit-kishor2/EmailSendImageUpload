const mongoose = require("mongoose");
const File = mongoose.model("file");
const nodemailer = require("nodemailer");
const { upload } = require("../middleware/imageUpload");
const { sendEmail } = require("../middleware/sendEmail");
require("dotenv").config();

//Image Controller
const imageTestController = (request, response, next) => {
  try {
    upload(request, response, () => {
      //    console.log("Request ---", request.body);
      console.log("Request file ---", request.file); //Here you get file.
      const file = new File();
      file.imagePath = request.file;
      file.save().then(() => {
        response.send({ message: "uploaded successfully" });
      });
    });
  } catch (error) {
    next(error);
  }
};

//Email Controller
const emailTestController = (request, response, next) => {
  try {
    sendEmail({
      from: `Harshit Kishor ${process.env.EMAIL}`, // sender address
      to: request.body.email, // list of receivers
      subject: "Hello World✔", // Subject line
      text: "Image saved successfull", // plain text body
      //  html: "<b>Hello world</b>", // html body
    });

    response.send({ message: "Send successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  imageTestController,
  emailTestController,
};
