'use strict';

function hybrid_operation_to_uneven(collection) {

  var arr = [];
  var result = 0;
  for (var i in collection) {
    if (collection[i] % 2 === 1) {
      arr.push(collection[i]*3 + 5);
    }
  }

  arr.reduce(function(a, b) {
    result = a + b;
    return result;
  });

  return result;
}

module.exports = hybrid_operation_to_uneven;

