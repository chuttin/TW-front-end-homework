'use strict';

function spilt_to_zero(number, interval) {
  var i = number;
  var result = [number];

  while( Number(i.toFixed(1)) > 0) {
    i = i - interval;
    console.log(Number(i.toFixed(1)));
    result.push(Number(i.toFixed(1)));
  }

  return result;
}

module.exports = spilt_to_zero;
