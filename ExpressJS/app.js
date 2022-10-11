const bodyParser = require("body-parser");
const express = require("express");

//import admin routes
const adminRoutes = require("./routes/admin.js");

//import shop route
const shopRoutes = require("./routes/shop");

const app = express();

//parse req before any middle ware
app.use(bodyParser.urlencoded({ extended: false })); //this url encoded just parse encoded url

// using router
//admin route
app.use(adminRoutes);

// shop route --> order oof route doesnot matter if we are not using 'use' in route file  maters
app.use(shopRoutes);

app.listen(3000);
