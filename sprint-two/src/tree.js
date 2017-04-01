var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	this.children.push(newChild);
};

treeMethods.contains = function(target) {
	var truthy = false;

	var searchChildren = function(child) {
		for (var i = 0; i < child.children.length; i++) {
			if (child.children[i].value === target) {
				truthy = true;
			} else {
				searchChildren(child.children[i]);
			}
		}
	};

	searchChildren(this);
	return truthy;
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Answer:
 * addChild has constant time complexity.
 * searchChildren has linear time complexity.
 */
