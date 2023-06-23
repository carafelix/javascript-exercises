const sumAll = function(num, numi) {

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

// Do not edit below this line
module.exports = sumAll;
