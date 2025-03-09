const removeFromArray = function(array, ...remove) {
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!remove.includes(array[i])) {
            finalArray.push(array[i]);
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
