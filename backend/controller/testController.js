const mongoose = require("mongoose");
const File = mongoose.model("file");
const { sendEmail } = require("../middleware/sendEmail");
require("dotenv").config();

//Image Controller
const imageTestController = (request, response, next) => {
  try {
    const file = new File();
    file.email = request.body.email;
    file.imagePath = request.file;
    file.save().then(() => {
      sendEmail({
        from: `Harshit Kishor ${process.env.EMAIL}`, // sender address
        to: request.body.email, // list of receivers
        subject: "Hello User", // Subject line
        text: "Image saved successfull", // plain text body
        //  html: "<b>Hello world</b>", // html body
      });
      response.send({ message: "uploaded successfully" });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  imageTestController,
};
