var express = require("express");
var bodyParser = require("body-parser");
// Set Handlebars.
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();
var db = require("./models")
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/burger_controller.js")(app)
require("./controllers/burger-html-routes")(app)
// var routes = require("./controllers/burger_controller.js");

// app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
