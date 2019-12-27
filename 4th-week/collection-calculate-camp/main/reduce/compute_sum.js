'use strict';

function calculate_elements_sum(collection) {
  var result;
  collection.reduce(function(a, b) {
    result = a + b;
    return result;
  });
  return result;
}

module.exports = calculate_elements_sum;

