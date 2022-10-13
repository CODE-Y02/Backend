const bodyParser = require("body-parser");
const express = require("express");

const path = require("path");

//import admin routes
const adminRoutes = require("./routes/admin.js");

//import shop route
const shopRoutes = require("./routes/shop");

const app = express();

//parse req before any middle ware
app.use(bodyParser.urlencoded({ extended: false })); //this url encoded just parse encoded url

// using router
// add-product route
// we can use common first part of path here
app.use("/admin", adminRoutes);

// shop route --> order of route doesnot matter if we are not using 'use' in route file  maters
app.use(shopRoutes);

// adding 404
app.use("/", (req, res, next) => {
  // res.status(404);
  // res.send(`<h1>Page  NOT Found</h1>`);

  //can also be written as
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
