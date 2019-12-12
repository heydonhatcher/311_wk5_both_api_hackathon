//requiring express and setting up router
const express = require("express");
const router = express.Router();
//importing function from controller folder
const employeeController = require("../controllers/employees");

//creating routes and calling the functions
//from our controller folder.
router.get("/", employeeController.getEmployees);

router.get("/:id", employeeController.getEmployeesById);

router.get(
  "/firstname/:first_name",
  employeeController.getEmployeesByFirstName
);

//:::exporting route so it can be called upon
//outside of this file:::
module.exports = router;
