'use strict';
var calculate_median = function(collection){
  var arr = [];
  var median;
  for (var i in collection) {
    if (i % 2 === 1) {
      arr.push(collection[i]);
    }
  }

  if (arr.length % 2 === 0) {
    median = (arr[arr.length/2] + arr[arr.length/2 - 1])/2;
  }else {
    median = arr[Math.floor(arr.length/2)];
  }

  return median;
};
module.exports = calculate_median;
