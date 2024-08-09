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

	getValue(coords, boardVar) {
		// this.fillBoard(boardVar); // - add this if board is unfilled
		let coordsVal;
		boardVar.board.forEach((arr) => {
			const rowIndex = boardVar.board.indexOf(arr);
			for (let i = 0; i < arr.length; i++) {
				if (rowIndex === coords[0] && i === coords[1]) {
					coordsVal = arr[i];
				}
			}
		});
		// console.log(coordsVal); // - remove this later
		return coordsVal;
	}
	
	getIndex(value, boardVar) {
		// this.fillBoard(boardVar); // - add this if board is unfilled
		let valIndex;
		boardVar.board.forEach((arr) => {
			const rowIndex = boardVar.board.indexOf(arr);
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === value) {
					valIndex = [rowIndex, i];
				}
			}
		});
		// console.log(valIndex); // - remove this later
		return valIndex;
	}

	knightMoves(start, end, boardVar, graphVar) {
		const startVal = this.getValue(start, boardVar);
		for (let i = 0; i < graphVar.graph[startVal].length; i++) {
			const itemArr = graphVar.graph[startVal][i];
			console.log(graphVar.graph[itemArr]);
		}
	}

}

export default Graph;
