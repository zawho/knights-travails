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

  findPosition(x, k, arr) {
    if (x === 1) {
      for (let i = 0; i < arr.length; i++) {
        if (i === k[1] - 2 || i === k[1] + 2) {
          arr[i] = "o";
        }
      }
    }
    if (x === 2) {
      for (let i = 0; i < arr.length; i++) {
        if (i === k[1] - 1 || i === k[1] + 1) {
          arr[i] = "o";
        }
      }
    }
  }

  allMoves(knight) {
    this.board.forEach((item) => {
      if (
        this.board.indexOf(item) === knight[0] - 1 ||
        this.board.indexOf(item) === knight[0] + 1
      ) {
        this.findPosition(1, knight, item);
      }
      if (
        this.board.indexOf(item) === knight[0] - 2 ||
        this.board.indexOf(item) === knight[0] + 2
      ) {
        this.findPosition(2, knight, item);
      }
    });
  }
}

// Next: Condense allMoves() as much as possible and make sure it doesn't go off board.

export default Board;
