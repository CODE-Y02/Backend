// we name root server file as server.js or app.js

// we need to import module to import their functanility

const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req)
});

server.listen(3000) 