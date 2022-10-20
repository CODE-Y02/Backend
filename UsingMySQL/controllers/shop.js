const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows]) => {
    res.render("shop/product-list", {
      prods: rows,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // console.log(prodId);
  Product.findById(prodId, (product) => {
    // console.log(product);
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
  // res.redirect("/");
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then((results) => {
    let products = results[0]; // rows in db produvts table
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.postCart = (req, res, next) => {
  //get prodID
  const prodId = req.body.productId;
  // console.log(prodId);
  //find product in products is in stock if yess then add to cart
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });

  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
