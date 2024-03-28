/* Prints numbers from 1 to 100, replacing multiples of 3 with "Fizz",
multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz". */

// The number variable is initialized to 1
let number = 1;

// The while loop runs as long as the number is less than or equal to 100
while (number <= 100) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
  // The number variable is incremented by 1 in each iteration
  number++;
}
