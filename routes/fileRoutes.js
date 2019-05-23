// const router = require("express").Router();
var db = require("../models");

module.exports = function(app) {
  app.get("/api/files", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Files.findAll({
      include: [db.Url]
    }).then(function(dbFiles) {
      res.json(dbFiles);
    });
  });

  app.get("/api/files/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Files.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Url]
    }).then(function(dbFiles) {
      res.json(dbFiles);
    });
  });
  
  app.post("/api/files", function(req, res) {
    db.Files.create(req.body).then(function(dbFiles) {
      res.json(dbFiles);
    });
  });
  
  app.delete("/api/files/:id", function(req, res) {
    db.Files.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFiles) {
      res.json(dbFiles);
    });
  });

};
