type Token = "X" | "O";

type Coordinates = {
  row: 0 | 1 | 2;
  column: 0 | 1 | 2;
};

type EmptyCell = "";

type Cell = Token | EmptyCell;

type Row = [Cell, Cell, Cell]

type Board = [Row, Row, Row]

const computeNextBoard = (token: Token, coordinates: Coordinates, board: Board): Board => {
    const nextBoard = board.map(row => [...row]) as Board
    nextBoard[coordinates.row][coordinates.column] = token;
    return nextBoard
};
