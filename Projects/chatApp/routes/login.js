const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
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

module.exports = router;
