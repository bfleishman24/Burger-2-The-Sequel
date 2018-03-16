var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({
    include: [db.Post]
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  db.Burger.create({
    "burger_name": req.body.burger_name,
    "devoured": req.body.devoured,

  }).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});

// put route -> back to index
router.put("/burgers/update/:id", function(req, res) {
  db.Burger.update({
    where: {
      id: req.params.id},
      devoured: true,
  }).then(function(results){
    // Send back response and let page reload from .done in Ajax
    res.json("/");
  });
});

module.exports = router;
