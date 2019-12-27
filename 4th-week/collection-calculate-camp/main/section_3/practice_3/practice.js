function create_updated_collection(collection_a, object_b) {
  var obj = {};
  for (var j in collection_a) {
    if (obj[collection_a[j]] === undefined) {
      obj[collection_a[j]] = 1;
    }else {
      obj[collection_a[j]] += 1;
    }
  }
  
  var arr = [];
  for (var i in obj) {
    var arrSubObj = {};
    arrSubObj.key = i;
    arrSubObj.count = obj[i];
    arr.push(arrSubObj);
  }

  for (var i in object_b.value) {
    for (var j in arr) {
      if (object_b.value[i] === arr[j].key) {
        arr[j].count -= Math.floor(arr[j].count / 3);
      }
    }
  }

  return arr;
}

module.exports = create_updated_collection;
