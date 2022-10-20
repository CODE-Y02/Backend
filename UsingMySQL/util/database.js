const mysql = require("mysql2");

//we have 2 ways to create connection , one is create single connection for each query and other is creating pool
// creating pool is efficient

// pool manages multiple connction
const pool = mysql.createPool({
  host: "localhost",
  user: "root", //by default
  database: "node-complete", //db name or schema name
  password: "King@Ninja@123",
});

module.exports = pool.promise();
