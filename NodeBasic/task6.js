// Create a server , run it on port 4000 and console log your name.

const http = require('http');

http.createServer((req, res) => {
    console.log("Yatharth ")
}).listen(4000)