// Temporal Dead Zone : it is the area between hoisting and initizalization of let/const variable.

console.log(a);
const b = 5;
let a = 25;

// Reference Error (run time error): when js engine is not able to find or refer the variable in the scope.

// Syntax Error (compile time error): when code is not following the rules of programming

// const z;
z = 51;

// Type Error (run time error):  when you try to do something that the type doesn’t support

const xyz = 99;
xyz = 1000;
console.log(xyz);

// let : let can be hoisted but stays in TDZ until initialize. cannot re-declare "let" variable

// const : const can also be hoisted but stays in TDZ until declare + initialize. cannot re-declare and re-initialize "const" variable
