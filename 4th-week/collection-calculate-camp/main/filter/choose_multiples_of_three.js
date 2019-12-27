'use strict';

function choose_multiples_of_three(collection) {
  var result = [];
  for (var i in collection) {
    if (collection[i] % 3 === 0) {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
