import Board from "./board";
import { allMoves } from "./graph";

// Create board.
const testBoard = new Board();

// Place knight
const startKnight = testBoard.placeKnight([3, 3]);

// Get Knight location array.
const knightLoc = testBoard.findKnight(testBoard.board);

// Return and print array of all possible moves.
// console.log(testBoard.displayMoves(knightLoc));

//Print chess board.
// console.table(testBoard.board);

// allMoves();

// knightMoves([3, 3], [4, 3]);

// clean up needed
// re org needed
