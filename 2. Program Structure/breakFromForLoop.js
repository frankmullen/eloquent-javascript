// find the first number that is both greater than or equal to 20
// and also divisible by 8
// Note the empty middle bracket of the for loop

for (var i = 20; ; i++) {
	if (i % 8 === 0) {
		break;
	}
}

console.log(i);