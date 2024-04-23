// Refactored to use less lines of code within the function to a single line
// Declare a person object with name and age properties
const person = {
  name: "John Doe",
  age: 23,
};

// Declare a function that will update the name property of the person object
function updatePersonName(p, newName) {
  // Create a copy of the person object using the spread operator, assign a name property using the newName parameter, and add a hobbies property and assign an array of hobbies
  return { ...p, name: newName, hobbies: ["reading", "writing"] };
}

// Call the updatePersonName function and pass the person object and the new name to the updatedPerson variable
const updatedPerson = updatePersonName(person, "Jane Doe");

// Display the updatedPerson object on the console
console.log(updatedPerson);
