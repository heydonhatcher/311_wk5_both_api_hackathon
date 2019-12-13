//requiring express and setting up router
const express = require("express");
const router = express.Router();
//importing function from controller folder
const titlesController = require("../controllers/titles");

//creating routes and calling the functions
//from our controller folder.
router.get("/", titlesController.getTitles);

router.get("/:id", titlesController.getTitlesById);

//:::exporting route so it can be called upon
//outside of this file:::
module.exports = router;
