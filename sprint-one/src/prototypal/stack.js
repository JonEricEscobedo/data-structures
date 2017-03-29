var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.count = 0;
  someInstance.storage = {};

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


