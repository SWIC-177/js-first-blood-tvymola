// Refactored to use an arrow function to update the name property and add a hobbies property to the person object
// Declare a person object with name and age properties
const person = {
  name: "John Doe",
  age: 23,
};

// Use an arrow function that will update the properties of the person object
const updatePersonName = (p, newName) => ({
  ...p,
  name: newName,
  hobbies: ["reading", "writing"],
});

// Call the updatePersonName function and pass the person object and the new name to the updatedPerson variable
const updatedPerson = updatePersonName(person, "Jane Doe");

// Display the updatedPerson object on the console
console.log(updatedPerson);
