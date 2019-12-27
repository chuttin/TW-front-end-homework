'use strict';

function get_union(collection_a, collection_b) {
  var result = [];
  var notRepeat = [];
  var obj = {};
  for (var i in collection_a) {
    obj[collection_a[i]] = 1;
  }
  for (var j in collection_b) {
    if (obj[collection_b[j]] === undefined) {
      obj[collection_b[j]] = 1;
      notRepeat.push(collection_b[j]);
    }else {
      obj[collection_b[j]] += 1;
    }
  }

  result = collection_a.concat(notRepeat);
  
  return result;
}

module.exports = get_union;

