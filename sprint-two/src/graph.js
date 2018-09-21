// Instantiate a new graph
var Graph = function () {
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this[node] = [node]
}

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (let key in this) {
    if (key === node) {
      return true
    }
  }
  return false
}

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (let key in this) {
    if (!isNaN(Number(key))) {
      this.removeEdge(key, node)
    }
  }
  delete this[node]
}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  for (let i = 0; i < this[fromNode].length; i++) {
    if (this[fromNode][i] === toNode) {
      return true
    }
  }
  return false
}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this[fromNode].push(toNode)
  this[toNode].push(fromNode)
}

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  let edgeArr = []

  if (this[fromNode] !== undefined && this[toNode] !== undefined) {
    for (let i = 0; i < this[fromNode].length; i++) {
      if (this[fromNode][i] !== toNode) {
        edgeArr.push(this[fromNode][i])
      }
    }
    if (edgeArr.length !== 0) {
      this[fromNode] = edgeArr
    } else {
      this[fromNode] = []
    }
    edgeArr = []
    for (let i = 0; i < this[toNode].length; i++) {
      if (this[toNode][i] !== fromNode) {
        edgeArr.push(this[toNode][i])
      }
    }
    if (edgeArr.length !== 0) {
      this[toNode] = edgeArr
    } else {
      this[toNode] = []
    }
  }
}

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this) {
    if (!isNaN(Number(key))) {
      cb(key)
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Graph
}
