function multiplier(factor) {
	return function(number) {
		return number * factor;
	}
}

var twice = multiplier(2);
console.log(twice(5));
var threeTimes = multiplier(3);
console.log(threeTimes(4));