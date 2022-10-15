const path = require("path");

const rootDir = require("../utils/rootDir");

const errorController = (req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
};

module.exports = errorController;
