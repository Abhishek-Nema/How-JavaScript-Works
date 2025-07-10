// Sort method modifies the original array
// By deafult it sorts the elements by converting them into strings then using their ASCII values

// working of sort(custom_function) with numbers 👇
const numArray = [55, 5, 6, 66, 3, 1];

// it compares two elements at a time,
// if a - b = positive, then swap a and b like akshay kumar meme 😂
// if a - b = negative, then don't swap ji
// if a - b = zero, then keep in original position
// a - b means sort in ascending order , b - a means sort in descending order
numArray.sort((a, b) => a - b);
console.log(numArray);

// working of sort(custom_function) with strings 👇
const strArray = ["SpongeBob", "Patrick", "Sandy", "Squidward"];

// this will sort alphabetically
strArray.sort((a, b) => a.localeCompare(b));

console.log(strArray);
