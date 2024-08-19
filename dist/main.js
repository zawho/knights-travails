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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Board {\n\tconstructor() {\n\t\tthis.board = this.createBoard();\n\t}\n\t\n\tcreateBoard() {\n\t\tconst board = [];\n\t\tlet count = -1;\n\n\t\tfor (let i = 0; i < 8; i++) {\n\t\t\tboard[i] = [];\n\t\t}\n\t\t\n\t\tboard.forEach((arr) => {\n\t\t\tfor (let i = 0; i < 8; i++) {\n\t\t\t\tcount += 1;\n\t\t\t\tarr[i] = count;\n\t\t\t}\n\t\t});\n\n\t\treturn board;\n\t}\n\n\tfindPosition(x, k, rowArr, finalArr) {\n\t\tif (x === 1) {\n\t\t\tfor (let i = 0; i < rowArr.length; i++) {\n\t\t\t\tif (i === k[1] - 2 || i === k[1] + 2) {\n\t\t\t\t\tfinalArr.push(rowArr[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (x === 2) {\n\t\t\tfor (let i = 0; i < rowArr.length; i++) {\n\t\t\t\tif (i === k[1] - 1 || i === k[1] + 1) {\n\t\t\t\t\tfinalArr.push(rowArr[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tfindMoves(knight, finalArr) {\n\t\tthis.board.forEach((item) => {\n\t\t\tif (\n\t\t\t\tthis.board.indexOf(item) === knight[0] - 1 ||\n\t\t\t\tthis.board.indexOf(item) === knight[0] + 1\n\t\t\t) {\n\t\t\t\tthis.findPosition(1, knight, item, finalArr);\n\t\t\t}\n\t\t\tif (\n\t\t\t\tthis.board.indexOf(item) === knight[0] - 2 ||\n\t\t\t\tthis.board.indexOf(item) === knight[0] + 2\n\t\t\t) {\n\t\t\t\tthis.findPosition(2, knight, item, finalArr);\n\t\t\t}\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://knights-travails/./src/board.js?");

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Graph {\n\tconstructor() {\n\t\tconst newBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\t\tthis.boardClass = newBoard;\n\t\tthis.board = newBoard.board;\n\t\tthis.graph = this.allMoves(newBoard);\n\t}\n\n\tcreateList() {\n\t\tconst movesList = [];\n\n\t\tthis.board.forEach((item) => {\n\t\t\tfor (let i = 0; i < item.length; i++) {\n\t\t\t\tmovesList.push([]);\n\t\t\t}\n\t\t});\n\t\treturn movesList;\n\t}\n\n\tallMoves() {\n\t\tconst movesList = this.createList(this.boardClass);\n\n\t\tthis.board.forEach((arr) => {\n\t\t\tconst rowIndex = this.board.indexOf(arr);\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tthis.boardClass.findMoves([rowIndex, i], movesList[arr[i]]);\n\t\t\t}\n\t\t});\n\t\treturn movesList;\n\t}\n\n\tgetValue(coords, boardVar) {\n\t\tlet coordsVal;\n\t\tboardVar.board.forEach((arr) => {\n\t\t\tconst rowIndex = boardVar.board.indexOf(arr);\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tif (rowIndex === coords[0] && i === coords[1]) {\n\t\t\t\t\tcoordsVal = arr[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\treturn coordsVal;\n\t}\n\n\tgetIndex(value, boardVar) {\n\t\tlet valIndex;\n\t\tboardVar.board.forEach((arr) => {\n\t\t\tconst rowIndex = boardVar.board.indexOf(arr);\n\t\t\tfor (let i = 0; i < arr.length; i++) {\n\t\t\t\tif (arr[i] === value) {\n\t\t\t\t\tvalIndex = [rowIndex, i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\treturn valIndex;\n\t}\n\n\tdisplayMsg(arr, boardVar) {\n\t\tconst randPath = Math.floor(Math.random() * arr.length);\n\t\t\n\t\tconsole.log \n\t\t(`The shortest path is ${arr[randPath].length - 1} moves. There are ${arr.length} possible shortest paths. Below is one such path:`);\n\n\t\tfor (let i = 0; i < arr[randPath].length; i++) {\n\t\t\tconsole.log(`[${this.getIndex(arr[randPath][i], boardVar)}]`);\n\t\t}\n\t}\n\n\tknightMoves(start, end, boardVar, graphVar) {\n\t\tconst startVal = this.getValue(start, boardVar);\n\t\tconst endVal = this.getValue(end, boardVar);\n\n\t\tlet paths = [];\n\t\tlet queue = [];\n\t\tqueue.push([startVal, [startVal]]);\n\t\tconst visited = new Set();\n\n\t\twhile (queue.length > 0) {\n\t\t\tlet [current, path] = queue.shift();\n\t\t\tvisited.add(current);\n\n\t\t\tif (current === endVal) {\n\t\t\t\tpaths.push(path);\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < graphVar.graph[current].length; i++) {\n\t\t\t\tconst next = graphVar.graph[current][i];\n\t\t\t\tif (!visited.has(next)) {\n\t\t\t\t\tqueue.push([next, [...path, next]]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tthis.displayMsg(paths, boardVar);\n\t\treturn paths;\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);\n\n\n//# sourceURL=webpack://knights-travails/./src/graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ \"./src/graph.js\");\n\n\n\n// Create and print board and graph.\nconst testGraph = new _graph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconsole.table(testGraph.board);\nconsole.log(testGraph.graph);\n\n// Calculate shortest path.\ntestGraph.knightMoves([3, 3], [4, 3], testGraph, testGraph);\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

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