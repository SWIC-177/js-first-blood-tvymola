// Declare variables for the user's name and age
const name = "Tracy";
const age = 16;

/* Function definition for a process that uses an IF/ELSE statement that verifies the user's age prior to allowing entry */
function verifyAdulthood(x, y) {
  if (y >= 18) {
    console.log(`Welcome, ${x}!`);
  } else {
    console.log(`You are not old enough to enter, ${x}.`);
  }
}
// Call the function passing in the users name and age as arguments
verifyAdulthood(name, age);
