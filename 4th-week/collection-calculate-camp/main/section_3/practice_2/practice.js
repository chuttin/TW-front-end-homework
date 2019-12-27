function create_updated_collection(collection_a, object_b) {
  for (var i in object_b.value) {
    for (var j in collection_a) {
      if (object_b.value[i] === collection_a[j].key) {
        collection_a[j].count -= Math.floor(collection_a[j].count / 3);
      }
    }
  }

  return collection_a;
}

module.exports = create_updated_collection;
