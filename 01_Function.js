// using rest parameters (...) to add numbers coming from arguments
function add(...params) {
  let total = 0;
  //   for...of loop
  for (let num of params) {
    total = total + num;
  }
  return total;
}

const addResult = add(1, 2, 3, 4, 5);
console.log(addResult);

// it's same like below i.e. passing array in args
function add1(arr) {
  let total = 0;
  for (let num of arr) {
    total = total + num;
  }
  return total;
}

const addResult1 = add1([6, 7, 8, 9, 10]);
console.log(addResult1);

// using arguments i.e. old way to add numbers coming from arguments
function add2() {
  let total2 = 0;
  //   for loop
  for (let i = 0; i < arguments.length; i++) {
    total2 = total2 + arguments[i];
  }
  return total2;
}

const addResult2 = add2(6, 7, 8, 9, 10);
console.log(addResult2);
