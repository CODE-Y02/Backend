const http = require("http");

const express = require("express");

//express app
const app = express();

const server = http.createServer(app);

server.listen(3000);
