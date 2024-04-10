// Passing Functions as Arguments to Other Functions
// Function definition for displaying "Hello!" on the console
function sayHello() {
  console.log("Hello!");
}

// Function definition for executing a placeholder function
function executeFunction(func) {
  func();
}

// Function call that invokes the executeFunction function passing in the sayHello function into the func placeholder
executeFunction(sayHello);
