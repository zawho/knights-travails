/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ \"./src/knight.js\");\n\n\nclass Board {\n\tconstructor() {\n\t\tthis.board = this.createBoard();\n\t}\n\n\tcreateBoard() {\n\t\tconst board = [];\n\n\t\tfor (let i = 0; i < 8; i++) {\n\t\t\tboard[i] = [];\n\t\t}\n\n\t\tboard.forEach((arr) => {\n\t\t\tfor (let i = 0; i < 8; i++) {\n\t\t\t\tarr[i] = 0;\n\t\t\t}\n\t\t});\n\n\t\treturn board;\n\t}\n\n\tplaceKnight([a, b]) {\n\t\tconst newKnight = new _knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.board, [a, b]);\n\t\treturn newKnight;\n\t}\n\n\tfindKnight(arr) {\n\t\tlet knight;\n\t\tarr.forEach((item) => {\n\t\t\tfor (let i = 0; i < item.length; i++) {\n\t\t\t\tif (item[i] === \"x\") {\n\t\t\t\t\tknight = [arr.indexOf(item), i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\treturn knight;\n\t}\n\n\tdisplayPosition(x, k, rowArr, finalArr) {\n\t\tif (x === 1) {\n\t\t\tfor (let i = 0; i < rowArr.length; i++) {\n\t\t\t\tif (i === k[1] - 2 || i === k[1] + 2) {\n\t\t\t\t\trowArr[i] = \"o\";\n\t\t\t\t\tfinalArr.push([this.board.indexOf(rowArr), i]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (x === 2) {\n\t\t\tfor (let i = 0; i < rowArr.length; i++) {\n\t\t\t\tif (i === k[1] - 1 || i === k[1] + 1) {\n\t\t\t\t\trowArr[i] = \"o\";\n\t\t\t\t\tfinalArr.push([this.board.indexOf(rowArr), i]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tdisplayMoves(knight) {\n\t\tconst arr = [];\n\t\tthis.board.forEach((item) => {\n\t\t\tif (\n\t\t\t\tthis.board.indexOf(item) === knight[0] - 1 ||\n\t\t\t\tthis.board.indexOf(item) === knight[0] + 1\n\t\t\t) {\n\t\t\t\tthis.displayPosition(1, knight, item, arr);\n\t\t\t}\n\t\t\tif (\n\t\t\t\tthis.board.indexOf(item) === knight[0] - 2 ||\n\t\t\t\tthis.board.indexOf(item) === knight[0] + 2\n\t\t\t) {\n\t\t\t\tthis.displayPosition(2, knight, item, arr);\n\t\t\t}\n\t\t});\n\t\treturn arr;\n\t}\n\n\t// temp functions for use with move list. will condense display and find funcs later.\n\n\tfindPosition(x, k, rowArr, finalArr) {\n\t\tif (x === 1) {\n\t\t\tfor (let i = 0; i < rowArr.length; i++) {\n\t\t\t\tif (i === k[1] - 2 || i === k[1] + 2) {\n\t\t\t\t\tfinalArr.push(rowArr[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (x === 2) {\n\t\t\tfor (let i = 0; i < rowArr.length; i++) {\n\t\t\t\tif (i === k[1] - 1 || i === k[1] + 1) {\n\t\t\t\t\tfinalArr.push(rowArr[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tfindMoves(knight, finalArr) {\n\t\tthis.board.forEach((item) => {\n\t\t\tif (\n\t\t\t\tthis.board.indexOf(item) === knight[0] - 1 ||\n\t\t\t\tthis.board.indexOf(item) === knight[0] + 1\n\t\t\t) {\n\t\t\t\tthis.findPosition(1, knight, item, finalArr);\n\t\t\t}\n\t\t\tif (\n\t\t\t\tthis.board.indexOf(item) === knight[0] - 2 ||\n\t\t\t\tthis.board.indexOf(item) === knight[0] + 2\n\t\t\t) {\n\t\t\t\tthis.findPosition(2, knight, item, finalArr);\n\t\t\t}\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://knights-travails/./src/board.js?");

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Graph {\n\tconstructor() {\n\t\tconst newBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\t\tthis.graph = this.allMoves(newBoard);\n\t}\n\n\tcreateList(boardVar) {\n\t\tconst movesList = [];\n\t\n\t\tboardVar.board.forEach((item) => {\n\t\t\tfor (let i = 0; i < item.length; i++) {\n\t\t\t\tmovesList.push([]);\n\t\t\t}\n\t\t});\n\t\n\t\treturn movesList;\n\t}\n\n\tfillBoard(boardVar) {\n\t\tlet count = -1;\n\t\tboardVar.board.forEach((arr) => {\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tcount += 1;\n\t\t\t\tarr[i] = count;\n\t\t\t}\n\t\t});\n\t}\n\t\n\tallMoves(boardVar) {\n\t\tconst movesList = this.createList(boardVar);\n\t\tthis. fillBoard(boardVar);\n\t\n\t\tboardVar.board.forEach((arr) => {\n\t\t\tconst rowIndex = boardVar.board.indexOf(arr);\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tboardVar.findMoves([rowIndex, i], movesList[arr[i]]);\n\t\t\t}\n\t\t});\n\t\treturn movesList;\n\t}\n\n\t// getValue and getIndex need to be reworked, and determined if necessary\n\n\t/* getValue(coords, boardVar) {\n\t\tlet coordsVal;\n\t\tboardVar.forEach((arr) => {\n\t\t\tconst rowIndex = boardVar.indexOf(arr);\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tif (rowIndex === coords[0] && i === coords[1]) {\n\t\t\t\t\tcoordsVal = arr[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\treturn coordsVal;\n\t}\n\t\n\tgetIndex(value, boardVar) {\n\t\tlet valIndex;\n\t\tboardVar.forEach((arr) => {\n\t\t\tconst rowIndex = boardVar.indexOf(arr);\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tif (arr[i] === value) {\n\t\t\t\t\tvalIndex = [rowIndex, i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\treturn valIndex;\n\t} /*\n\n\t/* knightMoves(start, end) {\n\t\n} */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);\n\n\n//# sourceURL=webpack://knights-travails/./src/graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ \"./src/graph.js\");\n\n\n\n// Create board.\nconst testBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Place knight\nconst startKnight = testBoard.placeKnight([3, 3]);\n\n// Get Knight location array.\nconst knightLoc = testBoard.findKnight(testBoard.board);\n\n// Return and print array of all possible moves.\n// console.log(testBoard.displayMoves(knightLoc));\n\n//Print chess board.\n// console.table(testBoard.board);\n\n// knightMoves([3, 3], [4, 3]);\n\nconst testGraph = new _graph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconsole.log(testGraph);\n\n// clean up needed\n// re org needed\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Knight {\n\tconstructor(board, [x, y]) {\n\t\tif (x < 0 || x > 7 || y < 0 || y > 7) {\n\t\t\treturn;\n\t\t}\n\t\tboard[x][y] = \"x\";\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);\n\n\n//# sourceURL=webpack://knights-travails/./src/knight.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;