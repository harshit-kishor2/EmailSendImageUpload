const express = require("express");
const { imageTestController } = require("../controller/testController");
const { upload } = require("../middleware/imageUpload");
const appRouter = express.Router();

appRouter.route("/imageTest").post(upload, imageTestController);

module.exports = appRouter;
