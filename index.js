// This example demonstrates how to pass by copy in JavaScript
// Define a variable name and assign it a value
const name = "John Doe";
// Assign the value of name to otherName
let otherName = name;

// Log the values of name and otherName
console.log(`Name is: ${name}`);
console.log(`Other name is: ${otherName}`);

// Assign a new value to otherName
otherName = "Jane Doe";

// Log the values of name and otherName
console.log(`Name is: ${name}`);
console.log(`Other name is: ${otherName}`);

// Assign a new value to otherName
otherName = 23;

// Log the values of name and otherName
console.log(`Name is: ${name}`);
console.log(`Other name is: ${otherName}`);
