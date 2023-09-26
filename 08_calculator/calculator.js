const add = function(...values) {
  return values.reduce((sum, value) => sum + value, 0);
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(values) {
	return values.reduce((sum, value) => sum + +value, 0);
};

const multiply = function(values) {
  return values.reduce((sum, value) => sum * +value, 1);
};

const power = function(value, power) {
	return value ** power;
};

const factorial = function(value) {
  let result = 1;
  for (let i = value; i > 1; i--) {
    result = result * i;
  }
  return result;
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
