const sumAll = function(num, numi) {  //this solution works for any number to any other number. not only from 1 to x

    const min = Math.min(num,numi);
    const max = Math.max(num,numi);

        if (num < 0 || numi < 0) {
            return 'ERROR'
        } else if ((typeof num !== "number") || (typeof numi !== "number")) {
            return 'ERROR'
        } else {
            let sum = 0;

            for(let i = min; i <= max; i++) {
                sum += i;
            }
            return sum;
        }
    
};

// another solution instead of looping is using Gauss formula: n * (n + x) / 2;  |  n being the ending number, and 'x' the starting number.

// Do not edit below this line
module.exports = sumAll;
