const express = require("express");

const router = express.Router();

// login is get request
router.get("/login", (req, res, next) => {
  res.send(`
    <form
      action="/"
      method="post"
      onsubmit='localStorage.setItem("username", document.getElementById("username").value)'
    >
      <label for="username">Enter User Name</label>
      <input type="text" name="username" id="username" />
      <button type="submit">Login</button>
    </form>
    `);
});

//export
module.exports = router;
