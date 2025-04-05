// const bicycle = {
//   bell: function () {
//     console.log("Ring, ring! Watch out, please!");
//   },
// };

// const door = {
//   bell: function () {
//     console.log("Ring, ring! Come here, please!");
//   },
// };

// bicycle.bell();
// door.bell();

// function ringTheBell(thing) {
//   console.log(thing.bell());
// }

// ringTheBell(bicycle);
// ringTheBell(door);

class Ring {
  ringTheBell() {
    console.log("i am bell");
  }
}

class Bicycle extends Ring {
  ringTheBell() {
    super.ringTheBell();
    console.log("i am bicycle bell");
  }
}

class Door extends Ring {
  ringTheBell() {
    console.log("i am door bell");
  }
}

let bicycle = new Bicycle();
let door = new Door();

bicycle.ringTheBell();
door.ringTheBell();
