const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const sequelize = require("./util/database");

const app = express();

//import models
const Product = require("./models/product");
const User = require("./models/user");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// setup to use user using middleware
app.use((req, res, next) => {
  User.findByPk(1).then((user) => {
    req.user = user; // user --> is seduilize obj with sequalize methods attached to it with users info
    // we can add req but SHOULD NOT EDIT EXISTING FIELDS  EVEN THOUGH ITS POSSIBLE
    next();
  });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// sequelize can create table for models created using it during server start , it will create table only when its NOT Exist in DB
// it also automatically defines relationship

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  .sync({ force: true })
  // .sync()
  .then((result) => {
    // console.log(result);
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      User.create({ name: "admin", email: "admin@test.com" });
    }

    return user;
  })
  .then((user) => {
    // console.log(user);

    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
