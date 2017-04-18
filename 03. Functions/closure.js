function doubleValue(n) {
	var localVariable = n;
	return function() {
		return localVariable * 2;
	}
}

var double1 = doubleValue(1);
var double2 = doubleValue(2);

console.log(double1); //returns [Function]
console.log(double1());
console.log(double2());
