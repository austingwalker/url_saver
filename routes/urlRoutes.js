// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/url", function(req, res) {
    var query = {};
    if (req.query.file_id) {
      query.FileId = req.query.file_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Url.findAll({
      where: query,
      include: [db.Files]
    }).then(function(dbUrl) {
      res.json(dbUrl);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/url/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Url.findAll({
      where: {
        FileId: req.params.id
      },
      include: [db.Files]
    }).then(function(dbUrl) {
      res.json(dbUrl);
    });
  });

  // POST route for saving a new post
  app.post("/api/url", function(req, res) {
    console.log("URL req.body" + JSON.stringify(req.body, null, 2))
    db.Url.create(req.body).then(function(dbUrl) {
      res.json(dbUrl);
    }).catch(function(err){
      res.send(err)
      console.log("Error -----------------")
      console.log(err)
      console.log(err.message)
      console.log("Error -----------------")
    })
  });

  // DELETE route for deleting posts
  app.delete("/api/url/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUrl) {
      res.json(dbUrl);
    });
  });

  // PUT route for updating posts
  app.put("/api/url", function(req, res) {
    db.Url.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUrl) {
      res.json(dbUrl);
    });
  });
};
