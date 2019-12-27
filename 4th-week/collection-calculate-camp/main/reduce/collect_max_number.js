'use strict';

function collect_max_number(collection) {
  var result;
  collection.reduce(function(a, b) {
    result = Math.max(a, b);
    return result;
  });
  return result;
}

module.exports = collect_max_number;
