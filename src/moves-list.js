function createList(board) {
    const movesList = [];

    board.forEach((item) => {
      for (let i = 0; i < item.length; i++) {
        movesList.push([]);
      }
    });

    console.log(movesList);
  }

  export default createList;