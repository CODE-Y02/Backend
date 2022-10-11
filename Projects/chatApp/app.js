//lets build it without nodemon and express;

const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  //req url
  const url = req.url;
  const method = req.method;
  //When the user hits url ==> "/login" .Show a form to the user to enter his username.
  // /login is GET req

  if (url == "/login" && method == "GET") {
    //do login
    res.write("<html>");
    res.write(` <body>
        <form
          action="/"
          method="post"
          onsubmit='localStorage.setItem("username",document.getElementById("username").value)'
        >
          <input type="text" id="username" name="username" />
          <button type="submit">Login</button>
        </form>
      </body>`);
    res.write("</html>");
    return res.end();
  }

  if (url == "/") {
    //chat app

    const bufferArr = [];

    req.on("data", (chunk) => {
      bufferArr.push(chunk);
    });

    req.on("end", () => {
      let parsed = Buffer.concat(bufferArr).toString();
      console.log(parsed);
    });

    //first read file and send as res
    fs.readFile("chats.txt", (err, data) => {
      let chats = "";
      if (err) {
        chats = "No Chats";
      } else {
        chats = data;
      }

      res.write("<html>");
      res.write(`<p>${chats}<p>`);
      res.write(`<form
      action="/"
      method="post"
      onsubmit="document.getElementById('message').value:localStorage.getItem('username')">

      <input type="text" id="message" name="message" />

      <button type="submit">Send</button>
    </form>`);
      res.end();
    });
  }
});

server.listen(3000);
