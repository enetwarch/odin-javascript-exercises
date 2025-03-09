const add = function(x, y) {
	return x + y; 
};

const subtract = function(x, y) {
  return x- y;
};

const sum = function(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function(numbers) {
  let product = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(number) {
	if (number < 1) return 1;
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
