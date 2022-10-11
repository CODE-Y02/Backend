// const http = require("http");

const express = require("express");

//express app
const app = express();

//middle ware

app.use("/", (req, res, next) => {
  console.log("MiddleWare 1 always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("MiddleWare 2");
  res.send("<h1>add-product</h1>");
});

app.use("/", (req, res, next) => {
  console.log("MiddleWare 3");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
