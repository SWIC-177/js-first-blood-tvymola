// Refactored to reduce the number of lines of code
const person = {
  name: "John Doe",
  age: 23,
};
function updatePersonName(p, newName) {
  return { ...p, name: newName, hobbies: ["reading", "writing"] };
}

const updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);
