// we name root server file as server.js or app.js

// we need to import module to import their functanility

const http = require("http");

const routes = require("./routes.js");
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
