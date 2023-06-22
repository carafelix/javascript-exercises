const reverseString = function(str) {
    let arr = str.split('');
    arr = arr.reverse();
    arr = arr.toString();  // join its better so no need of replace all
    return arr.replaceAll(',', '')
};

// Do not edit below this line
module.exports = reverseString;
