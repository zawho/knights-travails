import Board from "./board";

const testBoard = new Board();

const startKnight = testBoard.placeKnight([3, 3]);

const knightLoc = testBoard.findKnight(testBoard.board);

testBoard.allMoves(knightLoc);

console.table(testBoard.board);
