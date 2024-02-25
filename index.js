// Define a function that prompts the user for their name, then greets the user by name
function greet() {
  let username = window.prompt("What is your name?");
  return username;
}

// Call the function to pass the name value to the console log
const user = greet();

// Print the result to the console greeting the user
console.log("Hello, ", user);
