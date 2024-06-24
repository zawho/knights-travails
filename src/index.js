import Board from "./board";
import Graph from "./graph";

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

// knightMoves([3, 3], [4, 3]);

const testGraph = new Graph();

console.log(testGraph);

// clean up needed
// re org needed
