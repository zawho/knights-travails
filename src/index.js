import Board from "./board";

const testBoard = new Board();

const testKnight = testBoard.placeKnight([3, 3]);

console.table(testBoard.board);

console.log(testBoard.findKnight(testBoard.board));
