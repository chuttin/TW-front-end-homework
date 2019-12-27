'use strict';
var is_exist_element = function(collection,element){
  var isExist;
  for (var i in collection) {
    if (i % 2 === 0) {
      if (collection[i] === element) {
        isExist = true;
      }
    }
  }
  if (isExist) {
    return true;
  }else {
    return false;
  }
};
module.exports = is_exist_element;
