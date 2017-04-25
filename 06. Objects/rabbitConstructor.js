function Rabbit(type) {
	this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log((blackRabbit.type));

// to add another method, we can use the prototype property:

Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};

blackRabbit.speak("Doom");

// Overriding derived properties
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

// Prototype Inheritance
Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig");
}