//requiring express and setting up router
const express = require("express");
const router = express.Router();
//importing function from controller folder
const salariesController = require("../controllers/salaries");

//creating routes and calling the functions
//from our controller folder.
router.get("/", salariesController.getSalaries);

router.get("/:id", salariesController.getSalariesById);

router.get("/firstname/:first_name", salariesController.getSalariesBySalary);

//:::exporting route so it can be called upon
//outside of this file:::
module.exports = router;
