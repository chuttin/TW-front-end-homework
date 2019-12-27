function collect_same_elements(collection_a, collection_b) {
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
  
  return result;
}

module.exports = collect_same_elements;
