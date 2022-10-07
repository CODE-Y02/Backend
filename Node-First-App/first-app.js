console.log("Helllo Node JS");

// to access file system use require('fs')
const fs = require("fs");

// write file or crete new file --> ( file name , file content);
fs.writeFileSync("hello.txt", "Hello from Node JS");
