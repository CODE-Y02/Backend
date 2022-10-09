const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // locahgost --> form pg
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      //   res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write(`<head><title>My site</title></head>`);
      res.write("<body>");
      res.write(`<h1>${data}</h1>`);

      res.write(
        `<form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">SEND</button></form>`
      );

      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    //get response
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      let parseBody = Buffer.concat(body).toString();
      let msg = parseBody.split("=")[1];
      fs.writeFile("message.txt", msg, (err) => {
        if (err) console.log(err);
        res.statusCode = 302; //redirect;
        res.setHeader("Location", "/");

        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Site</title></head>");
    res.write("<body><h1>Hello from My  NOde server :) </h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
