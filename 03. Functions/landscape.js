// both nested functions can see the result variable, but can't see
// each others count variables.

function landscape() {
	var result = "";
	function flat(size) {
		for (var count = 0; count < size; count++) {
			result += "_";
		}
	};

	function mountain(size) {
		result += "/";
		for (var count = 0; count < size; count++) {
			result += "'";
		}
		result += "\\";
	}

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
}

console.log(landscape());