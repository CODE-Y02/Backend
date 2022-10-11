//contains admin routs logic that only admin can visit

const express = require("express");

// we can name router anything
const router = express.Router();

//when we have different method we can use same path url

// /admin/add-product   ==> GET
router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/admin/add-product" method="post">
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

// /admin/add-product   ==> POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
