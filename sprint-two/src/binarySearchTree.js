var BinarySearchTree = function(value) {
	var someInstance = Object.create(BinarySearchTree.prototype);
	someInstance.value = value;
	someInstance.left = null;
	someInstance.right = null;


	return someInstance;
};

BinarySearchTree.prototype.insert = function (val) {
	var newNode = BinarySearchTree(val);

	var searchNodeValues = function(parentNode) {
		if (newNode.value < parentNode.value) {
			if (parentNode.left === null) {
				parentNode.left = newNode;
			} else {
				searchNodeValues(parentNode.left);
			}
		} else if (newNode.value > parentNode.value) {
			if (parentNode.right === null) {
				parentNode.right = newNode;
			} else {
				searchNodeValues(parentNode.right);
			}
		}
	};
	searchNodeValues(this);
	
};

BinarySearchTree.prototype.contains = function (target) {
	var truthy = false;

	var searchNodes = function(parentNode) {
		if (target < parentNode.value && parentNode.left) {
			if (parentNode.left.value === target) {
				truthy = true;
			} else if (parentNode.left) {
				searchNodes(parentNode.left);
			}
		} else if (target > parentNode.value && parentNode.right) {
			if (parentNode.right.value === target) {
				truthy = true;
			} else if (parentNode.right) {
				searchNodes(parentNode.right);
			}
		}
	};
	searchNodes(this);

	return truthy;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {

	var depthSearch = function(node) {
		callback(node.value);

		if (node.left) {
			depthSearch(node.left);
		}
		if (node.right) {
			depthSearch(node.right);
		}
		
	};

	depthSearch(this);

};
/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Answer:
 * insert method has logarithmic time complexity.
 * contains method has logarithmic time complexity.
 * depthFirstLog has linear time complexity.
 */
