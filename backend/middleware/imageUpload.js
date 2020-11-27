const { request } = require("express");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: function (request, file, next) {
    next(null, "./images/");
  },
  filename: function (request, file, next) {
    next(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter: (request, file, next) => {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      next("only upload files with jpg, jpeg, png format", false);
    }
    next(null, true);
  },
}).single("myfiles");

module.exports = {
  upload,
};
