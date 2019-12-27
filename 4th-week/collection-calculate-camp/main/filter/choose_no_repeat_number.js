'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  var obj = {};
  for (var j in collection) {
    if (obj[collection[j]] === undefined) {
      obj[collection[j]] = 1;
    }else {
      obj[collection[j]] += 1;
    }
  }

  for (var i in obj) {
    result.push(Number(i));
  }
  
  return result;
}

module.exports = choose_no_repeat_number;
