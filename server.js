const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

// Requiring models for syncing
var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// const fileRoutes = require("./routes/api/fileRoutes");
// const urlRoutes = require("./routes/api/urlRoutes");

// const fileRoutes = require("./roots/fileRoutes.js");
// // Use apiRoutes
// app.use("/api/files", fileRoutes);
// app.use("/api/url", urlRoutes);

// app.post("/api/files", function(req, res) {
//   console.log("req.body:" + req.body) 
//     db.Files.create(req.body).then(function(dbFiles) {
//       res.json(dbFiles);
//     });
//   });

// const Routes = require("./routes");

// app.use(Routes);

// require("./routes")(app)

require("./routes/fileRoutes.js")(app)
require("./routes/urlRoutes.js")(app)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});