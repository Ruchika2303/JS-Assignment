Array.prototype.fooFilter = function(checkElement) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
      if (checkElement(this[i])) {
        returnArr.push(this[i]);
      }
    }
    return returnArr;
  };

  const arr = [1,5,6,9,11,18,24,26,8,35,10,7,42,88];
  console.log(arr.fooFilter(x => x%3 === 0 ));