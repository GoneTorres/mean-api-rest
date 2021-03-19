'use strict';

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// routes files
var projectRoutes = require("./routes/project.route");

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Routes
app.use('/project', projectRoutes);

// export
module.exports = app;