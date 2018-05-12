// var orm = require("../config/orm.js");

// var burgers = {
//     selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     insertOne: function(cols, vals, cb) {
//       orm.insertOne("burgers", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     updateOne: function(objColVals, condition, cb) {
//       orm.updateOne("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
//   };

//   module.exports = burgers;


  module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      // Giving the Burger model a name of type STRING
      burger_name: DataTypes.STRING,
      devoured: { type: DataTypes.BOOLEAN,
          defaultValue: false }  
      });

    return Burger;
  };
  