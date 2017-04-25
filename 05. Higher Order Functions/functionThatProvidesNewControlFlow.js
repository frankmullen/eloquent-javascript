function unless(test, then) {
	// if test is false
	if (!test) 
		then();
}

function repeat(times, body) {
	for (var i = 0; i < times; i++) 
		// body is a function that will run on i - see below
		body(i);
}

repeat(7, function(n) {
	unless(n % 2, function() {	// n % 2 will be false if n is even, since 0 is false
		console.log(n, "is even");
	});
});

