function collect_same_elements(collection_a, object_b) {
  var newAArr = [];
  for (var i in collection_a) {
    newAArr.push(collection_a[i].key);
  }
  var newBArr = [];
  for (var i in object_b.value) {
    newBArr = newBArr.concat(object_b.value[i]);
  }

  var result = [];
  var obj = {};
  for (var i in newBArr) {
    obj[newBArr[i]] = 1;
  }
  for (var j in newAArr) {
    if (obj[newAArr[j]] === undefined) {
      obj[newAArr[j]] = 1;
    }else {
      obj[newAArr[j]] += 1;
      result.push(newAArr[j]);
    }
  }
  
  return result;
}

module.exports = collect_same_elements;
