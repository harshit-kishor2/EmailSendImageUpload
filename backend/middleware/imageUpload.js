const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "./public/",
  filename: function (request, file, next) {
    next(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("myfile");

module.exports = {
  Storage,
  upload,
};
