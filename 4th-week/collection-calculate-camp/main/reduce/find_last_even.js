'use strict';

function find_last_even(collection) {
  var result;
  var arr = [];
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      arr.push(collection[i]);
    }
  }
  result = arr[arr.length - 1];
  return result;
}

module.exports = find_last_even;
