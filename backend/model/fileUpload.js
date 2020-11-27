var mongoose = require("mongoose");

const fileUpload = new mongoose.Schema({
  imagePath: {},
  email: { type: String },
});

mongoose.model("file", fileUpload);
