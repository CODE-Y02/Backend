const path = require("path");

const rootDir = require("../utils/rootDir");

exports.contactUsController = (req, res) => {
  // 100 -200 lines of code
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};
