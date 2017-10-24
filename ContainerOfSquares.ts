import Square from "./Square";
export default class ContainerOfSquares {
    squares: Square[] = new Array<Square>();
    contains(value: number): boolean  {
        return this.squares.filter((square) => square.value == value).length !== 0
    }
}
