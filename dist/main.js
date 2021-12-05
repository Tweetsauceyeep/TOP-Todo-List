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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createTodo.js */ \"./src/modules/createTodo.js\");\n/* harmony import */ var _modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayTodo.js */ \"./src/modules/displayTodo.js\");\n/* harmony import */ var _modules_handleForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/handleForm.js */ \"./src/modules/handleForm.js\");\n\n\n\n\nlet content = document.querySelector('#content');\nlet form = document.querySelector('#inputForm')\nlet submitButton = document.querySelector('#formsubmit')\n\n//let bruh = handleFormInput(form)\n\n// press button to add todo after filling out form\nsubmitButton.addEventListener('click',()=>{\n  console.log('click works')\n  content.appendChild((0,_modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_modules_handleForm_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(form)))\n})\n\nconsole.log(form.elements[1].value)\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateTodo)\n/* harmony export */ });\n// basically creates an obj\nfunction CreateTodo(title, description, dueDate, priority) {\n  \n  return {title, description, dueDate, priority};\n}\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/modules/createTodo.js?");

/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayTodo(todoItems) {\n  // convert todo object into an array and iterate through it\n  // create a new div and append todo item divs to it and append it to main note div\n  const todoItem = Object.values(todoItems)\n  const div = document.createElement('div');\n  div.classList.add('todoNote')  \n  for (let i = 0; i < todoItem.length; i++) {\n    div.appendChild(createDiv(todoItem[i]));\n\n  }\n  return div\n}\n\nfunction createDiv(innards) {\n  const divThing = document.createElement('div');\n  divThing.classList.add('todoItem')\n  divThing.textContent = innards;\n  return divThing\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodo);\n\n\n//# sourceURL=webpack://top-todo-list/./src/modules/displayTodo.js?");

/***/ }),

/***/ "./src/modules/handleForm.js":
/*!***********************************!*\
  !*** ./src/modules/handleForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ \"./src/modules/createTodo.js\");\n\n\n// takes values from the form and uses it to create a new obj including the objects values\nfunction handleFormInput(form) {\n  let title = form.elements[0].value;\n  let description = form.elements[1].value;\n  let dueDate = form.elements[2].value;\n  let priority = form.elements[3].value;\n\n  let item = (0,_createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority);\n  return item;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleFormInput);\n\n\n//# sourceURL=webpack://top-todo-list/./src/modules/handleForm.js?");

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