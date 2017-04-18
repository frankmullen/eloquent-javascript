// find the first number that is both greater than or equal to 20
// and also divisible by 8. See also breakFromForLoop.js
// Note, doing it this way requires less code and doesn't require a break statement.

var i = 20;

while (i % 8 !== 0) {
	i++;
}

console.log(i);