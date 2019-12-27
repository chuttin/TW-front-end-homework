'use strict';
var calculate_average = function(collection){
  var arr = [];
  var result = 0;
  for (var i in collection) {
    if (i % 2 === 1) {
      arr.push(collection[i]);
    }
  }

  arr.reduce(function(a, b) {
    result = a + b;
    return result;
  });
  result = result/arr.length;

  return result;
};
module.exports = calculate_average;
