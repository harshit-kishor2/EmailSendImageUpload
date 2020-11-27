const express = require("express");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();
require("./model/fileUpload");

const routes = require("./routes");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected"));

//Helmet
app.use(helmet());

//BodyParser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Define Routes
routes(app);

app.get("/", (req, res) => res.json({ message: "Welcome to DemoProject" }));

//Handling Errors
app.use((request, response, next) => {
  return next(httpErrors(404, "Invalid API Request!"));
});

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  const status = error.status || 500;
  response.status(status);
  response.json({ error: error });
});

//Start Server
//TODO: manage port number from env
const port = 4401;

const hostname = process.env.HOST;
const server = app.listen(port, hostname, () => {
  console.log("Listening at http://localhost:" + port);
});
server.on("error", console.error);
