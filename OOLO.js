const Human = {
  init(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

const chris = Object.create("Human").init("Chris", "Coyier"); //nedense calismiyor

console.log(chris.firstName);
console.log(chris.lastName);
