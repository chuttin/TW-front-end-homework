'use strict';
var even_asc_odd_desc = function(collection){
  var evenArr = [];
  var unEvenArr = [];
  for (var i in collection) {
    if (collection[i] % 2 === 0) {
      evenArr.push(collection[i]);
    }else {
      unEvenArr.push(collection[i]);
    }
  }

  for (var i = 0; i < evenArr.length; i++) {
    for (var j = i + 1; j < evenArr.length; j++) {
      if (evenArr[i] > evenArr[j]) {
        var m = evenArr[i];
        evenArr[i] = evenArr[j];
        evenArr[j] = m;
      }
    }
  }

  for (var i = 0; i < unEvenArr.length; i++) {
    for (var j = i + 1; j < unEvenArr.length; j++) {
      if (unEvenArr[i] < unEvenArr[j]) {
        var m = unEvenArr[i];
        unEvenArr[i] = unEvenArr[j];
        unEvenArr[j] = m;
      }
    }
  }

  var result = evenArr.concat(unEvenArr);
  return result;
};
module.exports = even_asc_odd_desc;
