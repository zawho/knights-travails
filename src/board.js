import Knight from "./knight";

class Board {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const board = [];

    for (let i = 0; i < 8; i++) {
      board[i] = [];
    }

    board.forEach((arr) => {
      for (let i = 0; i < 8; i++) {
        arr[i] = 0;
      }
    });

    return board;
  }

  placeKnight([a, b]) {
    const newKnight = new Knight(this.board, [a, b]);
    return newKnight;
  }

  findKnight(arr) {
    let knight;
    arr.forEach((item) => {
      for (let i = 0; i < item.length; i++) {
        if (item[i] === "x") {
          knight = [arr.indexOf(item), i];
        }
      }
    });
    return knight;
  }

  findPosition(x, k, rowArr, finalArr) {
    if (x === 1) {
      for (let i = 0; i < rowArr.length; i++) {
        if (i === k[1] - 2 || i === k[1] + 2) {
          rowArr[i] = "o";
          finalArr.push([this.board.indexOf(rowArr), i]);
        }
      }
    }
    if (x === 2) {
      for (let i = 0; i < rowArr.length; i++) {
        if (i === k[1] - 1 || i === k[1] + 1) {
          rowArr[i] = "o";
          finalArr.push([this.board.indexOf(rowArr), i]);
        }
      }
    }
  }

  allMoves(knight) {
    const arr = [];
    this.board.forEach((item) => {
      if (
        this.board.indexOf(item) === knight[0] - 1 ||
        this.board.indexOf(item) === knight[0] + 1
      ) {
        this.findPosition(1, knight, item, arr);
      }
      if (
        this.board.indexOf(item) === knight[0] - 2 ||
        this.board.indexOf(item) === knight[0] + 2
      ) {
        this.findPosition(2, knight, item, arr);
      }
    });
    console.log(arr);
    return arr;
  }
}

// Next I need to somehow get all of this into a binary search tree... maybe?

export default Board;
