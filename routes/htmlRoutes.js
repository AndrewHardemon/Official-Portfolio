//var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/about-me", function(req, res) {
    res.render("about");
  });
  
  app.get("*", function(req, res) {
    res.render("404");
  });
};
