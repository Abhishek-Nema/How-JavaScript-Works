// Higher Order Function : a function that takes another func. as an argument or returns another functions, is HOF.
// Callback Function : a function which passed as an argument in another func., is CB.

// Program - 1 :  Doing arithmetic calculations

let num1 = 10;
let num2 = 20;

// callback function
const sum = function (x, y) {
  return x + y;
};

// callback function
const multiply = function (x, y) {
  return x * y;
};

// Higher Order Function
const calculate = function (n1, n2, logic) {
  return logic(n1, n2);
};

console.log(calculate(num1, num2, sum));
console.log(calculate(num1, num2, multiply));

// Program - 2 : Finding Sqaures

const square = (len) => {
  return len ** 2;
};

const rectangle = (len, wid) => {
  return len * wid;
};

const res = (len, wid, cb) => {
  return cb(len, wid);
};

const areaOfSquare = res(4, undefined, square);
console.log(areaOfSquare);

const areaOfRectangle = res(10, 20, rectangle);
console.log(areaOfRectangle);
