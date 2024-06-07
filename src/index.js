import Board from "./board";

const testBoard = new Board();

testBoard.placeKnight([4, 3]);

console.table(testBoard.board);