// shop router

const express = require("express");

// we can name router anything
const router = express.Router();

// using get and post insted of use make sures that " path " is exact match
router.get("/", (req, res, next) => {
  res.send(`<h1>hello From Express</h1>`);
});

module.exports = router;
