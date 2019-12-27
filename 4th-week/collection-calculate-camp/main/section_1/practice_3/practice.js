function collect_same_elements(collection_a, object_b) {
  var newBArr = [];
  for (var i in object_b.value) {
    newBArr = newBArr.concat(object_b.value[i]);
  }
  
  var result = [];
  var obj = {};
  for (var i in newBArr) {
    obj[newBArr[i]] = 1;
  }
  for (var j in collection_a) {
    if (obj[collection_a[j]] === undefined) {
      obj[collection_a[j]] = 1;
    }else {
      obj[collection_a[j]] += 1;
      result.push(collection_a[j]);
    }
  }
  
  return result;
}

module.exports = collect_same_elements;
