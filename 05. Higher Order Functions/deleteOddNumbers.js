var array = [1, 2, 3, 4, 5, 6];

var newArray = array.filter(function(number) {
	return number % 2 == 0;
});

console.log(newArray);

var doubledEvens = array.filter(function(number) {
	return number % 2 == 0;
}).map(function(number) {
	return number * 2;
});

console.log(doubledEvens);