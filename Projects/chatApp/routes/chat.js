const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
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

router.post("/", (req, res) => {
  // when we do not need next in args we can skip

  if (!req.body.username) return res.redirect("/login");
  if (!req.body.message) return res.redirect("/");

  fs.writeFile(
    "allChats.txt",
    `${req.body.username}:${req.body.message}   `,
    { flag: "a" },
    (err) => {
      if (err) console.log(err);

      res.redirect("/");
    }
  );
});

module.exports = router;
