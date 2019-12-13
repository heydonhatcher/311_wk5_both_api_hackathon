//importing express
const express = require("express");
//making express easier to call through app
const app = express();
//calling employee routes
const employeeRoutes = require("./routes/employees");
const salaryRoutes = require("./routes/salaries");
const departmentRoutes = require("./routes/departments");
const titlesRoutes = require("./routes/titles");

const port = process.env.PORT || 4001;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/employees", employeeRoutes);
app.use("/salaries", salaryRoutes);
app.use("/departments", departmentRoutes);
app.use("/titles", titlesRoutes);
//sending message to website so it's not blank
app.get("/", (req, res) => {
  res.send("YEET! Welcome to our API!");
});

//having server listen on port 4001
//this is started with npm because of start
//script in package.json
app.listen(port, () => {
  console.log("YEET through port 4001");
});
