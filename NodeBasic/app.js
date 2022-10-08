// we name root server file as server.js or app.js

// we need to import module to import their functanility

const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    // process.exit(); // used to de attach event 
});
// create server acts as event listner 
server.listen(3000)  