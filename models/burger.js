
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
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

module.exports = burger;