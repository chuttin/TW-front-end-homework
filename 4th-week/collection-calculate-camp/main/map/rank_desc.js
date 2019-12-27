'use strict';
var rank_desc = function(collection){
  for (var i = 0; i < collection.length; i++) {
    for (var j = i + 1; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        var m = collection[i];
        collection[i] = collection[j];
        collection[j] = m;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
