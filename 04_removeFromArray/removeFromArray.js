const removeFromArray = function(arr, num) {

    const numArray = arr;

    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] === num) {
            numArray.splice(i, 1)
        }
    } return numArray
};

// Do not edit below this line
module.exports = removeFromArray;
