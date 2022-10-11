const bodyParser = require("body-parser");
const express = require("express");

const app = express();

//parse req before any middle ware
app.use(bodyParser.urlencoded({ extended: false })); //this url encoded just parse encoded url

//middleware

// add product
app.use("/add-product", (req, res, next) => {
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

//product
//if we use "use" it will fire for both post and get but we can use "post" / "get" instead
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

//default
app.use("/", (req, res, next) => {
  res.send(`<h1>hello From Express</h1>`);
});

app.listen(3000);

//Task 3
/**
 * Create the /add-product route which shows a form. Once user has filled , console log it after parsing it using bodyparser.
What is the body parser used for?
  to parse request i.e to convert encoded request into readable useful format
  
Now add one more input tag in the add product page so that user can input size of the product.
When the user clicks on submit parse both the input tags and show it in console.
 */
