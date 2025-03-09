const fibonacci = function(nth) {
    let x = y = 1;
    let number = 0;
    nth = parseInt(nth);
    if (nth < 0) return "OOPS";
    if (nth === 0) return 0;
    for (let i = 1; i <= nth; i++) {
        if (i > 2) {
            number = x + y;
            x = y;
            y = number;
        } else if (i === 2) {
            number = 1;
        } else {
            number = 1;
        }
    }
    return number;
};

// Do not edit below this line
module.exports = fibonacci;
