// prompt for a name and keep doing so until a string is entered
// !yourName evaluates to an empty string

do {
	var yourName = prompt("What is your name?");
} while (!yourName);

console.log(yourName);