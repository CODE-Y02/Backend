//impost fs
const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  //we will always have cart , we cant create cart for each product

  static addProduct(id, productPrice) {
    //fetch previous cart from db
    fs.readFile(p, (err, fileData) => {
      let cart = {
        products: [],
        totalPrice: 0,
      };
      if (!err) {
        cart = JSON.parse(fileData);
      }

      //analyze cart ==> find if product already exist
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      // add product / increase its quentity if already in cart
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;

        //update cart
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = {
          id: id,
          qty: 1,
        };
        //update cart
        cart.products = [...cart.products, updatedProduct];
      }

      //update price
      cart.totalPrice += +productPrice; //conververt str to num by +before productPrice

      // save to db
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static deleteproduct(id, cb) {
    fs.readFile(p, (err, cartContent) => {
      if (err) {
        return;
      }
      //parse
      cartContent = JSON.parse(cartContent);

      let updatedCart = {
        products: [],
        totalPrice: 0,
      };
      let deletedProd = {};
      let oldProds = cartContent.products;
      for (let i = 0; i < oldProds.length; i++) {
        if (oldProds[i].id == id) {
          deletedProd = oldProds[i];
        } else {
          updatedCart.products.push(oldProds[i]);
        }
      }
      //update price
      let oldTotal = cartContent.totalPrice;
      updatedCart.totalPrice = oldTotal - deletedProd.price * deletedProd.qty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        if (err) console.log("err in del cart", err);

        //when its done writing callback
        cb();
      });
    });
  }
};
