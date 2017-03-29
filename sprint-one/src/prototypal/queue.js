var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.dequeueKey = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.count] = value;
		this.count++;
	},
	dequeue: function() {
		if (this.count - this.dequeueKey > 0) {
			this.dequeueKey++;
		}
		return this.storage[this.dequeueKey - 1];
	},
	size: function() {
		return this.count - this.dequeueKey;
	}
};


