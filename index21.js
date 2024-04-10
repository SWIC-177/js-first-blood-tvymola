// This code demonstrates a function returning a function, or the concept known as 'closure'
// Function definition for logging "Outer function" to the console
function outerFunction() {
  console.log("Outer function");

  // Function definition for logging 'Inner function' to the console
  function innerFunction() {
    console.log("Inner function");
  }
  // Return the inner function from the outer function
  return innerFunction;
}
// Call the outerFunction and store the returned function in a variable named returnedFunction
const returnedFunction = outerFunction();

// Call the returned function variable to display the message 'Outer function' and 'Inner function' on the console
returnedFunction();
