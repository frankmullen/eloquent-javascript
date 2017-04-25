function arrayToList(arr) {
	var list = null;
	for (var i = arr.length - 1; i >= 0; i--) {
		list = prepend(arr[i], list);
	}
	return list;
} 

function listToArray(list) {
	var arr = [];
	for (var node = list; node; node=node.rest) {
		arr.push(node.value);
	}
	return arr;
}

function prepend(element, list) {
	list = {value: element, rest:list};
	return list;
}

function nth(list, number) {
	if (!list)
		return undefined;
	if (number == 0) 
		return list.value;
	else {
		return nth(list.rest, number - 1);
	}
}

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, arrayToList([20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));