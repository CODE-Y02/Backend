const fs = require("fs");
const path = require("path");
const Cart = require("./cart");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price, id = null) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        //means product already exist , update it
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );
        products[existingProductIndex] = this;
      } else {
        this.id = Math.random().toString();
        products.push(this);
      }

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }

  static deleteproductbyID(id, cb) {
    getProductsFromFile((products) => {
      //in this array filter it by id
      products = products.filter((productObj) => productObj.id !== id);
      // in alternate approach we can use for loop
      // let remaningProd = [];
      // for (let i = 0; i < products.length; i++) {
      //   if (products[i].id !== id) remaningProd.push(products[i]);
      // }

      // console.log(remaningProd);

      // console.log("clicked del", id);

      //save remaning product
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log("err in del product", err);

        console.log("in dele prod", err);

        //also remove product from cart
        Cart.deleteproduct(id, cb);
      });
    });
  }
};
