const palindromes = function (string) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    const noPunctuationString = string.replace(punctuationRegex, "").toLowerCase();
    const stringLength = noPunctuationString.length;
    let reversedString = "";
    for (let i = 1; i <= stringLength; i++) {
        reversedString += noPunctuationString.charAt(stringLength - i);
    }
    return reversedString === noPunctuationString;
};

// Do not edit below this line
module.exports = palindromes;
