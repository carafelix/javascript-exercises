const removeFromArray = function(arr, ...num) {

   // make pseudocode and plan it. don't stress

    const numArr = arr;
    const manyNumArr = num;


    for (i = 0; i < numArr.length; i++) {

        for (j = 0; j < manyNumArr.length; j++) {

            if (manyNumArr[j] === numArr[i]) {
                numArr.splice(i,1)
            }

        }

    } return numArr
};

// Do not edit below this line
module.exports = removeFromArray;
