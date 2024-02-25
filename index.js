// Define a function that prompts the user for their name, then greets the user by name
function greet() {
  let name = prompt("What's your name?");
  return name;
}

// Call the function to pass the name value to the console log
const userName = greet();

// Print the result to the console greeting the user
console.log("Hello, ", userName);
