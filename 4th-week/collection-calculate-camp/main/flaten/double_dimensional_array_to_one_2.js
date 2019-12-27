'use strict';

function double_to_one(collection) {
  var arr = [];
  var result = [];
  for (var i in collection) {
    arr = arr.concat(collection[i]);
  }

  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    } 
  }
  
  return result;
}

module.exports = double_to_one;
