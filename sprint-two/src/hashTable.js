var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var args = Array.from(arguments); // tuple
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArr = this._storage.get(index) || [];

  var replaced = false;
  for (var i = 0; i < bucketArr.length; i++) {
    if (bucketArr[i][0] === k) {
      bucketArr[i] = args;
      replaced = true;
    }
  }

  if (replaced === false) {
    bucketArr.push(args);
  }

  this._storage.set(index, bucketArr);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArr = this._storage.get(index);
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
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Answer:
 * insert has linear time complexity
 * retrieve has linear time complexity
 * remove has linear time complexity
 */


