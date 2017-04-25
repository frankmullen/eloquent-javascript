function deepEqual(val1, val2) {
	
	if (val1 === val2) {
		return true;
	} 

	if (val1 == null || val2 == null || typeof(val1) != 'object' || typeof(val2) != 'object') {
		return false;
	}

	var count1 = 0;
	var count2 = 0;

	for (val in val1) {
		count1++;
	}

	for (val in val2) {
		count2++;
		if (!(val in val1) || !deepEqual(val1[val], val2[val]))
			return false;
	}

	return count1 == count2;
	
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true