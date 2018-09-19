var Stack = function () {
  this.count = 0
}

Stack.prototype.storage = {}

Stack.prototype.push = function (value) {
  this.storage[this.count] = value
  this.count++
}

Stack.prototype.pop = function () {
  if (this.count > 0) {
    this.count--
    let temp = this.storage[this.count]
    delete this.storage[this.count]
    return temp
  }
}

Stack.prototype.size = function () {
  return this.count
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  }
}
