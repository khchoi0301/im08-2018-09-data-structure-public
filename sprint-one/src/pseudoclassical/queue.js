var Queue = function () {
  this.count = 0
}
Queue.prototype.storage = {}
Queue.prototype.enqueue = function (value) {
  this.storage[this.count] = value
  this.count++
}
Queue.prototype.dequeue = function () {
  if (this.count > 0) {
    this.count--
    let temp = this.storage[0]
    delete this.storage[0]
    for (let key in this.storage) {
      this.storage[key - 1] = this.storage[key]
    }
    return temp
  }
}
Queue.prototype.size = function () {
  return this.count
}

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  }
}
