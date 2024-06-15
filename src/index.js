import Board from "./board";
import allMoves from "./moves-list";

// Create board.
const testBoard = new Board();

// Place knight
const startKnight = testBoard.placeKnight([3, 3]);

// Get Knight location array.
const knightLoc = testBoard.findKnight(testBoard.board);

// Return and print array of all possible moves.
console.log(testBoard.findMoves(knightLoc));

//Print chess board.
console.table(testBoard.board);

allMoves(testBoard.board);