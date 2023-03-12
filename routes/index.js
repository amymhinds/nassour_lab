var express = require("express");
var router = express.Router();
app.use(express.static("public"));

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/home", function(req, res, next) {
  res.redirect("/");
});

module.exports = router;
