function count_same_elements(collection) {
  var obj = {};
  for (var j in collection) {

    var ele = collection[j];
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
    arrSubObj.name = i;
    arrSubObj.summary = obj[i];
    arr.push(arrSubObj);
  }

  return arr;
}

module.exports = count_same_elements;
