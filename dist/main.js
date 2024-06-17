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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ \"./src/knight.js\");\n\n\nclass Board {\n  constructor() {\n    this.board = this.createBoard();\n  }\n\n  createBoard() {\n    const board = [];\n\n    for (let i = 0; i < 8; i++) {\n      board[i] = [];\n    }\n\n    board.forEach((arr) => {\n      for (let i = 0; i < 8; i++) {\n        arr[i] = 0;\n      }\n    });\n\n    return board;\n  }\n\n  placeKnight([a, b]) {\n    const newKnight = new _knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.board, [a, b]);\n    return newKnight;\n  }\n\n  findKnight(arr) {\n    let knight;\n    arr.forEach((item) => {\n      for (let i = 0; i < item.length; i++) {\n        if (item[i] === \"x\") {\n          knight = [arr.indexOf(item), i];\n        }\n      }\n    });\n    return knight;\n  }\n\n  displayPosition(x, k, rowArr, finalArr) {\n    if (x === 1) {\n      for (let i = 0; i < rowArr.length; i++) {\n        if (i === k[1] - 2 || i === k[1] + 2) {\n          rowArr[i] = \"o\";\n          finalArr.push([this.board.indexOf(rowArr), i]);\n        }\n      }\n    }\n    if (x === 2) {\n      for (let i = 0; i < rowArr.length; i++) {\n        if (i === k[1] - 1 || i === k[1] + 1) {\n          rowArr[i] = \"o\";\n          finalArr.push([this.board.indexOf(rowArr), i]);\n        }\n      }\n    }\n  }\n\n  displayMoves(knight) {\n    const arr = [];\n    this.board.forEach((item) => {\n      if (\n        this.board.indexOf(item) === knight[0] - 1 ||\n        this.board.indexOf(item) === knight[0] + 1\n      ) {\n        this.displayPosition(1, knight, item, arr);\n      }\n      if (\n        this.board.indexOf(item) === knight[0] - 2 ||\n        this.board.indexOf(item) === knight[0] + 2\n      ) {\n        this.displayPosition(2, knight, item, arr);\n      }\n    });\n    return arr;\n  }\n\n  // temp functions for use with move list. will condense display and find funcs later.\n\n  findPosition(x, k, rowArr, finalArr) {\n    if (x === 1) {\n      for (let i = 0; i < rowArr.length; i++) {\n        if (i === k[1] - 2 || i === k[1] + 2) {\n          finalArr.push(rowArr[i]);\n        }\n      }\n    }\n    if (x === 2) {\n      for (let i = 0; i < rowArr.length; i++) {\n        if (i === k[1] - 1 || i === k[1] + 1) {\n          finalArr.push(rowArr[i]);\n        }\n      }\n    }\n  }\n\n  findMoves(knight, finalArr) {\n    this.board.forEach((item) => {\n      if (\n        this.board.indexOf(item) === knight[0] - 1 ||\n        this.board.indexOf(item) === knight[0] + 1\n      ) {\n        this.findPosition(1, knight, item, finalArr);\n      }\n      if (\n        this.board.indexOf(item) === knight[0] - 2 ||\n        this.board.indexOf(item) === knight[0] + 2\n      ) {\n        this.findPosition(2, knight, item, finalArr);\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://knights-travails/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _moves_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves-list */ \"./src/moves-list.js\");\n\n\n\n// Create board.\nconst testBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Place knight\nconst startKnight = testBoard.placeKnight([3, 3]);\n\n// Get Knight location array.\nconst knightLoc = testBoard.findKnight(testBoard.board);\n\n// Return and print array of all possible moves.\nconsole.log(testBoard.displayMoves(knightLoc));\n\n//Print chess board.\nconsole.table(testBoard.board);\n\n(0,_moves_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Knight {\n  constructor(board, [x, y]) {\n    if (x < 0 || x > 7 || y < 0 || y > 7) {\n      return;\n    }\n    board[x][y] = \"x\";\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);\n\n\n//# sourceURL=webpack://knights-travails/./src/knight.js?");

/***/ }),

/***/ "./src/moves-list.js":
/*!***************************!*\
  !*** ./src/moves-list.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nfunction createList(board) {\n    const movesList = [];\n\n    board.forEach((item) => {\n      for (let i = 0; i < item.length; i++) {\n        movesList.push([]);\n      }\n    });\n\n    return movesList;\n  }\n\n  function allMoves() {\n    const testBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const movesList = createList(testBoard.board);\n    let testVar = -1;\n\n    testBoard.board.forEach((arr) => {\n      for (let i = 0; i < arr.length; i++) {\n        testVar += 1;\n        arr[i] = testVar;\n      }\n    })\n\n    testBoard.board.forEach((arr) => {\n      const rowIndex = testBoard.board.indexOf(arr);\n      for (let i = 0; i < arr.length; i++) {\n        testBoard.findMoves([rowIndex, i], movesList[arr[i]]);\n      }\n    })\n\n    console.table(testBoard.board);\n    console.log(movesList);\n  }\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allMoves);\n\n//# sourceURL=webpack://knights-travails/./src/moves-list.js?");

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