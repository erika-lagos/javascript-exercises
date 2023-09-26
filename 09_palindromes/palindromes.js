const palindromes = function (phrase) {
    const unusedChars = ['.', ',', '!',' '];
    const chars = phrase.toLowerCase().split('').filter(char => !unusedChars.includes(char));
    for (i = 0; i < chars.length; i++) {
        if (chars[i] !== chars[chars.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
