'use strict';

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// routes files

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Routes
app.get('/', (request, response) => {
    response.status(200).send(
        "<h1>Hello World!! Live from NodeJS API REST</h1>"
    )
});

app.get('/test', (request, response) => {
    response.status(200).send({
        message: "Hello World!! Live from NodeJS API REST"
    })
});


// export
module.exports = app;