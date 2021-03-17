"use strict";

const { mongo } = require("mongoose");

var mongoose = require("mongoose");
var app = require('./app');
var port = 30700;

mongoose.set("useUnifiedTopology", true);
mongoose.Promise = global.Promise;

mongoose
    .connect("mongodb://localhost:27017/portfolio", { useNewUrlParser: true })
    .then(() => {
        console.log("Connection to database successful!");

        // Server creation
        app.listen(port, () => { console.log('Server up and running at: http://localhost:30700') })

    })
    .catch((err) => console.log(err));