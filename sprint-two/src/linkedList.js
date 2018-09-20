var LinkedList = function () {
  var list = {}
  var count = 0
  list.head = null
  list.tail = null

  list.addToTail = function (value) {
    let item = Node(value, count)
    if (!list.head) {
      list.head = item
    } else {
      list[count] = item
    }
    list.tail = item
    count++
  }

  list.removeHead = function () {
    let temp = list.head
    list.head = list[temp.next]
    return temp.value
  }

  list.contains = function (target) {
    let obj = list.head
    let test = function check (obj) {
      if (obj === undefined) {
        return false
      }
      if (obj.value === target) {
        return true
      } else {
        return check(list[obj.next])
      }
    }
    return test(obj)
  }
  return list
}

var Node = function (value, count) {
  var node = {}

  node.value = value
  node.next = count + 1

  return node
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = LinkedList
}
