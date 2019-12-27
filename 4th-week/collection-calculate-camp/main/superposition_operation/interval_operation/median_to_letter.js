'use strict';

function median_to_letter(collection) {
  var median;
  var result;
  var numArr = collection;

  numArr.sort(function(a, b) {
    return a - b;
  });
  
  if (numArr.length % 2 === 0) {
    median = Math.ceil((numArr[numArr.length/2] + numArr[numArr.length/2 - 1])/2);
  }else {
    median = numArr[Math.floor(numArr.length/2)];
  }

  var firstAlpId = Math.floor((median - 1)/26);
  var secondAlpId = (median - 1) % 26 + 1;
  var firstAlp;
  var secondAlp;
  if (firstAlpId === 0) {
    firstAlp = '';
  }else {
    firstAlp = String.fromCharCode(96 + firstAlpId);
  }
  secondAlp = String.fromCharCode(96 + secondAlpId);
  result = firstAlp + secondAlp;
  return result;
}

module.exports = median_to_letter;
