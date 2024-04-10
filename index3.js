// This example will demonstrate how to pass by reference using the spread operator
const person = {
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

function updatePersonName(p, newName) {
	const p2Update = { …p };
	
	p2Update.name = newName;
	return p2Update;
}

const  updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);
