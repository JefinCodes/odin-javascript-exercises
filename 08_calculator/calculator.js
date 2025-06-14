const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, val) => acc + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
};

const power = function(a , b) {
	return a ** b;
};

const factorial = function(a) {
	let fact = 1;
  while(a > 1){
    fact = fact * a;
    a--;
  }
  return fact;
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
