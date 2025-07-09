// spread operator is used to spread the values, failana ek-ek karke

// working with array
let arr1 = ["one", 2, "three"];
let arr2 = [4, 5, "six"];

let combinerArray = [...arr1, ...arr2];
console.log(combinerArray);

// working with obj
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  c: 3,
  d: 4,
};

let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// working with function
const numArr = [1, 2, 3, 4, 5];

function add(...params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum = sum + params[i];
  }
  return sum;
}

// here ...numArr is a spread operator
const addResult = add(...numArr);
console.log(addResult);
