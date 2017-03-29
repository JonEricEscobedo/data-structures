var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var dequeueKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count - dequeueKey > 0) {
      // count--;
      dequeueKey++;
    }
    // debugger;
    return storage[dequeueKey - 1];
  };

  someInstance.size = function() {
    return count - dequeueKey;
  };

  return someInstance;
};

// {0:'a', 0:'b'}
// dequeue --> return 'a'
// {1: b, 2: c}

