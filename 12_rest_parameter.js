// rest paramter collects the values and puts them in array
// rest parameter is used in function parameter

// here ...params is rest parameter
function addNums(...params) {
  console.log(params);
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum = sum + params[i];
  }
  return sum;
}

let res = addNums(1, 2, 3, 4, 5);
console.log(res);

// we can also pass other variables before rest parameter
const numArr = [10, 20, 30, 40, 50, 60];

function printNums(x, y, ...restParams) {
  console.log(`value of x: ${x}`);
  console.log(`value of y: ${y}`);
  console.log(`value of restParams: ${restParams}`);
}

const output = printNums(...numArr);
console.log(output);

// fun excercise
const numberArr = [1, 5, 4, 6, 8, 2];

function filteredArray(...params) {
  return params.filter((n) => n > 4);
}

const filteredArrayOutput = filteredArray(...numberArr);
console.log(filteredArrayOutput);
