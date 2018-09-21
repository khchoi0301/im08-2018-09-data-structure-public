var Tree = function (value) {
  var newTree = Object.create(treeMethods)
  newTree.value = value
  newTree.children = []
  return newTree
}

var treeMethods = {}

treeMethods.addChild = function (value) {
  var child = Tree(value)
  this.children.push(child)
}

treeMethods.contains = function (target) {
  let result = false
  function check (obj) {
    if (obj.value === target) {
      result = true
    } else {
      for (let i = 0; i < obj.children.length; i++) {
        check(obj.children[i])
      }
    }
  }
  check(this)
  return result
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Tree
}

// treeMethods.contains = function(target) {
//   console.log(this)
//   var result;
//   var test = function check (obj){
//     console.log(obj,target,obj.value)
//     if(obj.value === target) {
//       return true
//     } else {
//       for(let i = 0 ; i < obj.children.length ; i++){
//         console.log(i,'child',obj.children[i])
//         check(obj.children[i])
//       }
//     }
//   }

//   console.log(test(this)===undefined ? false : true)
//   return test(this)===undefined ? false : true

// };
