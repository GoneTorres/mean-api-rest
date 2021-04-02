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
                    message: "No se pudo guardar el proyecto",
                });

            return response.status(200).send({ project: projectStored });
        });
    },
    getProject: function(request, response) {
        var projectId = request.params.id;

        projectModel.findById(projectId, (err, project) => {
            if (err)
                return response.status(500).send({
                    message: "Error al obtener los datos (" + err + ")",
                });
            if (!project)
                return response.status(404).send({
                    message: "No se encontró el proyecto",
                });

            return response.status(200).send({ project });
        });
    },

    getProjects: function(request, response) {
        projectModel.find({}).sort('year').exec((err, projects) => {
            if (err)
                return response.status(500).send({
                    message: "Error al obtener los datos (" + err + ")",
                });
            if (!projects)
                return response.status(404).send({
                    message: "No se encontró el proyecto",
                });

            return response.status(200).send({ projects });
        });
    },

    updateProject: function(request, response) {
        var projectId = request.params.id;

        var updatedProject = request.body;

        projectModel.findByIdAndUpdate(projectId, updatedProject, { new: true }, (err, projectUpdated) => {
            if (err)
                return response.status(500).send({
                    message: "Error al actualizar los datos (" + err + ")",
                });
            if (!projectUpdated)
                return response.status(404).send({
                    message: "No se encontró el proyecto",
                });

            return response.status(200).send({ project: projectUpdated });
        });

    },

    deleteProject: function(request, response) {
        var projectId = request.params.id;

        projectModel.findByIdAndDelete(projectId, (err, projectDeleted) => {
            if (err)
                return response.status(500).send({
                    message: "Error al borrar los datos (" + err + ")",
                });
            if (!projectDeleted)
                return response.status(404).send({
                    message: "No se encontró el proyecto",
                });

            return response.status(200).send({ projectDeleted });
        });
    },

    uploadImage: function(request, response) {
        var projectId = request.params.id;
        var fileName = 'new image';

        if (request.files) {
            var filePath = request.files.image.path;
            var fileSplit = filePath.split('\\');
            fileName = fileSplit[1];

            projectModel.findByIdAndUpdate(projectId, { image: fileName }, (err, projectUpdated) => {
                if (err)
                    return response.status(500)({ message: 'La imagen no se ha subido' });

                if (!projectUpdated)
                    return response.status(404).send({
                        message: "No se encontró el proyecto",
                    });

                return response.status(200).send({ project: projectUpdated });

            })
        } else {
            return response.status(500).send({
                message: "Imagen no subida",
            });
        }
    }
};

module.exports = projectController;