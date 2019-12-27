'use strict';

function average_uneven(collection) {
  var arr = [];
  var result = 0;
  for (var i in collection) {
    if (collection[i] % 2 === 1) {
      arr.push(collection[i]);
    }
  }

  arr.reduce(function(a, b) {
    result = a + b;
    return result;
  });
  result = result/arr.length;

  return result;
}

module.exports = average_uneven;
