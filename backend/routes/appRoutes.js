const express = require("express");
const {
  imageTestController,
  emailTestController,
  compbineController,
} = require("../controller/testController");
const appRouter = express.Router();

appRouter
  .route("/imageTest")
  .get((req, res) => res.json({ message: "Welcome to test page" }))
  .post(imageTestController);

appRouter
  .route("/emailTest")
  .get((req, res) => res.json({ message: "Welcome to test page" }))
  .post(emailTestController);

module.exports = appRouter;
