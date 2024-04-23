// This example demonstrates how to pass by reference in JavaScript
// Declare a nested object literal with properties
const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// Create a new object with the same properties as the original object.
const otherPerson = { ...person };

// Assign a new value to the name property of otherPerson
otherPerson.name = "Jane Doe";

// Log the values of the name property of person and otherPerson to the console.
console.log(`Person's name is: ${person.name}`);
console.log(`Other Person's name is: ${otherPerson.name}`);
