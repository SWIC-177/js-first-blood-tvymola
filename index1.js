// This function is used to demonstrate the concept of pass by value in JavaScript
// Declare a constant variable younger1 and assign it a value
const younger1 = 13;

// Assign the value of younger1 to younger2
let younger2 = younger1;

// Function definition for incrementing the age
function incrementAge(age) {
  return age + 1;
}

// Function call that invokes the incrementAge function reassigning the output of the function to younger2
younger2 = incrementAge(younger2);

// Log the values of younger1 and younger2 to the console
console.log(`Younger1 is: ${younger1}`);
console.log(`Younger2 is: ${younger2}`);
