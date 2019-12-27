'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  var firstAlp;
  var secondAlp;
  var firstAlpId;
  var secondAlpId;

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      firstAlpId = Math.floor((i - 1)/26);
      secondAlpId = (i - 1) % 26 + 1;
      if (firstAlpId === 0) {
        firstAlp = '';
      }else {
        firstAlp = String.fromCharCode(96 + firstAlpId);
      }
      secondAlp = String.fromCharCode(96 + secondAlpId);
      result.push(firstAlp + secondAlp);
    }
    return result;
  } else {
    for (var i = number_a; i >= number_b; i--) {
      firstAlpId = Math.floor((i - 1)/26);
      secondAlpId = (i - 1) % 26 + 1;
      if (firstAlpId === 0) {
        firstAlp = '';
      }else {
        firstAlp = String.fromCharCode(96 + firstAlpId);
      }
      secondAlp = String.fromCharCode(96 + secondAlpId);
      result.push(firstAlp + secondAlp);
    }
    return result;
  }
}


module.exports = get_letter_interval_2;

