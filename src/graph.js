import Board from "./board";

class Graph {
	constructor() {
		const newBoard = new Board();
		this.graph = this.allMoves(newBoard);
	}

	createList(boardVar) {
		const movesList = [];
	
		boardVar.board.forEach((item) => {
			for (let i = 0; i < item.length; i++) {
				movesList.push([]);
			}
		});
	
		return movesList;
	}

	fillBoard(boardVar) {
		let count = -1;
		boardVar.board.forEach((arr) => {
			for (let i = 0; i < arr.length; i++) {
				count += 1;
				arr[i] = count;
			}
		});
	}
	
	allMoves(boardVar) {
		const movesList = this.createList(boardVar);
		this.fillBoard(boardVar);
	
		boardVar.board.forEach((arr) => {
			const rowIndex = boardVar.board.indexOf(arr);
			for (let i = 0; i < arr.length; i++) {
				boardVar.findMoves([rowIndex, i], movesList[arr[i]]);
			}
		});
		return movesList;
	}

	// getValue and getIndex need to be reworked, and determined if necessary

	/* getValue(coords, boardVar) {
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
	
	getIndex(value, boardVar) {
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
	} /*

	/* knightMoves(start, end) {
	
} */
}

export default Graph;
