const express = require("express");
const bodyParser = require("body-parser");

//create express app
const app = express();

//import routes
const login = require("./routes/login");
const chatApp = require("./routes/chat");

app.use(bodyParser.urlencoded({ extended: false }));

//create login
app.use(login);

//main app
app.use(chatApp);

app.listen(3000);
