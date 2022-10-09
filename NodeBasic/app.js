// we name root server file as server.js or app.js

// we need to import module to import their functanility

const http = require("http");

const routes = require("./routes.js");

const server = http.createServer(routes);

server.listen(3000);
