const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }
  //geting product info
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      // console.log(product);
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  //updated details
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  Product.findByPk(prodId)
    .then((product) => {
      product.title = title;
      product.price = price;
      product.description = description;
      product.imageUrl = imageUrl;

      return product.save();
    })
    .then(() => {
      console.log("PRODUCT UPDATED");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  // const prodId = req.body.productId;
  // now get product from url
  const prodId = req.params.productId;

  //way 1
  // Product.findByPk(prodId)
  //   .then((product) => {
  //     return product.destroy();
  //   })
  //   .then(() => {
  //     res.redirect("/admin/products");
  //   })
  //   .catch((err) => console.log(err));

  //way 2
  Product.destroy({
    where: {
      id: prodId,
    },
  })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
