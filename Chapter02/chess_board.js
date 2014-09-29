/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program 
so that it works for any size, outputting a grid of the given width and height.
*/ 

var size = prompt("Please select a number to determine board size: ", "");
while (isNaN(size)){
  alert("Board size must be a number.");
  var size = prompt("Please select a number to determine board size: ", "");
}
var board = "";
for (var row = 0; row < size; row++){
  for (var column = 0; column < size; column++){
    if ((row % 2 == 0) && (column % 2 == 0) || (row % 2 == 1) && (column % 2 == 1)) board += "#";
    else board += " ";
  }
  board += "\n"
};
console.log(board);


   