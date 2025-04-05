var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

var eagle = Object.create(bird);
console.log("eagle: ", eagle);
console.log("does eagle has wings? ", eagle.hasWings);
console.log("can eagle fly? ", eagle.canFly);
console.log("does eagle has feathers? ", eagle.hasFeathers);

var penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin: ", penguin);
console.log("can penguin fly?", penguin.canFly); //prototype olarak olusan penguinde canFly uzerine false yazdik
console.log("can eagle fly? ", eagle.canFly);
