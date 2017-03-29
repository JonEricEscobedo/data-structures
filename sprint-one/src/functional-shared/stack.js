var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
	someInstance.count = 0;  

  // someInstance.extend(stackMethods);
  _.extend(someInstance, stackMethods);
  // console.log(someInstance)
  return someInstance;
};

var stackMethods = {
	push: function(value) {
		this.storage[this.count] = value;
		this.count++;
	},

	pop: function() {
		if (this.count > 0) {
			this.count--;
		}
		return this.storage[this.count];
	},

	size: function() {
		return this.count; 
	}
};






