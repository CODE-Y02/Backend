const Cart = require("./cart");

// import db promise from dabase config file
const db = require("../util/database");
const e = require("express");

module.exports = class Product {
  constructor(title, imageUrl, description, price, id = null) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    if (this.id) {
      // product alread exist update it
      return db.execute(
        `UPDATE products SET title=?,description=?,price=?,imageUrl=? WHERE id=?`,
        [this.title, this.description, this.price, this.imageUrl, this.id]
      );
    } else {
      // create new product
      return db.execute(
        `INSERT INTO products (title,description,price,imageUrl) VALUES (?,?,?,?)`,
        [this.title, this.description, this.price, this.imageUrl]
      );
    }
  }

  static fetchAll() {
    // we are returning promise we can use .then catch with it
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE id=?", [id]);
  }

  static deleteproductbyID(id) {
    return db.execute("DELETE FROM products WHERE id=?", [id]);
  }
};
