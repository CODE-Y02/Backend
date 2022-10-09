const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Site</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'> <button type = 'submit'>Submit</button></form></body>"
    );
    //name --> acts as key for data send
    res.write("</html>");
    return res.end();
  }
  //redirecting
  if (url === "/message" && method === "POST") {
    const body = []; // collecting buffer of chunks in array

    // we will push buffer of chunks from data stream into body arr
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    //when data stream end starting parsing buffer
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(parseBody)

      //split parsebody str into array at = sign and sevve msg i.e idx 1
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        //writefile do not block code execution
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  //creating response
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Site</title></head>");
  res.write("<body><h1>Hello from My  NOde server :) </h1></body>");
  res.write("</html>");
  res.end();
};

// way2 to export

// we can export multiple thing as obj
// module.exports = {
//   handler: requestHandler,
//   someText: " Some hard coded text",
// };

//alternative way
// module.exports.handler = requestHandler;
// module.exports.someText = " Some hard coded text";

//short cut for above code
exports.handler = requestHandler;
exports.someText = " Some hard coded text";
