import Board from "./board";
import createList from "./moves-list";
import listMoves from "./moves-list";

// Create board.
const testBoard = new Board();

// Place knight
const startKnight = testBoard.placeKnight([3, 3]);

// Get Knight location array.
const knightLoc = testBoard.findKnight(testBoard.board);

// Return and print array of all possible moves.
console.log(testBoard.allMoves(knightLoc));

//Print chess board.
console.table(testBoard.board);

createList(testBoard.board);