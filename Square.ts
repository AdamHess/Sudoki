import * as _ from 'underscore';
import ContainerOfSquares from './ContainerOfSquares';
export default class Square {
    value: number;    
    rowSquares: ContainerOfSquares;
    columnSquares: ContainerOfSquares;
    boxSquares: ContainerOfSquares;
    rowIndex: number;
    columnIndex: number;
    boxIndex: number;

    isValidValue(potentialEntry: number): boolean {
        return !(this.rowSquares.contains(potentialEntry) &&
        this.columnSquares.contains(potentialEntry) &&
        this.boxSquares.contains(potentialEntry));    
    }

    validValues(): number[] {
        if (this.value !== 0)
        {
            return [];
        }
        else 
        {
            return [1,2,3,4,5,6,7,8,9].filter(val => this.isValidValue(val))
        }
    }
    _uniqueValuesForContainer(container: ContainerOfSquares, observedSquareIndex: number): number[] {
        let possibleValues = new Array<number>();
        let validValues = container.squares.map(sq => sq.validValues());
        let squarePossibleValues = validValues.splice(observedSquareIndex, 1);
        var retval = _.chain(validValues)
        .flatten()
        .unique()
        .difference(squarePossibleValues)
        .value();
        return retval;

    }
    _uniqueValues(): number[] {
              let uniqueBox = this._uniqueValuesForContainer(this.boxSquares, this.boxIndex);
        let uniqueRow = this._uniqueValuesForContainer(this.rowSquares, this.rowIndex);
        let uniqueColumn = this._uniqueValuesForContainer(this.columnSquares, this.columnIndex);
        if (this.rowIndex == 1 && this.columnIndex==4)
        {
            debugger;
        }
        return _.intersection(uniqueBox, uniqueColumn, uniqueColumn);
    }

    solveSquare(): boolean {

        let possibleValues = this._uniqueValues();

        if (possibleValues.length === 1) {
            this.value = possibleValues[0];
            return true;
        }
        return false;
    }
}



