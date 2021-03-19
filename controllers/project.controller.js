"use strict";

var projectController = {
    home: function(request, response) {
        return response.status(200).send({
            message: "I'm home!"
        })
    },
    test: function(request, response) {
        return response.status(200).send({
            message: "Just testing projects controller!"
        })
    },
};

module.exports = projectController;