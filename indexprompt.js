const prompt = require("prompt-sync")({ sigint: true });

/* Define a function that prompts the user for their name, then greets the user by name. Use the prompt-sync package to get user input. */

function greet() {
  const name = prompt("What's your name?");
  const greeting = `Hello, ${name}`;
  // Print the result to the console greeting the user
  console.log(greeting);
}

// Call the function to greet the user
greet();
