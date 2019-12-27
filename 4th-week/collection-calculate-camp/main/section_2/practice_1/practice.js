function count_same_elements(collection) {
  var obj = {};
  for (var j in collection) {
    if (obj[collection[j]] === undefined) {
      obj[collection[j]] = 1;
    }else {
      obj[collection[j]] += 1;
    }
  }
  
  var arr = [];
  for (var i in obj) {
    var arrSubObj = {};
    arrSubObj.key = i;
    arrSubObj.count = obj[i];
    arr.push(arrSubObj);
  }

  return arr;
}

module.exports = count_same_elements;
