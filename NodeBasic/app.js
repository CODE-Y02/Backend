// we name root server file as server.js or app.js

// we need to import module to import their functanility

const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    // process.exit(); // used to de attach event 


    //creating response
    res.setHeader('Content-Type', "text/html");
    res.write("<html>");
    res.write("<head><title>My first Site</title></head>")
    res.write("<body><h1>Hello from My  NOde server :) </h1></body>")
    res.write("</html>")
    res.end()
});
// create server acts as event listner 
server.listen(3000)  