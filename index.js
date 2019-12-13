//importing express
const express = require("express");
//making express easier to call through app
const app = express();
//calling employee routes
const employeeRoutes = require("../routes/employees");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
//sending message to website so it's not blank
app.get("/", (req, res) => {
  res.send("YEET! Welcome to our API!");
});

//having server listen on port 4001
//this is started with npm because of start
//script in package.json
app.listen(4001, () => {
  console.log("YEET through port 4001");
});
