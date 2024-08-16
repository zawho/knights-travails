import Board from "./board";
import Graph from "./graph";

// Create board.
const testBoard = new Board();

// Create and print moves graph.
const testGraph = new Graph();
console.log(testGraph.graph);

// Print board.
console.table(testBoard.board);

// Calculate shortest path.
testGraph.knightMoves([3, 3], [4, 3], testBoard, testGraph);
