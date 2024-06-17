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
    let testVar = -1;

    testBoard.board.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        testVar += 1;
        arr[i] = testVar;
      }
    })

    testBoard.board.forEach((arr) => {
      for (let i = 0; i < arr.length; i++) {
        movesList[arr[i]].push(testBoard.findMoves([testBoard.board.indexOf(arr), i]));
      }
    })

    console.table(testBoard.board);
    console.log(movesList);
  }

  export default allMoves;