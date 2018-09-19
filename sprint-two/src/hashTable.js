if ( typeof module === "object" && typeof module.exports === "object" ) {
  var { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers');
}

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = HashTable;
}