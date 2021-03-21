"use strict";

var projectModel = require("../models/project.model");

var projectController = {
    home: function(request, response) {
        return response.status(200).send({
            message: "I'm home!",
        });
    },
    test: function(request, response) {
        return response.status(200).send({
            message: "Just testing projects controller!",
        });
    },
    saveProject: function(request, response) {
        var project = new projectModel();

        var params = request.body;

        project.name = params.name;
        project.description = params.description;
        project.year = params.year;
        project.category = params.category;
        project.langs = params.langs;
        project.image = null;

        console.log(project);

        project.save((err, projectStored) => {
            if (err)
                return response.status(500).send({
                    message: "Error al guardar (" + err + ")",
                });
            if (!projectStored)
                return response.status(404).send({
                    message: "No se pudo guardar el projecto",
                });

            return response.status(200).send({ project: projectStored })
        });

    },
};

module.exports = projectController;