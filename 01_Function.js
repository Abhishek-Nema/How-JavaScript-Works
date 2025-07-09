// Different ways to work with function

// 1. using Function Declaration
function sayHi() {
  return "Hi ji";
}
const sayHiOutput = sayHi();
console.log(sayHiOutput);

// 2. using Function Expression
const sayHey = function () {
  // function without name 👆 is called Anonymous Function
  return "Hey ji";
};
const sayHeyOutput = sayHey();
console.log(sayHeyOutput);

// 3.using Arrow Function
const sayHello = () => {
  return "Hello ji";
};
const sayHelloOutput = sayHello();
console.log(sayHelloOutput);

// // using rest parameters (...) to add numbers coming from arguments
// function add(...params) {
//   let total = 0;
//   //   for...of loop
//   for (let num of params) {
//     total = total + num;
//   }
//   return total;
// }

// const addResult = add(1, 2, 3, 4, 5);
// console.log(addResult);

// // it's same like below i.e. passing array in args
// function add1(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total = total + num;
//   }
//   return total;
// }

// const addResult1 = add1([6, 7, 8, 9, 10]);
// console.log(addResult1);
