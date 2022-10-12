const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//create login
app.get("/login", (req, res, next) => {
  res.send(`
    <form
  action="/"
  method="post"
  onsubmit='localStorage.setItem("username", document.getElementById("username").value)'
>
  <label for="username"> Enter Username </label>
  <input type="text" id="username" name="username"/>
  <button type="submit">Login</button>
</form>`);
});

app.get("/", (req, res, next) => {
  //read from file
  fs.readFile("allChats.txt", (error, data) => {
    if (error && !data) data = "No Messages";
    else if (error) console.log(error); // when theres data but some error occur

    //data -- > all msg
    res.send(`
    <p>${data}</p>
    <form
    action="/"
    method="post"
    onsubmit='  document.getElementById("username").value = localStorage.getItem("username")'
  >
    <label for="msg"> Enter Message </label>
    <input type="text" id="msg" name="message" />
    <input type="hidden" id="username" name="username" />
    <button type="submit">Send</button>`);
  });
});

app.post("/", (req, res) => {
  // when we do not need next in args we can skip

  if (!req.body.username) return res.redirect("/login");
  if (!req.body.message) return res.redirect("/");

  fs.writeFile(
    "allChats.txt",
    `${req.body.username}:${req.body.message} \s`,
    { flag: "a" },
    (err) => {
      if (err) console.log(err);

      res.redirect("/");
    }
  );
});

app.listen(3000);
