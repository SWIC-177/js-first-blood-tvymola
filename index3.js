/* Use the navigator.onLine property to check if the browser is currently online or offline. This can be useful for handling network-related functionality in your web applications. */

// Define a navigator object with an online property
const navigator = { onLine: true };

// Check if the browser is online or offline using the navigator.onLine property
const isOnline = navigator.onLine;

// Output the online status of the browser to the console
console.log(`Online Status: ${isOnline}`);

// MDN Reference: navigator.onLine
