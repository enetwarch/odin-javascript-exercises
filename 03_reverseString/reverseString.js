const reverseString = function(string) {
    let reversedString = "";
    if (string.length === 0) return reversedString;
    for (let i = 1; i <= string.length; i++) {
        reversedString += string.charAt(string.length - i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
