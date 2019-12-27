'use strict';

function hybrid_operation(collection) {
  var arr = [];
  var result;
  for (var i in collection) {
    arr.push(collection[i]*3 + 2);
  }

  arr.reduce(function(a, b) {
    result = a + b;
    return result;
  });

  return result;
}

module.exports = hybrid_operation;

