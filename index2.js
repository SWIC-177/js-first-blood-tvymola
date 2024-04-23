/* This example opens the webpage for adding a new element to the page. We use the exec() method from the child_process module to execute the command to open the HTML file. */

// Define the 'exec' method to run shell commands
const { exec } = require("child_process");

// Path module for working with file paths in Node.js
const path = require("path");

// Define the file path to the HTML file by using the join method of the path module to concatenate the directory name and file name
const filePath = path.join(__dirname, "add-new-element.html");

// Use the 'exec' method to launch the Windows 'start' command to open the file defined by the file path
exec(`start ${filePath}`);
