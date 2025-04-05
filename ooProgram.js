class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at:", this.energy);
  }
  getColor() {
    console.log("Color is: ", this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = "true",
    canClimbTrees = "true",
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = "true", color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "hrr",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log("tiger says", this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("talking parrot says", this.sound);
    }
  }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound();
fiji.makeSound();

console.log(polly.color);
console.log(polly.energy);

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
console.log("penguin", penguin); // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

console.log("penguin says", penguin.sound); // 'shriek'
console.log("can penguin fly?", penguin.canFly); // false
console.log("penguin color: ", penguin.color); // 'black and white'
console.log("penguin energy: ", penguin.energy); // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();
leo.makeSound(false);
leo.makeSound(true);

var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);
