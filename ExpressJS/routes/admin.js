//contains admin routs logic that only admin can visit

const express = require("express");

// we can name router anything
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="post">
      <label for="product-title">Product Name</label>
      <input type="text" name="title" id="product-title" />
      <label for="product-size">Size</label>
      <input type="number" name="size" id="product-size" /><button
        type="submit"
      >
        Add
      </button>
    </form>`
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
