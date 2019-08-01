// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createRecord: function(cols, vals, cb) {
    orm.createRecord("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateRecord: function(objColVals, condition, cb) {
    orm.updateRecord("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteRecord: function(condition, cb) {
    orm.deleteRecord("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;