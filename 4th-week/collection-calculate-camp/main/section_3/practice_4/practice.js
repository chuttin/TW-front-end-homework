function create_updated_collection(collection_a, object_b) {
  var obj = {};
  for (var j in collection_a) {

    var ele = collection_a[j];
    var eleName = ele.charAt(0);
    var eleCount = '';
    for (var i = 1; i < ele.length; i++) {
      if (ele.charCodeAt(i) > 47 && ele.charCodeAt(i) < 58) {
        eleCount += ele.charAt(i);
      }
    }

    if (obj[eleName] === undefined) {
      if (eleCount === '') {
        obj[eleName] = 1;
      }else {
        obj[eleName] = Number(eleCount);
      }
    }else {
      if (eleCount === '') {
        obj[eleName] += 1;
      }else {
        obj[eleName] += Number(eleCount);
      }
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
