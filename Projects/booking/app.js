const express = require("express");
const path = require("path");

const rootDir = require("./utils/rootDir");

//import controller
const successController = require("./controller/success");
const contactUsController = require("./controller/contactUs.js");
const errorController = require("./controller/error");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

//routes

//home
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// contact us
app.get("/contact", contactUsController.contactUsController);

//message --> /success
app.get("/success", successController);

//404
app.use("/", errorController);

app.listen(3000);
