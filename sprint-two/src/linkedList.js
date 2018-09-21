var LinkedList = function () {
  var list = {}
  list.head = null
  list.tail = null

  list.addToTail = function (value) {
    let item = Node(value)
    if (list.head === null) {
      list.head = item
    } else {
      list.head.next = item
    }
    list.tail = item
  }

  list.removeHead = function () {
    let temp = list.head.value
    list.head = list.head.next
    return temp
  }

  list.contains = function (target) {
    let result = false
    function findTarget (position) {
      if (position.value === target) {
        result = true
        return 0
      } else if (position.next !== null) {
        findTarget(position.next)
      }
    }
    findTarget(list.head)
    return result
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
