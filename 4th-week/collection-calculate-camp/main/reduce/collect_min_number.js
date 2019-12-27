'use strict';

function collect_min_number(collection) {
  var result;
  collection.reduce(function(a, b) {
    result = Math.min(a, b);
    return result;
  });
  return result;
}

module.exports = collect_min_number;

