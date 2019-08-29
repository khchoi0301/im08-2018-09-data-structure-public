var LinkedList = function () {
  var list = {}
  list.head = null
  list.tail = null

  list.addToTail = function (value) {
    let item = Node(value)
    if (!list.head) {
      list.head = item
    } else {
      list.tail.next = item
    }
    list.tail = item
  }

  list.removeHead = function () {
    let temp = list.head.value
    list.head = list.head.next
    return temp
  }

  list.contains = function (target) {
    let current = this.head
    while (current) {
      if (current.value === target) {
        return true
      }
      current = current.next
    }
    return false
  }
  return list
}

var Node = function (value, count) {
  var node = {}

  node.value = value
  node.next = null

  return node
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = LinkedList
}
