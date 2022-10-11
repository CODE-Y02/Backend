const express = require("express");
const bodyParser = require("body-parser");

//import routes
const login = require("./routes/login");
const msg = require("./routes/chats");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(login);

app.use(msg);

//listen to port
app.listen(3000);
