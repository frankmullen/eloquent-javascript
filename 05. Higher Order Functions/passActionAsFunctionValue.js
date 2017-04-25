function logEach(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

// in this one, a predefined function isn't passed to forEach, but a function
// value is created on the spot instead
forEach(numbers, function(number) {
	sum += number;
});
console.log(sum);

logEach([1, 2, 3, 4, 5]);
forEach([5, 4, 3, 2, 1], console.log);