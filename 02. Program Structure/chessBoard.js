// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the 
// grid there is either a space or a “#” character. The characters 
// should form a chess board.
/*
// this code has been blocked because it doesn't work for odd number row sizes
// below is the solution from the book, which uses nested loops and works for even
// and odd row numbers
var line = 1;
var board = "";
var rows = 8;

for (var index = 1; index <= rows * rows; index++) {
	if (line % 2 != 0) {
		if (index % 2 != 0) {
			board += " ";
		} else board += "#";
	} else if (line %2 == 0) {
		if (index % 2 == 0) {
			board += " ";
		} else board += "#";
	}
	if (index % rows == 0) {
		board += "\n";
		line++;
	}
}
console.log(board);
	*/
var size = 3;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);