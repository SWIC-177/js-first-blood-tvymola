// Last exercise for week 11
// Function definition for a function that takes one parameter named score and returns a function that increments the score
function createScoreIncrement(score) {
  // Return a function that increments the score by a given value
  return function incrementScore(increment) {
    // Increment the score by the given value and display the updated score
    const updatedScore = score + increment;
    return updatedScore;
  };
}

// Assign the returned function from the createScoreIncrement function to a variable named incrementScoreBy3

const incrementScoreBy3 = createScoreIncrement(0);

// Call the incrementScoreBy3 variable that invokes the function with an argument of 3 and outputs the result to the console

console.log(incrementScoreBy3(3));
// --> 3
console.log(incrementScoreBy3(5));
// --> 8
