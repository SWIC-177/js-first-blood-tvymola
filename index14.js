// Description: Write a function that takes an array of people objects and renames the name of the people whose id is odd to "Odd Name".

// Declare an array of people objects with id, name, and age properties
const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

// Define the function to replicate the people object into a new object named person, assign the object to a variable named renamedPeople.
function renameOdds(p) {
  // Use the map method to iterate through the people array and update the name property of the person object for odd id's
  const renamedPeople = p.map((person) => {
    if (person.id % 2 !== 0) {
      return { ...person, name: "Odd Name" };
    }
    return person;
  });
  // Return the renamedPeople object
  return renamedPeople;
}
// Call the renameOdds function and pass the people array to the renamedPeople variable
console.log(renameOdds(people));
