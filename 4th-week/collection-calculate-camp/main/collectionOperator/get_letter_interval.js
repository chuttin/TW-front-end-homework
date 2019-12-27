'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  var alp;
  var alpId;

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      alpId = (i - 1) % 26 + 1;
      alp = String.fromCharCode(96 + alpId);
      result.push(alp);
    }
  } else {
    for (var i = number_a; i >= number_b; i--) {
      alpId = (i - 1) % 26 + 1;
      alp = String.fromCharCode(96 + alpId);
      result.push(alp);
    }
  }
  return result;
}

module.exports = get_letter_interval;
