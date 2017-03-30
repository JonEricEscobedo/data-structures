var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail !== null) { 
      list.head = list.tail;
      list.tail.next = newNode;
    }

    list.tail = newNode;

    if (list.head === null) {
      list.head = list.tail;
    }

  };

  list.removeHead = function() {
    var oldHeadData = list.head.value;
    list.head = list.head.next;
    return oldHeadData;
  };

  list.contains = function(target) {
    var truthy = false;

    var searchList = function(node) {
      if (node.value === target) {
        truthy = true;
      } else if (node.next !== null) {
        searchList(node.next);
      }
    };
    searchList(list.head);
    return truthy;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 * Answer:
 * list.addToTail has constant time complexity;
 * list.removeHead has constant time complexity;
 * list.contains has linear time complexity;
 */
