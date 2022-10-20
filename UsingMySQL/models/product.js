const Cart = require("./cart");

// import db promise from dabase config file
const db = require("../util/database");

module.exports = class Product {
  constructor(title, imageUrl, description, price, id = null) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static fetchAll() {
    // we are returning promise we can use .then catch with it
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {}

  static deleteproductbyID(id) {}
};
