import Graph from "./graph";

// Create and print board and graph.
const testGraph = new Graph();
console.table(testGraph.board);
console.log(testGraph.graph);

// Calculate shortest path.
testGraph.knightMoves([3, 3], [4, 3]);
