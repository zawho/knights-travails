import Board from "./board";
import Graph from "./graph";

// Create board.
const testBoard = new Board();

// Place knight
// const startKnight = testBoard.placeKnight([3, 3]);

// Get Knight location array.
// const knightLoc = testBoard.findKnight(testBoard.board);

// Return and print array of all possible moves.
// console.log(testBoard.displayMoves(knightLoc));

// Create and print moves graph.
const testGraph = new Graph();
console.log(testGraph);

// Fill board with numbers.
testGraph.fillBoard(testBoard);

// Print board.
console.table(testBoard.board);

// Get coord value.
testGraph.getValue([3, 3], testBoard);

// Get value coords.
testGraph.getIndex(27, testBoard);

// knightMoves([3, 3], [4, 3]);