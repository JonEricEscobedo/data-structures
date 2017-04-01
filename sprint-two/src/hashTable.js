var HashTable = function() {
  this._limit = 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var args = Array.from(arguments); // tuple
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArr = this._storage.get(index) || [];

  var replaced = false;
  for (var i = 0; i < bucketArr.length; i++) {
    if (bucketArr[i][0] === k) {
      bucketArr[i] = [k, v];
      replaced = true;
    }
  }

  if (replaced === false) {
    bucketArr.push(args);
  }

  this._storage.set(index, bucketArr);

  this._tupleCount++;

  if (this._tupleCount > .75 * this._limit) {
    this.resize(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArr = this._storage.get(index) || [];
  var bucketArrLength = bucketArr.length;

  for (var i = 0; i < bucketArrLength; i++) {
    if (bucketArr[i][0] === k) {
      return bucketArr[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArr = this._storage.get(index);
  var bucketArrLength = bucketArr.length;

  for (var i = 0; i < bucketArrLength; i++) {
    if (bucketArr[i][0] === k) {
      bucketArr.splice(i, 1);
      this._tupleCount--;
    }
  }

  if (this._tupleCount < .25 * this._limit) {
    this.resize(this._limit / 2);
  }  
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._storage = LimitedArray(newLimit);
  this._tupleCount = 0;
  this._limit = newLimit;

  oldStorage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  }.bind(this));

};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Answer:
 * insert has linear time complexity
 * retrieve has linear time complexity
 * remove has linear time complexity
 * resize has linear time complexity
 */


