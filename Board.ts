import Square from "./Square";
import ContainerOfSquares from "./ContainerOfSquares";
export default class Board {
    isValidBoard(initialBoard: number[][]): boolean {
        if (initialBoard.length !== 9)
        {
            return false;
        }
        return initialBoard.every(row => row.length === 9);
    }
    squares: Square[][];
    boxes: ContainerOfSquares[];
    rows: ContainerOfSquares[];
    columns: ContainerOfSquares[];   
    constructor(initialBoard: (number)[][]) {
        if (!this.isValidBoard(initialBoard)){
            throw new Error("INVALID BOARD NOT SQUARE");
        }
        this.buildBoard(initialBoard);
    }
    buildBoard(initialBoard: (number)[][]) {
        let boxes = new Array<ContainerOfSquares>();        
        let rows = new Array<ContainerOfSquares>();
        let columns = new Array<ContainerOfSquares>();
        let squares = [ new Array<Square>(),
            new Array<Square>(),
            new Array<Square>(),
            new Array<Square>(),
            new Array<Square>(),
            new Array<Square>(),
            new Array<Square>(),
            new Array<Square>(),
            new Array<Square>()];
        initialBoard.forEach(function(row, rowIndex) {
            let rowSquares = new ContainerOfSquares();
            initialBoard[rowIndex].forEach(function(columnAndValue, columnIndex) {
                let columnSquares = columns[columnIndex];
                if (columnSquares == undefined)
                {
                    columnSquares = new ContainerOfSquares();
                    columns.push(columnSquares);
                }
                          
                let boxIndex =  3*(rowIndex % 3) + (columnIndex % 3);
                let boxSquares = boxes[boxIndex];
                if (boxSquares == undefined) {
                    boxSquares = new ContainerOfSquares();
                    boxes[boxIndex] = boxSquares;
                }                
                //create square and relationships
                var square = new Square();
                square.value = columnAndValue;//will be null/undefined
                square.columnIndex = columnIndex;
                square.rowIndex = rowIndex;
                square.boxIndex = boxIndex;        
                square.rowSquares = rowSquares;
                square.columnSquares = columnSquares;
                square.boxSquares = boxSquares;

                //tie the square to the board, rows, columns and boxes. 
                squares[rowIndex][columnIndex] = square;
                rowSquares.squares.push(square);
                columnSquares.squares.push(square);
                boxSquares.squares.push(square);                                                          
            });
            rows.push(rowSquares);            
        });
        this.squares = squares;
        this.boxes = boxes;
        this.rows = rows;
        this.columns = columns;
    }
    solveEasy() {
        var hasChanged: boolean = false;
        this.squares.forEach(row => {
            row.forEach(square => {
                hasChanged = square.solveSquare()
            });
        });
        if (hasChanged)
        {
            this.solveEasy();
        }
     }
    displayBoard() {
        this.squares.forEach(function(row, rowIndex) {
            if (rowIndex % 3 === 0)
            {
                console.log("-------------------------------------------------------------------");
            }
            var displayString = ""
            row.forEach(function (square, colIndex) {
                if (colIndex % 3 === 0) {
                    displayString += " | ";
                }
                displayString += " " + square.value + " ";
                if (colIndex === 8)
                {
                    displayString += " | ";
                }
            });
            
            console.log(displayString + "\n");
            if (rowIndex === 8)
            {
                console.log("-------------------------------------------------------------------");
            }
        });
    }   
}