const reverseString = function(phrase) {
    let i = phrase.length - 1;
    let output = '';
    for (;i>=0; i--) {
        output += phrase[i];
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;
