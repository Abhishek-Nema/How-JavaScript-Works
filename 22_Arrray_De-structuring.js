// array destructuring
const colors = ["red", "green", "yellow", "pink", "blue"];

// in array, things go by index number, so to skip any index we use comma
const [colorRed, colorGreen, , , colorBlue] = colors; // yellow and pink skipped by , ,
console.log(colorBlue, colorRed);

// De-structuring array as an object
const { 2: colorY, 3: colorP } = colors;
console.log(colorY);
