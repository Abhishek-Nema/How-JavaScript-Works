// simple arrow function, with no params
const arrowFunc = () => {
  return "Hey";
};

const res1 = arrowFunc1();
console.log(res1);

// simple arrow function, with one params
const arrowFunc2 = (name) => {
  return "Hey " + name;
};

const res2 = arrowFunc2();
console.log(res2);

// or, In single params we can also write arrow function without ()
const anotherArrowFunc = (age) => {
  return "Age is " + age;
};
const ageResult = anotherArrowFunc();
console.log(ageResult);

// hoisting is not possible with arrow function
