// const http = require("http");

const express = require("express");

//express app
const app = express();

//middle ware
app.use((req, res, next) => {
  console.log("In the middlewere");
  next(); //allow to go to next middleware in lines
});

app.use((req, res, next) => {
  console.log("In the Another middlewere");

  res.send("<html><h1>Hello from express</h1></html>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
