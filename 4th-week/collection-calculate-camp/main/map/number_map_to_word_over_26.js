'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = [];
  var firstAlp;
  var secondAlp;
  var firstAlpId;
  var secondAlpId;

  var result = collection.map(function (item) {
    firstAlpId = Math.floor((item - 1)/26);
    secondAlpId = (item - 1) % 26 + 1;
    if (firstAlpId === 0) {
      firstAlp = '';
    }else {
      firstAlp = String.fromCharCode(96 + firstAlpId);
    }
    secondAlp = String.fromCharCode(96 + secondAlpId);
    return firstAlp + secondAlp;
  });
  return result;
};

module.exports = number_map_to_word_over_26;
