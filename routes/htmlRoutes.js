const express = require('express');
const router = express.Router();


router.get("/", function(req, res, next) {
  res.render('index');
});

router.get("/about-me", function(req, res, next) {
  res.render("about");
});

router.get("/projects", function(req, res, next) {
  res.render("projects");
});

router.get("*", function(req, res, next) {
  res.render("404");
});

module.exports = router;
