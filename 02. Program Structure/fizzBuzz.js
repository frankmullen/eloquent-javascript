// Print all numbers from 1 to 100. For numbers divisible by 3 and 5, print FizzBuzz.
// For numbers only divisible by 3, print Fizz, and for numbers only divisible by 5, 
// print Buzz.

var num = 1;

while (num <= 100) {
	if (num % 3 == 0 && num % 5 == 0) {
		console.log("FizzBuzz");
	} else if (num % 3 == 0) {
		console.log("Fizz");
	} else if (num % 5 == 0) {
		console.log("Buzz");
	} else console.log(num);
	num++;
}