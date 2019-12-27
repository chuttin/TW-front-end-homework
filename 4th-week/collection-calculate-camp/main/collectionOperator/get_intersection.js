'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  for (var i in collection_b){
    for (var j in collection_a) {
      if (collection_b[i] === collection_a[j]) {
        result.push(collection_b[i]);
      }
    }
  }
  return result;
}

module.exports = get_intersection;
