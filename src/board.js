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
    })

    return board;
  }

}

export default Board;