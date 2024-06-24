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

function fillBoard(boardVar) {
	let count = -1;
	boardVar.forEach((arr) => {
		for (let i = 0; i < arr.length; i++) {
			count += 1;
			arr[i] = count;
		}
	});
}

function allMoves() {
	const testBoard = new Board();
	const movesList = createList(testBoard.board);

	fillBoard(testBoard.board);

	testBoard.board.forEach((arr) => {
		const rowIndex = testBoard.board.indexOf(arr);
		for (let i = 0; i < arr.length; i++) {
			testBoard.findMoves([rowIndex, i], movesList[arr[i]]);
		}
	});

	return movesList;
}

function getValue(coords, boardVar) {
	let coordsVal;
	boardVar.forEach((arr) => {
		const rowIndex = boardVar.indexOf(arr);
		for (let i = 0; i < arr.length; i++) {
			if (rowIndex === coords[0] && i === coords[1]) {
				coordsVal = arr[i];
			}
		}
	});
	return coordsVal;
}

function getIndex(value, boardVar) {
	let valIndex;
	boardVar.forEach((arr) => {
		const rowIndex = boardVar.indexOf(arr);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				valIndex = [rowIndex, i];
			}
		}
	});
	return valIndex;
}

/* function KnightMoves(start, end) {
	
} */

export { allMoves };
