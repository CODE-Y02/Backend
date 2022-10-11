const express = require("express");

const router = express.Router();

const fs = require("fs");

router.get("/", (req, res, next) => {
  //read from file
  fs.readFile("chats.txt", (err, data) => {
    if (err) data = "No Chats";
    res.send(`
    <p>${data}</p>
    <form
        action="/"
        method="post"
        onsubmit='document.getElementById("username").value =
      localStorage.getItem("username")'
      >
        <label for="msg">Enter message</label>
        <input type="text" id="msg" name="msg"/>
        <input type="hidden" id="username" name="username"/>
        <button type="submit">Send</button>
      </form>
    `);
  });
});

router.post("/", (req, res, next) => {
  // console.log("msg --->>>>>   ", req.body.msg, req.body.username);
  if (req.body.msg && req.body.username) {
    fs.writeFile(
      "chats.txt",
      `${req.body.username} : ${req.body.msg}    `,
      { flag: "a" },
      (err) => {
        if (err) console.log(err);
        else res.redirect("/");
      }
    );
  }
});

module.exports = router;
