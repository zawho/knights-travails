import Board from "./board";
import Tree from "./tree";
import printTree from "./print.js";
import mergeSort from "./merge-sort.js";


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

// Store moves array.
const testArr = testBoard.allMoves(knightLoc);

// Create binary search tree from moves array.
const testTree = new Tree(testBoard.allMoves(knightLoc));

// Print tree.
printTree(testTree.root);