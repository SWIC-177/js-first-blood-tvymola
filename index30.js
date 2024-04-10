/* This function takes a person's name and age as arguments and returns a message based on whether the person is age 18 or older. */

// Function definition to produce a message based on the age of a person
function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

// An array of people objects with their name and age properties defined
const people = [
  {
    name: "John",
    age: 17,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "Peter",
    age: 30,
  },
  {
    name: "Paul",
    age: 35,
  },
];

// This for loop will step through the array of people and call the verifyAdulthood function for each person in the people array
for (let i = 0; i < people.length; i += 1) {
  const adultMessage = verifyAdulthood(people[i].name, people[i].age);

  // Output the message to the console for every person in the people array
  console.log(adultMessage);
}
