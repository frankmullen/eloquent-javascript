var array = [1, 2, 3, 4, 5, 6];

var doubledEvenArray = array.map(function(number) {
	if (number % 2 == 0)
		return number * 2;
	else return number;
});

console.log(doubledEvenArray);