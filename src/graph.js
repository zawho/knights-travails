import Board from "./board";

class Graph {
	constructor() {
		const newBoard = new Board();
		this.boardClass = newBoard;
		this.board = newBoard.board;
		this.graph = this.allMoves(newBoard);
	}

	createList() {
		const movesList = [];

		this.board.forEach((item) => {
			for (let i = 0; i < item.length; i++) {
				movesList.push([]);
			}
		});
		return movesList;
	}

	allMoves() {
		const movesList = this.createList();

		this.board.forEach((arr) => {
			const rowIndex = this.board.indexOf(arr);
			for (let i = 0; i < arr.length; i++) {
				this.boardClass.findMoves([rowIndex, i], movesList[arr[i]]);
			}
		});
		return movesList;
	}

	getValue(coords) {
		let coordsVal;
		this.board.forEach((arr) => {
			const rowIndex = this.board.indexOf(arr);
			for (let i = 0; i < arr.length; i++) {
				if (rowIndex === coords[0] && i === coords[1]) {
					coordsVal = arr[i];
				}
			}
		});
		return coordsVal;
	}

	getIndex(value) {
		let valIndex;
		this.board.forEach((arr) => {
			const rowIndex = this.board.indexOf(arr);
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === value) {
					valIndex = [rowIndex, i];
				}
			}
		});
		return valIndex;
	}

	errorMsg(start, end) {
		if ((start[0] > 7 || start[0] < 0) || (start[1] > 7 || start[1] < 0)) {
			console.log('Start coordinates must be less than 8 and greater than -1.');
			return true;
		} else if ((end[0] > 7 || end[0] < 0) || (end[1] > 7 || end[1] < 0)) {
			console.log('End coordinates must be less than 8 and greater than -1.');
			return true;
		} else if (start[0] === end[0] && start[1] === end[1]) {
			console.log('Please enter different start and end coordinates.');
			return true;
		}
		return false;
	}

	displayMsg(arr) {
		const randPath = Math.floor(Math.random() * arr.length);

		if (arr.length === 1) {
			console.log(`The shortest path is a single move:`);
		} else {
			console.log 
			(`The shortest path is ${arr[randPath].length - 1} moves. There are ${arr.length} possible shortest paths. Below is one such path:`);
		}
		

		for (let i = 0; i < arr[randPath].length; i++) {
			console.log(`[${this.getIndex(arr[randPath][i])}]`);
		}
	}

	knightMoves(start, end) {

		if (this.errorMsg(start, end)) {
			return;
		}

		const startVal = this.getValue(start);
		const endVal = this.getValue(end);

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

			for (let i = 0; i < this.graph[current].length; i++) {
				const next = this.graph[current][i];
				if (!visited.has(next)) {
					queue.push([next, [...path, next]]);
				}
			}
		}
		this.displayMsg(paths);
		return paths;
	}
}

export default Graph;
