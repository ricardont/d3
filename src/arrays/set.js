import "../core/class";

d3.set = function(array) {
  var set = new d3_Set;
  if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
  return set;
};

function d3_Set() {
  this._ = new Set;
}

d3_class(d3_Set, {
  has: function(value) {
    return this._.has(value + "");
  },
  add: function(value) {
    return this._.add(value + "");
  },
  remove: function(value) {
    return this._.delete(value + "");
  },
  values: function() {
    var i = this._.values(), v, values = [];
    while (!(v = i.next()).done) values.push(v.value);
    return values;
  },
  size: function() {
    return this._.size;
  },
  empty: function() {
    return !!this._.size;
  },
  forEach: function(f) {
    var that = this;
    this._.forEach(function(value) {
      f.call(that, value);
    });
  }
});
