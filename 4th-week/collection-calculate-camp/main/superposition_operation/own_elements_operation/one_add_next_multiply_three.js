'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  var ele;
  for (var i = 1; i < collection.length; i++) {
    ele = (collection[i] + collection[i-1]) * 3;
    result.push(ele);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
