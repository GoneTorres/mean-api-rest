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
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Routes
app.use('/project', projectRoutes);

// export
module.exports = app;