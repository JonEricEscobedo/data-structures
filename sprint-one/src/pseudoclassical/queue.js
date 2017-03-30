var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.dequeueKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value; 
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count - this.dequeueKey > 0) {
    this.dequeueKey++;
  }
  return this.storage[this.dequeueKey - 1];
};

Queue.prototype.size = function() {
  return this.count - this.dequeueKey;
};

