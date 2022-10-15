const path = require("path");

const rootDir = require("../utils/rootDir");

const successController = (req, res) => {
  //   console.log(req.query.email);
  res.sendFile(path.join(rootDir, "views", "contact_Success.html"));
};

module.exports = successController;
