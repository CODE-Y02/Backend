// shop router

const path = require("path");

const express = require("express");

// we can name router anything
const router = express.Router();

// using get and post insted of use make sures that " path " is exact match
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"), (err) => {
    console.log(err);
  });
});

module.exports = router;

// making path  D:\projects\Sharpnener Projects\GithubSharpnener\Backend\NodeJS\ExpressJS\views\shop.html
// console.log("path ====>  ", path.join(__dirname, "../", "views", "shop.html"));
