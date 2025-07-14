// try: where our error may happen
// catch: if error founds then catch the error and puts here
// finally: this block always executes whether error occurs or not

// errVariable.name: to find the error name
// errVariable.message: to find the message of error
// errVariable.stack: to get full anatomy of error

// new throw Error("Error aaya ji"): to throws error manually

// program1
const a = 10;

try {
  const b = df;
  const res = a / b;
} catch (err) {
  console.log("Error occcured:", err.name);
} finally {
  console.log("code execution completed!");
}

// program2
const num1 = 55;
const num2 = 45;

try {
  let res = num1 + num2;
  throw new Error("Addition not possible");
  console.log(res);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  // console.log(err.stack);
}
