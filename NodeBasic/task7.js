// tsk 
//Explain the nodejs event driven architecture.
/*
whenever we create server ad attatch request listner to it 
this requestLIstner() works as event listner that listn to every request ; 
this listner creates a process in memory that works continusly like infinite loop same as event loop 
this listner event will listen to any request to server and 
we can only stop server using something called process.exit()
*/

// How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?
/*
requestes are treated as callbacks in node js and when we receive a request it register event in event loop as soon as request is resolved it will send resaponse its same concept of event loop and event queue and call stack 
*/

//What does process.exit do?
/*
it is used to stop event loop 
*/

//What does req.url , req.header and req.method contain?
/*
req.url --> gives url
req.header --> gives header data 
req.method --> gives method info
*/



//Like the youtuber return a response like "Welcome to my Node Js project". Just follow the way he writes code in 30th video.

const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write("<head> <title>My website </title>   </head>")
    res.write("<body>")
    if (req.url == "/" || req.url == "/node") {
        res.write("<h1> Welcome to my Node Js project   </h1>")
    }
    else if (req.url == "/home") {
        res.write("<h1> Welcome home   </h1>")
    }
    else if (req.url == "/about") {
        res.write("<h1> Welcome to About Us page </h1>")
    }
    res.write("</body>")
    res.write('</html>')
    res.end()


})

server.listen("3000")


