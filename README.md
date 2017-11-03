# Learning Webpack, Yarn and Typescript through solving Sudoku

This project is an initial work up of solving sudoku. Currently it's in a non-solution or puzzle solving state. 

Right now I just have the board represented as an Object Oriented Solution. 

All squares know what box, row and column they belong to.

The boxIndex is for the index in one of the sub 3x3 box. The index = row + 3*column. 

Some ideas include: 

1. create a "Shadow board" for assumptions about various rows and columns and see how that would change the actual board
2. use a process of elimination for values allowed to be entered. 
3. remainder for column, row or box. 

