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

  allMoves(knight) {
    this.board.forEach((item) => {
      if (this.board.indexOf(item) === (knight[0] - 1)) {
        for (let i = 0; i < item.length; i++) {
          if (i === (knight[1] - 2) || i === (knight[1] + 2)) {
            item[i] = 'o';
          }
        }
      }
      if (this.board.indexOf(item) === (knight[0] - 2)) {
        for (let i = 0; i < item.length; i++) {
          if (i === (knight[1] - 1) || i === (knight[1] + 1)) {
            item[i] = 'o';
          }
        }
      }
      if (this.board.indexOf(item) === (knight[0] + 1)) {
        for (let i = 0; i < item.length; i++) {
          if (i === (knight[1] + 2) || i === (knight[1] - 2)) {
            item[i] = 'o';
          }
        }
      }
      if (this.board.indexOf(item) === (knight[0] + 2)) {
        for (let i = 0; i < item.length; i++) {
          if (i === (knight[1] + 1) || i === (knight[1] - 1)) {
            item[i] = 'o';
          }
        }
      }
    });
  }

}

// Next: Condense allMoves() as much as possible and make sure it doesn't go off board.
// First can combine similar if statements to condense.

export default Board;
