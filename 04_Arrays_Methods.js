// forEach loop, iterates over each element but returns nothing
const numArray = [1, 2, 3, 4, 5, 6];

const doubleNum = function (num) {
  return num * 2;
};

// forEach kuch return nhi karta, isliye forcefully console.log karna pda 😑
let res1 = numArray.forEach((n) => console.log(n * 2));
console.log(res1);

// map function, iterates over each element and returns new array
let res2 = numArray.map(doubleNum);
console.log(res2);
