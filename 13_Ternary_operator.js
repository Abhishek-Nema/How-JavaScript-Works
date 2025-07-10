// Ternary operator:
// if condition is true or truthy value before ?, then first value will return
// if condition is false or fasly value before ?, then second value will return

const age = 18;

const userMsg = age > 17 ? "Eligible to vote" : "Not eligible";
console.log(userMsg);

// Conditioanl Chaining in ternary operator (although not majorly used)

const bool = 0;
const result = bool ? "true" : null ? "truthy value" : "falsy value";
console.log(result);
