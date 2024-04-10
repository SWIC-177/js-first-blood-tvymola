/* Function definition named createAdder that takes a parameter named
 score and returns a function that takes a parameter named increment and returns the sum of score and increment */

function createAdder(score) {
  // Return a function that takes a parameter named increment and returns the sum of the score and increment value
  return (increment) => score + increment;
}

// Create a variable named addToZero and assign it the result of calling createAdder with an argument of 0
const addToZero = createAdder(0);

// Display the result of calling addToZero with an argument of 3 to the console
console.log(addToZero(3));
// --> 3

// Display the result of calling addToZero with an argument of 6 to the console
console.log(addToZero(6));
// --> 6

// Declare a variable named addToSix and assign it the result of calling createAdder with an argument of 6
const addToSix = createAdder(6);

// Display the result of calling addToSix with an argument of 2 to the console
console.log(addToSix(2));
// --> 8

// Display the result of calling addToSix with an argument of 3 to the console
console.log(addToSix(3));
// --> 9

// Declare a variable named addToNine and assign it the result of calling createAdder with an argument of 9
const addToNine = createAdder(9);

// Display the result of calling addToNine with an argument of 6 to the console
console.log(addToNine(6));
// --> 15

// Display the result of calling addToNine with an argument of 3 to the console
console.log(addToNine(3));
// --> 12
