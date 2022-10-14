const express = require("express");
const path = require("path");

const rootDir = require("./utils/rootDir");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

//routes

//home
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// contact us
app.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

//message --> /success
app.get("/success", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact_Success.html"));
});

//404
app.use("/", (req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
