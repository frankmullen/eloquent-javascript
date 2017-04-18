function isEven(num) {
	var abs = Math.abs(num);
	if (abs == 0)
		return true;
	else if (abs == 1) 
		return false;
	else return isEven(abs - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
