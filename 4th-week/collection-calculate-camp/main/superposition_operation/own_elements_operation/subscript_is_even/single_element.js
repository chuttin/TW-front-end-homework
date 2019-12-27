'use strict';
var single_element = function(collection){
  var arr = [];
  for (var i in collection) {
    if (i % 2 === 1) {
      arr.push(collection[i]);
    }
  }

  var result = [];

  for (var i in arr) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};
module.exports = single_element;
