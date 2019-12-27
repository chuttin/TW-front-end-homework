'use strict';

function compute_median(collection) {
  var result;
  var numArr = collection;

  numArr.sort(function(a, b) {
    return a - b;
  });
  
  if (numArr.length % 2 === 0) {
    result = (numArr[numArr.length/2] + numArr[numArr.length/2 - 1])/2;
  }else {
    result = numArr[Math.floor(numArr.length/2)];
  }

  return result;
}

module.exports = compute_median;


