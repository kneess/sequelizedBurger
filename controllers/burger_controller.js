var db = require("../models")
module.exports = function(app) {


  app.get("/", function(req, res) {
    db.Burger.findAll({ raw: true }).then(function(data) {
        // console.log(burgerData)
        var hbsObject = {
            burgers: data
        }
        // console.log(hbsObject)
    res.render("index",hbsObject)
    })
  });

  // app.get("/api/burgers", function(req,res) {
  //   db.Burger.findAll({}).then(function(data) {
  //     res.json(data)
  //     // console.log(data)
  //   });
  // });


  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data) {
      // console.log(data)
      res.json(data);
    });
  });

  app.put("/api/burgers", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger)
    })
    .catch(function(err) {
      res.json(err)
    });
  });

}
// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//       var hbsObject = {
//         burgers: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });
  
//   router.post("/api/burgers", function(req, res) {
//     burger.insertOne([
//       "burger_name", "devoured"
//     ], [
//       req.body.name, req.body.devoured
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });
  
//   router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
//   console.log(req.body.devoured);
//     burger.updateOne({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
//   // Export routes for server.js to use.
//   module.exports = router;
  