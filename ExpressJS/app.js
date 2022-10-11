const bodyParser = require("body-parser");
const express = require("express");

const app = express();

//parse req before any middle ware
app.use(bodyParser.urlencoded({ extended: false })); //this url encoded just parse encoded url

//middleware

// add product
app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="post"><input type="text" name="title" /><button type="submit">Add</button></form>`
  );
});

//product
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

//default
app.use("/", (req, res, next) => {
  res.send(`<h1>hello From Express</h1>`);
});

app.listen(3000);
