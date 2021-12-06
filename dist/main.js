/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addButtonListener.js":
/*!******************************************!*\
  !*** ./src/modules/addButtonListener.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addButtonListener(button, typeOfListener, contentDiv, functions, form) {
  button.addEventListener(typeOfListener, () => {
    contentDiv.appendChild(functions);
    form.reset();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addButtonListener);


/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTodo)
/* harmony export */ });
// basically creates an obj
function CreateTodo(title, description, dueDate, priority) {
  
  return {title, description, dueDate, priority};
}



/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);


function displayTodo(todoItems) {
  // convert todo object into an array and iterate through it
  // create a new div and append todo item divs to it and append it to main note div
  const todoItem = Object.values(todoItems)
  const div = document.createElement('div');
  div.classList.add('todoNote')  
  for (let i = 0; i < todoItem.length; i++) {
    div.appendChild(createDiv(todoItem[i]));
  }
  
  return div
}

function createDiv(innards) {
  const divThing = document.createElement('div');
  divThing.classList.add('todoItem')
  divThing.textContent = innards;
  return divThing
}

function createButton(){
  const button = document.createElement('button')
  button.classList.add('deletebutton')
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodo);


/***/ }),

/***/ "./src/modules/handleForm.js":
/*!***********************************!*\
  !*** ./src/modules/handleForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");


// takes values from the form and uses it to create a new obj including the objects values
function handleFormInput(form) {
  let title = form.elements[0].value;
  let description = form.elements[1].value;
  let dueDate = form.elements[2].value;
  let priority = form.elements[3].value;

  let item = (0,_createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority);
  return item;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleFormInput);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .todoNote {\n|   max-width: 600px;\n|   border: 1px solid black;");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayTodo.js */ "./src/modules/displayTodo.js");
/* harmony import */ var _modules_handleForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleForm.js */ "./src/modules/handleForm.js");
/* harmony import */ var _modules_addButtonListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addButtonListener */ "./src/modules/addButtonListener.js");





let content = document.querySelector('#content');
let form = document.querySelector('#inputForm')
let submitButton = document.querySelector('#formsubmit')

// press button to add todo after filling out form
;(0,_modules_addButtonListener__WEBPACK_IMPORTED_MODULE_2__["default"])(submitButton,'click', content,(0,_modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_modules_handleForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(form)),form)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1BoQztBQUNlO0FBQ2Y7QUFDQSxVQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmE7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDBEQUFVO0FBQ3ZCO0FBQ0E7OztBQUdBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZDlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDRztBQUNLOzs7QUFHM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUVBQWlCLCtCQUErQixtRUFBVyxDQUFDLGtFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FkZEJ1dHRvbkxpc3RlbmVyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5VG9kby5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlRm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVyKGJ1dHRvbiwgdHlwZU9mTGlzdGVuZXIsIGNvbnRlbnREaXYsIGZ1bmN0aW9ucywgZm9ybSkge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcih0eXBlT2ZMaXN0ZW5lciwgKCkgPT4ge1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZnVuY3Rpb25zKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRCdXR0b25MaXN0ZW5lclxuIiwiLy8gYmFzaWNhbGx5IGNyZWF0ZXMgYW4gb2JqXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgXG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX07XG59XG5cbiIsImltcG9ydCAnLi4vc3R5bGVzLmNzcydcblxuZnVuY3Rpb24gZGlzcGxheVRvZG8odG9kb0l0ZW1zKSB7XG4gIC8vIGNvbnZlcnQgdG9kbyBvYmplY3QgaW50byBhbiBhcnJheSBhbmQgaXRlcmF0ZSB0aHJvdWdoIGl0XG4gIC8vIGNyZWF0ZSBhIG5ldyBkaXYgYW5kIGFwcGVuZCB0b2RvIGl0ZW0gZGl2cyB0byBpdCBhbmQgYXBwZW5kIGl0IHRvIG1haW4gbm90ZSBkaXZcbiAgY29uc3QgdG9kb0l0ZW0gPSBPYmplY3QudmFsdWVzKHRvZG9JdGVtcylcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvTm90ZScpICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbS5sZW5ndGg7IGkrKykge1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVEaXYodG9kb0l0ZW1baV0pKTtcbiAgfVxuICBcbiAgcmV0dXJuIGRpdlxufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXYoaW5uYXJkcykge1xuICBjb25zdCBkaXZUaGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZUaGluZy5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpXG4gIGRpdlRoaW5nLnRleHRDb250ZW50ID0gaW5uYXJkcztcbiAgcmV0dXJuIGRpdlRoaW5nXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbigpe1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlYnV0dG9uJylcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VG9kbztcbiIsImltcG9ydCBDcmVhdGVUb2RvIGZyb20gJy4vY3JlYXRlVG9kby5qcydcblxuLy8gdGFrZXMgdmFsdWVzIGZyb20gdGhlIGZvcm0gYW5kIHVzZXMgaXQgdG8gY3JlYXRlIGEgbmV3IG9iaiBpbmNsdWRpbmcgdGhlIG9iamVjdHMgdmFsdWVzXG5mdW5jdGlvbiBoYW5kbGVGb3JtSW5wdXQoZm9ybSkge1xuICBsZXQgdGl0bGUgPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzWzFdLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbMl0udmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbM10udmFsdWU7XG5cbiAgbGV0IGl0ZW0gPSBDcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICByZXR1cm4gaXRlbTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVGb3JtSW5wdXRcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheVRvZG8gZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlUb2RvLmpzJztcbmltcG9ydCBoYW5kbGVGb3JtSW5wdXQgZnJvbSAnLi9tb2R1bGVzL2hhbmRsZUZvcm0uanMnO1xuaW1wb3J0IGFkZEJ1dHRvbkxpc3RlbmVyIGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b25MaXN0ZW5lcidcblxuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dEZvcm0nKVxubGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3Jtc3VibWl0JylcblxuLy8gcHJlc3MgYnV0dG9uIHRvIGFkZCB0b2RvIGFmdGVyIGZpbGxpbmcgb3V0IGZvcm1cbmFkZEJ1dHRvbkxpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwnY2xpY2snLCBjb250ZW50LGRpc3BsYXlUb2RvKGhhbmRsZUZvcm1JbnB1dChmb3JtKSksZm9ybSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9