'use strict';

function compute_average(collection) {
  var result = 0;
  // for (var i in collection) {
  //   result += collection[i];
  // }
  // result = result/collection.length;
  collection.reduce(function(a, b) {
    result = a + b;
    return result;
  });
  result = result/collection.length;
  return result;
}

module.exports = compute_average;

