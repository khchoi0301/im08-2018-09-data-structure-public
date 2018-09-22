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

  var occupoied = []
  var storageTemp = []
  var that = this

  this._storage.each(function (item, idx, storage) {
    if (item !== undefined) {
      occupoied.push(item)
    }
    if (occupoied.length >= that._limit * 0.75 - 1) {
      // console.log(k,v,storage, occupoied,occupoied.length)
      storageTemp = storage
      that._limit = 16
      that._storage = LimitedArray(that._limit)
      copystorage()
    }
  })

  function copystorage () {
    for (let i = 0; i < storageTemp.length; i++) {
      if (storageTemp[i] !== undefined && !Array.isArray(storageTemp[i][0])) {
        index = getIndexBelowMaxForKey(storageTemp[i][0], that._limit)
        that._storage.set(index, storageTemp[i][0])
      } else if (storageTemp[i] !== undefined) {
        index = getIndexBelowMaxForKey(storageTemp[i][0][0], that._limit)
        that._storage.set(index, storageTemp[i][0])
      }
    }
    index = getIndexBelowMaxForKey(k, that._limit)
  }

  let findKey = function (that) {
    if (that._storage.get(index) !== undefined) {
      for (let i = 0; i < that._storage.get(index).length; i++) {
        tempArr.push(that._storage.get(index)[i])
        if (that._storage.get(index)[i][0] === k) {
          return true
        }
      }
      return false
    }
  }
  if (this._storage.get(index) === undefined || findKey(this)) {
    this._storage.set(index, [[k, v]])
  } else {
    tempArr.push([k, v])
    this._storage.set(index, tempArr)
  }
}

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  console.log(index, k, this._storage.get(index))
  if (this._storage.get(index) !== undefined) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1]
      }
    }
  }
}

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit)
  this._storage.set(index, undefined)

  var occupoied = []
  var storageTemp = []
  var that = this

  this._storage.each(function (item, idx, storage) {
    if (item !== undefined) {
      occupoied.push(item)
    }
    if (occupoied.length <= that._limit * 0.5) {
      storageTemp = storage
      that._limit = 8
      that._storage = LimitedArray(that._limit)
      copystorage()
    }
  })

  function copystorage () {
    for (let i = 0; i < storageTemp.length; i++) {
      if (storageTemp[i] !== undefined && !Array.isArray(storageTemp[i][0])) {
        index = getIndexBelowMaxForKey(storageTemp[i][0], that._limit)
        that._storage.set(index, storageTemp[i][0])
      } else if (storageTemp[i] !== undefined) {
        index = getIndexBelowMaxForKey(storageTemp[i][0][0], that._limit)
        that._storage.set(index, storageTemp[i][0])
      }
    }
    index = getIndexBelowMaxForKey(k, that._limit)
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = HashTable
}
