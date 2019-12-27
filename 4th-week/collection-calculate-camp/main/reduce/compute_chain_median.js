'use strict';

function compute_chain_median(collection) {
  var result;
  var strArr = collection.split('->');
  var numArr = [];
  for (var i in strArr) {
    numArr.push(Number(strArr[i]));
  }

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

module.exports = compute_chain_median;
