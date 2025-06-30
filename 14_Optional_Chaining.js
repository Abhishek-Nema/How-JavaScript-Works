// optional chaining, use to short-circuit if null or undefined encounters
const user = {
  firstName: "Anurag",
  lastName: "Singh",
  age: 25,
  address: {
    city: "Delhi",
  },
  getInfo: function () {
    return this.firstName + this.lastName;
  },
};

// works fine
console.log(user.getInfo());

// normal way to check, error will arise due to middleName.length
console.log(user.middleName.length);

// using optional chaining to mitigate error
console.log(user.middleName?.length);

// getDetails is not a func, so we can use ?. to mitigate error
console.log(user.getDetails?.());

// country is nested property, it is not present so undefined will come
console.log(user.address["country"]);
