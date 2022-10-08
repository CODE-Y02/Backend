// Create a server , run it on port 4000 and console log your name.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Yatharth ")
})

//Call the server from the browser and your name would get printed.
server.listen(4000)