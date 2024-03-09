function curriedAdd(num) {
  let sum = 0;

  function addNum(num) {
    if (num === undefined) {
      return sum;
    }
    sum += num;
    return addNum;
  }

  if (num === undefined) {
    return addNum();
  }
  return addNum(num);
}

module.exports = { curriedAdd };
