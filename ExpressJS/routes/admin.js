//contains admin routs logic that only admin can visit

const path = require("path");
const express = require("express");

// we can name router anything
const router = express.Router();

//when we have different method we can use same path url

// admin/add-product   ==> GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

// admin/add-product   ==> POST
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
