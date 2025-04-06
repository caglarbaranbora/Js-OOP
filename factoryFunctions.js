function human(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

const chris = human("Chris", "Coyier"); //new tanimlama kelimesi kullanmadan yazdik

console.log(chris.firstName); // Chris
console.log(chris.lastName); // Coyier
