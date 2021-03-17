"use strict";

var mongoose = require("mongoose");

var schema = mongoose.Schema;

var projectSchema = schema({
    name: String,
    description: String,
    year: Number,
    category: String,
    langs: [String]
})

module.exports = mongoose.model('Project', projectSchema);