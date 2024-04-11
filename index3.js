// This example will demonstrate how to pass by reference using the spread operator
// Declare a person object with nested address object
const person = {
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// Declare a function that will update the name property of the person object
function updatePersonName(p, newName) {
  // Create a copy of the person object using the spread operator
  const p2Update = { ...p };

  // Update the name property of the p2Update object
  p2Update.name = newName;
  return p2Update;
}

// Call the updatePersonName function and pass the person object and the new name to the updatedPerson variable
const updatedPerson = updatePersonName(person, "Jane Doe");

// Display the updatedPerson object on the console
console.log(updatedPerson);
