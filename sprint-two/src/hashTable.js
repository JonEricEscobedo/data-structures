var HashTable = function() {
  this._limit = 8;
  // this._tupleCount = 0;
  // this._oldStorage = null;
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

  // Double size when needed
  // this._tupleCount++;

  // if (this._tupleCount > .75 * this._limit) {
  //   this._limit *= 2;
  //   this._oldStorage = this._storage;
  //   this._storage = LimitedArray(this._limit);
  //   this._oldStorage.each(function(val, i, collection) {
  //     if (val) {
  //       for (var i = 0; i < val.length; i++) {
  //         this.insert()
  //       }
  //     }
  //   })
  //   // create a old_storage var = current _storage
  //   // create a new this._storage = LimitedArray(this._limit);
  //   // this.old_storage.each(function(val, i, collection) {this.insert(val)})


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
      this._tupleCount--;
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


