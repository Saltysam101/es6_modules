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

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n    constructor(make, model, year) {\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/Car.js?");

/***/ }),

/***/ "./src/Wishlist.js":
/*!*************************!*\
  !*** ./src/Wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\nclass WishList {\r\n    constructor() {\r\n        this.list = [];\r\n    }\r\n    add(car) {\r\n\r\n        this.list.push(car);\r\n    }\r\n\r\n    remove(car) {\r\n        this.list = this.list.filter((existingCar) => existingCar != car)\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/Wishlist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wishlist */ \"./src/Wishlist.js\");\n/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car */ \"./src/Car.js\");\n\r\n\r\n\r\n//Select elements\r\nlet form = document.getElementById(\"submitForm\");\r\nlet modelInput = document.getElementById(\"modelInput\");\r\nlet makeInput = document.getElementById(\"makeInput\");\r\nlet yearInput = document.getElementById(\"yearInput\");\r\nlet pMake = document.getElementById(\"car-make\");\r\nlet pModel = document.getElementById(\"car-model\");\r\nlet pYear = document.getElementById(\"car-year\");\r\nlet removeBtn = document.getElementById(\"remove-btn\");\r\nlet list = document.getElementById(\"wishlist-list\");\r\n\r\nlet wishList = new _Wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n//form submitted\r\nform.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    let make = makeInput.value\r\n    let model = modelInput.value\r\n    let year = yearInput.value\r\n\r\n    let car = new _Car__WEBPACK_IMPORTED_MODULE_1__[\"default\"](make, model, year)\r\n    wishList.add(car)\r\n\r\n    let li = document.createElement(\"li\");\r\n    li.classList.add(\"list-group-item\")\r\n    li.textContent = car.model;\r\n    list.appendChild(li)\r\n\r\n    li.addEventListener(\"click\", (event) => {\r\n        pMake.textContent = car.make\r\n        pModel.textContent = car.model\r\n        pYear.textContent = car.year\r\n\r\n        removeBtn.disabled = false;\r\n        removeBtn.onclick = (event) => {\r\n            wishList.remove(car)\r\n\r\n            pMake.textContent = \"\"\r\n            pModel.textContent = \"\"\r\n            pYear.textContent = \"\"\r\n\r\n            removeBtn.disabled = true;\r\n\r\n            list.removeChild(li)\r\n        }\r\n    })\r\n\r\n    modelInput.value = \"\"\r\n    makeInput.value = \"\"\r\n    yearInput.value = \"\"\r\n})\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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