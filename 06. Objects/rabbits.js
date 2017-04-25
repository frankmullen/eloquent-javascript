var rabbit = {};
rabbit.eat = function(food) {
	console.log("The rabbit eats a " + food);
}

rabbit.eat("carrot");

function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
}

var whiteRabbit = {type: "white", speak:speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers. How late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.")
