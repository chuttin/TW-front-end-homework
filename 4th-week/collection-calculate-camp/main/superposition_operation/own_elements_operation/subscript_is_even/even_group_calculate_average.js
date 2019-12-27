'use strict';
var even_group_calculate_average = function(collection){
  var evenEle = [];
  for (var i in collection) {
    if (i % 2 === 1) {
      if (collection[i] % 2 === 0) {
        evenEle.push(collection[i]);
      }
    }
  }

  var arr = [];
  if (evenEle.length === 0) {
    arr = [0];
  }else {
    var digit = 3;
    for (var j = 1; j <= digit; j++) {
      var n = 0;
      var sum = 0;
      for (var i in evenEle) {
        if ((evenEle[i] / Math.pow(10,j)) < 1 && (evenEle[i] / Math.pow(10,j)) > 0.1) {
          sum += evenEle[i];
          n += 1;
        }
      }
      if (n !== 0) {
        arr.push(sum/n);
      }
    }
  }

  return arr;
};
module.exports = even_group_calculate_average;
