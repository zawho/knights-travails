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

	knightTest(start, end, boardVar, graphVar) {
		const startVal = this.getValue(start, boardVar);
		const endVal = this.getValue(end, boardVar);
		console.log(endVal);
		for (let i = 0; i < graphVar.graph[startVal].length; i++) {
			const itemArr = graphVar.graph[startVal][i];
			console.log(graphVar.graph[itemArr]);
		}
	}

	displayMsg(arr, boardVar) {
		const randPath = Math.floor(Math.random() * arr.length);
		
		console.log 
		(`The shortest path is ${arr[randPath].length - 1} moves. There are ${arr.length} possible shortest paths. Below is one such path:`);

		for (let i = 0; i < arr[randPath].length; i++) {
			console.log(`[${this.getIndex(arr[randPath][i], boardVar)}]`);
		}
	}

	knightMoves(start, end, boardVar, graphVar) {
		const startVal = this.getValue(start, boardVar);
		const endVal = this.getValue(end, boardVar);

		let paths = [];
		let queue = [];
		queue.push([startVal, [startVal]]);
		const visited = new Set();

		while (queue.length > 0) {
			let [current, path] = queue.shift();
			visited.add(current);

			if (current === endVal) {
				paths.push(path);
			}

			for (let i = 0; i < graphVar.graph[current].length; i++) {
				const next = graphVar.graph[current][i];
				if (!visited.has(next)) {
					queue.push([next, [...path, next]]);
				}
			}
		}
		this.displayMsg(paths, boardVar);
		return paths;
	}
}

export default Graph;
