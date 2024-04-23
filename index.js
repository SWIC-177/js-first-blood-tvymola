/* These examples demonstrate how the Navigator object in the BOM can be used to access various properties and functionalities related to the user's browsing environment. */

// Define a navigator object with language and online properties
const navigator = { language: "en-US", onLine: true };

// Access the Navigator Object in JavaScript to Get Browser language
const preferredLanguage = navigator.language;

// Output the preferred language to the console using a template literal
console.log(`Preferred Language: ${preferredLanguage}`);

// MDN Reference: navigator.language

/* We can also use the navigator.onLine property to check if the browser is currently online or offline. This can be useful for handling network-related functionality in your web applications. */

// Check if the browser is online or offline using the navigator.onLine property
const isOnline = navigator.onLine;

// Output the online status of the browser to the console
console.log(`Online Status: ${isOnline}`);

// MDN Reference: navigator.onLine
