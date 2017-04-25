function reverseArray(arr) {
	var newArr = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	var middle = Math.floor((arr.length - 1) / 2);
	for (var i = 0; i <= middle; i++) {
		var temp = arr[arr.length-1-i];
		arr[arr.length-1-i] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);