'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length !== collection_b.length) {
    return false;
  }else {
    for (var i in collection_a) {
      if (collection_a[i] !== collection_b[i]) {
        return false;
      }else {
        return true;
      }
    }
  }
}

module.exports = compare_collections;


