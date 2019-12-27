'use strict';

function amount_even(collection) {
  var arr = [];
  var result = 0;
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      arr.push(collection[i]);
    }
  }

  arr.reduce(function(a, b) {
    result = a + b;
    return result;
  });

  return result;
}

module.exports = amount_even;
