var Queue = function () {
  var someInstance = Object.create(queueMethods)
  someInstance.count = 0
  someInstance.storage = {}
  return someInstance
}

var queueMethods = {}
queueMethods.enqueue = function (value) {
  this.storage[this.count] = value
  this.count++
}
queueMethods.dequeue = function () {
  if (this.count > 0) {
    this.count--
    let temp = this.storage[0]
    console.log(temp)
    delete this.storage[0]
    for (let key in this.storage) {
      this.storage[key - 1] = this.storage[key]
    }
    return temp
  }
}
queueMethods.size = function () {
  return this.count
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  }
}
