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
		});

		return board;
	}

	findPosition(x, k, rowArr, finalArr) {
		if (x === 1) {
			for (let i = 0; i < rowArr.length; i++) {
				if (i === k[1] - 2 || i === k[1] + 2) {
					finalArr.push(rowArr[i]);
				}
			}
		}
		if (x === 2) {
			for (let i = 0; i < rowArr.length; i++) {
				if (i === k[1] - 1 || i === k[1] + 1) {
					finalArr.push(rowArr[i]);
				}
			}
		}
	}

	findMoves(knight, finalArr) {
		this.board.forEach((item) => {
			if (
				this.board.indexOf(item) === knight[0] - 1 ||
				this.board.indexOf(item) === knight[0] + 1
			) {
				this.findPosition(1, knight, item, finalArr);
			}
			if (
				this.board.indexOf(item) === knight[0] - 2 ||
				this.board.indexOf(item) === knight[0] + 2
			) {
				this.findPosition(2, knight, item, finalArr);
			}
		});
	}
}

export default Board;
