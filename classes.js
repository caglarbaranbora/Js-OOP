class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }

  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }

  lightStatus() {
    console.log("Lights On?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    console.log(Object.getPrototypeOf(this));
  }
}

let redTrain = new Train("red", false);
redTrain.toggleLights();
redTrain.lightStatus();
redTrain.getSelf();
redTrain.color = redTrain.getPrototype();

class HighSpeedTrain extends Train {
  constructor(passenger, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passenger = passenger;
    this.highSpeedOn = highSpeedOn;
  }

  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("high speed status: ", this.highSpeedOn);
  }

  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log("lights are 100% operational");
  }
}

var highSpeed = new HighSpeedTrain(200, false, "green", false);

highSpeed.getPrototype();

// let redTrain = {
//   color: "red",
//   lightOn: true,
// };

// let greenTrain = Object.create(redTrain);

// console.log("green train: ", greenTrain);
// console.log("green train: ", greenTrain.color);
// console.log("green train: ", greenTrain.lightOn);

// let blueTrain = Object.create(redTrain);
// blueTrain.color = "blue";
// blueTrain.lightOn = false;

// console.log("blue train: ", blueTrain);
// console.log("blue train: ", blueTrain.color);
// console.log("blue train: ", blueTrain.lightOn);
// console.log("green train: ", greenTrain);
