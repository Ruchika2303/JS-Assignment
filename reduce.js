function reduce(callback, initialVal) {
    var accumulator = ( initialVal === undefined) ? this[0] : initialVal;
    var start = (initialVal === undefined) ? 1 : 0
    for (var i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;
  };

Array.prototype.myReduce = reduce


 console.log([1, 2, 3].myReduce((sum, curr) => sum + curr))
