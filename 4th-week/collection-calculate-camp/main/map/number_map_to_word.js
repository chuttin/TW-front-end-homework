'use strict';
var number_map_to_word = function(collection){
  var result = [];
  var alp;
  var alpId;

  var result = collection.map(function (item) {
    alpId = (item - 1) % 26 + 1;
    alp = String.fromCharCode(96 + alpId);
    return alp;
  });
  return result;
};

module.exports = number_map_to_word;
