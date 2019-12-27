'use strict';

function average_to_letter(collection) {
  var sum;
  var average;
  collection.reduce(function(a, b) {
    sum = a + b;
    return sum;
  });
  average = sum/collection.length;

  var result = String.fromCharCode(96 + Math.ceil(average));
  
  return result;
}

module.exports = average_to_letter;

