'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
  var arr = [];
  for (var i in collection_a) {
    for (var j in collection_b) {
      if (collection_a[i] % collection_b[j] === 0) {
        arr.push(collection_a[i]);
      }
    }
  }

  for (var m in arr) {
    if (result.indexOf(arr[m]) === -1) {
      result.push(arr[m]);
    }
  }

  return result;
  
}

module.exports = choose_divisible_integer;
