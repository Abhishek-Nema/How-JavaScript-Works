const numArray = [1, 2, 3, 4, 5, 6];

const doubleNum = function (num) {
  return num * 2;
};

// forEach loop - iterates over each element but kuch return nhi karta
let res1 = numArray.forEach((n) => {
  console.log(n * 2);
});
console.log(res1);

// map() - iterates over each element and returns a new array
let res2 = numArray.map(doubleNum);
console.log(res2);

// find() - it searches for the first element based on satisfied condition and returns that element
let numbersArray = [1, 3, 2, 4, 5, 4];
let answer = numbersArray.find((n) => n === 4);
console.log(answer);

// filter() - iterates over each array elements, and returns new array based on satisfied condition
numbersArray = [10, 30, 20, 40, 50, 40];
const filteredArray = numbersArray.filter((n) => n > 21);
console.log(filteredArray);

// slice() - it returns new array by copying elements from original array
let fruitArray = ["mango", "apple", "banana", "papaya", "melon", "cherry"];
let slicedArray = fruitArray.slice(1, 4); // means index(1) se index(4-1) tak elements
console.log(fruitArray);
console.log(slicedArray);

// splice() - it modifies original array, by adding or removing from it
let vegeiesArray = ["tomato", "potato", "cauliflower", "spinach", "ladyfinger"];
let splicedArray = vegeiesArray.splice(1, 0, "😎"); // means start with index(1), delete 0 elements, add "😎"
console.log(splicedArray);
console.log(vegeiesArray);

// sort() -

// reduce() - it reduces the array to a single value i.e. accumulator's value
const myNumArr = [1, 2, 5, 4, 3];
const maxNumber = myNumArr.reduce((acc, curr_val) => {
  if (acc > curr_val) {
  } else {
    acc = curr_val;
  }
  return acc;
}, 0);
console.log("Maximum number: ", maxNumber);

const cartProducts = [
  {
    productName: "jeans",
    price: 900,
  },
  {
    productName: "shirt",
    price: 700,
  },
  {
    productName: "kurta",
    price: 600,
  },
];

const amountToPay = cartProducts.reduce((initial_val, current_val) => {
  console.log(initial_val);

  return initial_val + current_val.price;
}, 0);
console.log("Final amount to pay: ", amountToPay);
