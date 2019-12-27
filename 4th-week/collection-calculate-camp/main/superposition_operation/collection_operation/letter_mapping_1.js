'use strict';

function even_to_letter(collection) {
  var arr = [];
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      arr.push(collection[i]);
    }
  }

  var result = [];
  for (var j in arr) {
    var alp = String.fromCharCode(96 + arr[j]);
    result.push(alp);
  }
  
  return result;
}

module.exports = even_to_letter;
