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

// Use an arrow function that will replicate the people object into an object named person update the name property of the person object for odd id's
function renameOdds(p) {
  const renamedPeople = p.map((person) => {
    if (person.id % 2 !== 0) {
      return { ...person, name: "Odd Name" };
    }
    return person;
  });

  return renamedPeople;
}

console.log(renameOdds(people));
