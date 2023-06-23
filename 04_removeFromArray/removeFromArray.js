const removeFromArray = function(arr, ...num) {

   // make pseudocode and plan it. don't stress

    const numArr = arr.sort(function(a, b){return a - b}); 
    // that sort thing is a bit like cheating, since I didn't solve the problem of
    // what if a compared number is < than its predecesor
    const manyNumArr = num.sort(function(a, b){return a - b}); 

    for (i = 0; i < numArr.length; i++) {

        for (j = 0; j < manyNumArr.length; j++) {

            if (manyNumArr[j] === numArr[i]) {
                numArr.splice(i,1)
            }
        }
    } return numArr
};

// passing the 7 test of this after struggling a lot was PURE JOY!

// Do not edit below this line
module.exports = removeFromArray;
