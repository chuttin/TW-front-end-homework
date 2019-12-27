'use strict';
function rank_by_two_large_one_small(collection){
  for (var i = 0; i < collection.length; i++) {
    for (var j = i + 1; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        var m = collection[i];
        collection[i] = collection[j];
        collection[j] = m;
      }
    }
  }

  for (var i = 0; i < collection.length; i++) {
    if (i % 3 === 0) {
      if (collection[i+1] !== undefined && collection[i+2] !== undefined) {
        var n = collection[i];
        collection[i] = collection[i+1];
        collection[i+1] = collection[i+2];
        collection[i+2] = n;
      }
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
