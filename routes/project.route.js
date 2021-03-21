'use strict'

var express = require("express");

var projectController = require("../controllers/project.controller");

var router = express.Router();

router.get("/home", projectController.home);
router.post("/test", projectController.test);
router.post("/saveProject", projectController.saveProject);
router.get("/project/:id", projectController.getProject);
router.get("/all", projectController.getProjects);
router.put("/updateProject/:id", projectController.updateProject);
router.delete("/deleteProject/:id", projectController.deleteProject);

module.exports = router;