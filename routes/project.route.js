'use strict'

var express = require("express");

var projectController = require("../controllers/project.controller");

var router = express.Router();

router.get("/home", projectController.home);
router.post("/test", projectController.test);

module.exports = router;