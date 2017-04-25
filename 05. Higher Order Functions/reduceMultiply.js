var array = [1, 2, 3, 4];

var multiplied = array.reduce(function(total, number) {
	return total * number;
});

console.log(multiplied);