const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function() {
    return array.reduce((product, current) => product*current, 0);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let fact = 1;
  while(n>0){
    fact *=n;
    n--;
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
