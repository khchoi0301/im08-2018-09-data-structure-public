var BinarySearchTree = function (value) {
  var newTree = Object.create(BinarySearchMethod)

  newTree.value = value
  newTree.left = {}
  newTree.right = {}

  return newTree
}

var BinarySearchMethod = {}
BinarySearchMethod.insert = function (value) {
  var child = BinarySearchTree(value)
  function mkChild (position, x) {
    if (x < position.value) {
      if (position.left.value === undefined) {
        position.left = child
        return
      }
      mkChild(position.left, value)
    } else {
      if (position.right.value === undefined) {
        position.right = child
        return
      }
      mkChild(position.right, value)
    }
  }
  mkChild(this, value)
}

BinarySearchMethod.contains = function (target) {
  var result = false
  function findTarget (position, target) {
    if (position.value === target) {
      result = true
    } else if (position.value !== undefined) {
      findTarget(position.right, target)
      findTarget(position.left, target)
    }
  }
  findTarget(this, target)
  return result
}

BinarySearchMethod.depthFirstLog = function (func) {
  function findValue (position) {
    if (position.value !== undefined) {
      func(position.value)
    }
    if (position.right.value !== undefined) {
      findValue(position.right)
    } else if (position.left.value !== undefined) {
      findValue(position.left)
    }
  }
  findValue(this)
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = BinarySearchTree
}
