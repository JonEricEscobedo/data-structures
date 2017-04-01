

// Instantiate a new graph
var Graph = function() {
  var someInstance = Object.create(Graph.prototype);
  return someInstance;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var i = 0; i < this[node].length; i++) {
    var element = this[node][i];
    // this[node][i] = null;
    this.removeEdge(element, node);
    this[node].unshift(node); // Maintain length of array
                              // while for loop runs
  }

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toEdgeIndex = this[fromNode].indexOf(toNode);
  var fromEdgeIndex = this[toNode].indexOf(fromNode);

  this[fromNode].splice(toEdgeIndex, 1);
  this[toNode].splice(fromEdgeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(value, key, col) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * Answer:
 * addNode has constant time complexity
 * contains has constant time complexity
 * removeNode has linear time complexity within constant
 * hasEdge has linear time complexity (seems so under the hood)
 * addEdge has constant time complexity
 * removeEdge has linear time complexity within constant
 * forEachNode has linear time complexity
 */


