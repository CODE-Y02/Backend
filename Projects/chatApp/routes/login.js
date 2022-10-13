const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(`
      <form
    action="/login"
    method="POST"
    onsubmit='localStorage.setItem("username", document.getElementById("username").value)'
  >
    <label for="username"> Enter Username </label>
    <input type="text" id="username" name="username"/>
    <button type="submit">Login</button>
  </form>`);
});

router.post("/login", (req, res, next) => {
  console.log("new user logged in ");
  res.redirect("/message");
});

module.exports = router;
