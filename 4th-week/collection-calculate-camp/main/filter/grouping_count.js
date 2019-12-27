'use strict';

function grouping_count(collection) {
  var obj = {};
  for (var j in collection) {
    if (obj[collection[j]] === undefined) {
      obj[collection[j]] = 1;
    }else {
      obj[collection[j]] += 1;
    }
  }
  
  return obj;
}

module.exports = grouping_count;
