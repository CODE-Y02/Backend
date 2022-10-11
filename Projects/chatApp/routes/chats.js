const express = require("express");

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <form
        action="/"
        method="post"
        onsubmit='document.getElementById("username").value =
      localStorage.getItem("username")'
      >
        <label for="msg">Enter message</label>
        <input type="text" id="msg" />
        <input type="hidden" id="username" />
        <button type="submit">Send</button>
      </form>
    `);
});

module.exports = router;
