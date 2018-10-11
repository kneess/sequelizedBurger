// var path = require("path");
// var db = require("../models")
// module.exports = function(app) {

//     app.get("/", function(req, res) {
//         db.Burger.findAll({
//             attributes: ["id", "burger_name"]
//         }).then(function(data) {
//             console.log(data[0].dataValues)
//             var hbsObject = {
//                 burgers: data
//             }

//         res.render("index",hbsObject)
//         })
//       });
    
//     }