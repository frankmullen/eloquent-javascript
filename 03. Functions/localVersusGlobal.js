var x = "outside";

function f1() {
	var x = "inside f1";
};

f1();
console.log(x); // outside

function f2() {
	x = "inside f2";
};

f2();
console.log(x); // inside f2