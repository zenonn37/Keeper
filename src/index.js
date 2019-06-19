// var http = require("http");

const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ msg: "hello node" }));

//define
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contact"));

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server Started ${PORT}`));
