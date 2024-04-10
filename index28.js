const younger1 = 13;
let younger2 = younger1;

function incrementAge(age) {
  return age + 1;
}

younger2 = incrementAge(younger2);

console.log(`Younger1 is: ${younger1}`);
console.log(`Younger2 is: ${younger2}`);
