/* global _ */
var stackMethods = {}
stackMethods.push = function (value) {
  this.storage[this.count] = value
  this.count += 1
}
stackMethods.pop = function () {
  if (this.count > 0) {
    this.count -= 1
    var temp = this.storage[this.count]
    delete this.storage[this.count]
    return temp
  }
}
stackMethods.size = function () {
  return this.count
}

var Stack = function () {
  var someInstance = {}
  someInstance.count = 0
  someInstance.storage = {}
  _.extend(someInstance, stackMethods)
  return someInstance
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  }
}
