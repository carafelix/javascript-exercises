const repeatString = function(string, num) {

    let heyBank = ''

    for (i=0; i<num; i++) {
        heyBank += string        
    }

    if (num<0) {
        return 'ERROR'
    }

    return heyBank

};

// Do not edit below this line
module.exports = repeatString;
