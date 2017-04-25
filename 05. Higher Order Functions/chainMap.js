var array = [1, 2, 3, 4, 5, 6];

//we want to double each number and then separately add 5 in another mapping:
var newArray = array.map(function(number) {
	return number * 2;
}).map(function(number) {
	return number + 5;
});

console.log(array);
console.log(newArray);