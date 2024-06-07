class Board {

  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const row = [];
    const board = [];

    for (let i = 0; i < 8; i++) {
      row[i] = 0;
    }

    for (let i = 0; i < 8; i++) {
      board[i] = row;
    }
    return board;
  }

}

export default Board;