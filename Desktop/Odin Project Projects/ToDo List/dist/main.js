/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domToDo": () => (/* binding */ domToDo)
/* harmony export */ });

const domToDo = (function() {
    
    
    // upon click will get title of todo list item
    function toDoInput(title) {
        const input = document.querySelector('.todoItem');
        
        return input.value;
    }

    // on click will get description of todo list item
    function itemDescription(text) {
        const description = document.querySelector('.description');

        return description.value;
    }

    // on click will get completion date
    function date(date) {
        const itemDate = document.querySelector('.date');

        return itemDate.value;
    }

    function project(name) {
        const projectName = document.querySelector('.projectName');

        return projectName.value;
    }


    return {
        title: toDoInput,
        info: itemDescription,
        date: date,
        project: project
    }
})()







/***/ }),

/***/ "./src/Factory.js":
/*!************************!*\
  !*** ./src/Factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFactory": () => (/* binding */ ItemFactory)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");


// Module that creates each item in the to-do list

const ItemFactory = (name, summary, date) => {


    
    // create new item factory
    function createItem(title, text, date, projectName ) {
        const item = {};
        item.title = _DOM__WEBPACK_IMPORTED_MODULE_0__.domToDo.title(title);
        item.description = _DOM__WEBPACK_IMPORTED_MODULE_0__.domToDo.info(text);
        item.date = _DOM__WEBPACK_IMPORTED_MODULE_0__.domToDo.date(date);
        item.project = _DOM__WEBPACK_IMPORTED_MODULE_0__.domToDo.project(projectName);
        
        _pushItem(item);
    }

    function _pushItem(item) {
        _index__WEBPACK_IMPORTED_MODULE_1__.itemRef.printItem(item);
    }
   
    return { createItem }
}

const newItem = ItemFactory();
const button = document.querySelector('.submit');
    button.addEventListener('click', newItem.createItem);





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemRef": () => (/* binding */ itemRef)
/* harmony export */ });
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Factory */ "./src/Factory.js");


// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed

const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];

        // pushes todo item into Item array
        function pushItem(item) {
            itemArray.push(item);
        }
        
        // shares specific itemArray
        function shareArray() {
            console.log(itemArray);
            return itemArray;
        }

    // shares specific item
    function shareSpecificTask(index) {
        return itemArray[index];
    }

        // shares specific item title
        function shareTitle(index) {
            return itemArray[index].name;
        }

        // shares specific item description
        function shareDescription(index) {
            return itemArray[index].description;
        }

        // shares specific item summary
        function shareSummary(index) {
            return itemArray[index].summary;
        }

        // shares specific item notes
        function shareNotes(index) {
            return itemArray[index].notes;
        }

    return {
        printItem : pushItem,
        title: shareTitle,
        description: shareDescription,
        summary: shareSummary,
        notes: shareNotes,
        task: shareSpecificTask,
        share: shareArray
    }
})();

const arrayprint = document.querySelector('.array');
arrayprint.addEventListener('click', itemRef.share);



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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map