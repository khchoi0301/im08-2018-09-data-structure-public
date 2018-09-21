if (typeof module === 'object' && typeof module.exports === 'object') {
  var { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers')
}

var HashTable = function () {
  this._limit = 8
  this._storage = LimitedArray(this._limit)
}

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  let tempArr = []

  let findKey = function (that) {
    if (that._storage.get(index) !== undefined) {
      for (let i = 0; i < that._storage.get(index).length; i++) {
        tempArr.push(that._storage.get(index)[i])
        if (that._storage.get(index)[i] === k) {
          return true
        }
      }
      return false
    }
  }

  if (this._storage.get(index) === undefined || findKey(this)) {
    this._storage.set(index, [k, v])
  } else {
    tempArr.push(k, v)
    this._storage.set(index, tempArr)
  }
}

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  // console.log(this._storage.get(index), k)
  for (let i = 0; i < this._storage.get(index).length; i+=2) {
    if (this._storage.get(index)[i] === k) {
      return this._storage.get(index)[i + 1]
    }
  }
}

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  this._storage.set(index, [])
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = HashTable
}
