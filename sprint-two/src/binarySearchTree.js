var BinarySearchTree = function(value) {
	var someInstance = Object.create(BinarySearchTree.prototype);
	someInstance.value = value;
	someInstance.left = null;
	someInstance.right = null;


	return someInstance;
};

BinarySearchTree.prototype.insert = function (val) {
	if (val > this.value) {
		this.right = BinarySearchTree(val);
	} else if (val < this.value) {
		this.left = BinarySearchTree(val);
	}
};

BinarySearchTree.prototype.contains = function () {

};

BinarySearchTree.prototype.depthFirstLog = function () {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
