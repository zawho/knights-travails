class Knight {
  constructor(board, [x, y]) {
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      return;
    }
    board[x][y] = "x";
  }
}

export default Knight;
