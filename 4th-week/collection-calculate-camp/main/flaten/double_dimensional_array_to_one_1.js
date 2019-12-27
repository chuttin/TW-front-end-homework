'use strict';

function double_to_one(collection) {
  var result = [];
  for (var i in collection) {
    result = result.concat(collection[i]);
  }
  return result;
}

module.exports = double_to_one;
