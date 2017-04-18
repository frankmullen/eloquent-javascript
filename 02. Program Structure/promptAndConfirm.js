/*
 * use prompt_confirm.html to run these.
 * they aren't used much in modern programming
 */
confirm("Shall we then?");
prompt("Tell me everything you know", "...");

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber)) {
	alert("Your number is the square root of " + theNumber * theNumber);
	if (theNumber < 10) {
		alert("Small");
	} else if (theNumber < 100) {
		alert("Medium");
	} else {
		alert("Large");
	}
} else {
	alert("Hey, why didn't you enter a number?");
}

