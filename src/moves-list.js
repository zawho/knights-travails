import Board from "./board";

function createList(board) {
    const movesList = [];

    board.forEach((item) => {
      for (let i = 0; i < item.length; i++) {
        movesList.push([]);
      }
    });

    return movesList;
  }

  function allMoves() {
    const testBoard = new Board();
    const movesList = createList(testBoard.board);

    for (let i = 0; i < testBoard.board[0].length; i++) {
    movesList[testBoard.board[0][i]].push(testBoard.findMoves([0, i]));
    }

    console.log(movesList[0]);

  }

  export default allMoves;