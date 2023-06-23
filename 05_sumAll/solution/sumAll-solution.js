const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; // much more elegant than my solution. works the same. 
  //I tried doing min !== Number or min == !Number but that didn't work. Now I know that Number obj can be used auxiliarly
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min; // Dancing! much shorter and easier  
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
