/* Prints numbers from 1 to 100, replacing multiples of 3 with "Fizz",
 multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz". */

// The number variable is initialized to 1
// The for loop runs as long as the variable i is less than or equal to 100
// The i variable is incremented by 1 in each iteration
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
