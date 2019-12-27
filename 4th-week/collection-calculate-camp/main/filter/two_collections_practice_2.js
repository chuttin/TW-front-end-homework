'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  var obj = {};
  for (var i in collection_b) {
    obj[collection_b[i]] = 1;
  }
  for (var j in collection_a) {
    if (obj[collection_a[j]] === undefined) {
      obj[collection_a[j]] = 1;
    }else {
      obj[collection_a[j]] += 1;
      result.push(collection_a[j]);
    }
  }
  
  var result = collection_a.filter(function(elem) {
    return obj[elem] === 1;
  });

  var bResult = collection_b.filter(function(elem) {
    return obj[elem] === 1;
  });

  if (bResult !== []) {
    result.concat(bResult);
  }

  return result;
}

module.exports = choose_no_common_elements;
