var map_to_three_multiples = function(collection){
  var arr = [];
  for (var i in collection) {
    if (i % 2 === 1) {
      arr.push(collection[i]);
    }
  }

  var result = [];

  for (var i in arr) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

map_to_three_multiples([11, 11, 22, 11, 33, 11])