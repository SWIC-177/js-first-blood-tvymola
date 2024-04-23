/* This example opens the webpage for changing the background color of the page. We use the exec() method from the child_process module to launch the HTML page in the default browser. */

// Define the 'exec' method to run shell commands from the child_process module
const { exec } = require("child_process");

// Path module for working with file paths in Node.js
const path = require("path");

// Define the file path to the HTML file by using the join method of the path module to concatenate the directory name and file name
const filePath = path.join(__dirname, "bg-change.html");

// Call the 'exec' method to run the command 'start' on Windows to open the file
exec(`start ${filePath}`);
