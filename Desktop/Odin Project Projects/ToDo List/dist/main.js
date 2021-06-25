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
/* harmony export */   "generalTask": () => (/* binding */ generalTask)
/* harmony export */ });

const generalTask = (function() {
    
    
    // upon click will get task  item
    function toDoInput(task) {
        const input = document.querySelector('.task');
        
        return input.value;
    }

    // on click will get notes of todo list item
    function itemNotes(text) {
        const notes = document.querySelector('.notes');
        console.log('sup');
        return notes.value;
    }

    // on click will get completion date
    function date(date) {
        const itemDate = document.querySelector('.date');

        return itemDate.value;
    }

    function project(title) {
        const projectTitle = document.querySelector('.project');

        
        return projectTitle.value;
    }


    function sendItemData() {
        toDoInput();
        itemNotes();
        date();
        project();

    }

    return {
        title: toDoInput,
        notes: itemNotes,
        date: date,
        project: project,
        send: sendItemData
    }
})()


// Module that prints each task item to UI
const taskPrint = (function() {

    // // prints task panel container
    // const taskPanel = document.querySelector('.taskPanel');
    

    //     function _printTaskContainer() {
    //         const taskItem = document.createElement('div');
    //         taskItem.classList.add('taskItem');
    //         taskPanel.appendChild(taskItem);
    //     }

    // const taskItem = document.querySelectorAll('.taskItem');

    
    function printTask() {
        const taskPanel = document.querySelector('.taskPanel');
        const item = document.createElement('div');
            item.classList.add('taskItem');
            taskPanel.appendChild(item);
        _printProjectName(item);
        _printButtons(item);
        _printTaskName(item);
        _printTaskDate(item);
        _printDescription(item);
    }

    // prints the name of the project
   

        function _printProjectName(item) {
            const projectName = document.createElement('div');
            projectName.classList.add('projectName');

            projectName.textContent = generalTask.project();
            if(projectName.textContent === '') {
                projectName.textContent = 'Project Name: None';
                item.appendChild(projectName);
            } else {
                item.appendChild(projectName);
            }
        }

    // prints the buttons (delete, complete, edit)
    

        function _printButtons(item) {
            const itemDelete = document.createElement('button');
        itemDelete.classList.add('itemDelete');
        itemDelete.textContent = 'D';

    const completeTask = document.createElement('button');
        completeTask.classList.add('completeTask');
        completeTask.textContent = 'C';

    const editTask = document.createElement('button');
        editTask.classList.add('editTask');
        editTask.textContent = 'E';

            console.log('3 buttons');
            item.appendChild(itemDelete);
            item.appendChild(completeTask);
            item.appendChild(editTask);
        }

    // prints name of task
   


        function _printTaskName(item) {
            const taskName = document.createElement('div');
            taskName.classList.add('taskName');

            console.log('4 name');
            taskName.textContent = generalTask.title();
            item.appendChild(taskName);
        }
    
    // prints task date
    


        function _printTaskDate(item) {
            const taskDate = document.createElement('div');
            taskDate.classList.add('taskDate');

            console.log('5 date');
            taskDate.textContent = generalTask.date();
            item.appendChild(taskDate);
        }

    // prints description / notes for task
    

            function _printDescription(item) {
                const description = document.createElement('div');
                description.classList.add('description');

                console.log('6 description');
                description.textContent = generalTask.notes();
                item.appendChild(description);
            }

    

    return {
        print: printTask
    }

})();

const submit = document.querySelector('.submit');
submit.addEventListener('click', taskPrint.print);




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

const ItemFactory = (task, notes, date, title) => {

    // create new item factory
    function createGeneralItem(task, notes, date, title) {
        const item = {};
        item.task = _DOM__WEBPACK_IMPORTED_MODULE_0__.generalTask.title(task);
        item.notes = _DOM__WEBPACK_IMPORTED_MODULE_0__.generalTask.notes(notes);
        item.date = _DOM__WEBPACK_IMPORTED_MODULE_0__.generalTask.date(date);
        item.project = _DOM__WEBPACK_IMPORTED_MODULE_0__.generalTask.project(title);
        
        _pushItem(item);
    }

    function _pushItem(item) {
        _index__WEBPACK_IMPORTED_MODULE_1__.itemRef.printItem(item);
    }
   
    return { createGeneralItem }
}



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
            projectCreate.fetch(item);
        }
        
        // shares specific itemArray
        function shareArray() {
            console.log(itemArray);
            return itemArray;
        }

    // shares specific item
    function shareTask(index) {
        return itemArray[index];
    }

        // shares specific item name
        function shareName(index) {
            return itemArray[index].name;
        }

        // shares specific item notes
        function shareNote(index) {
            return itemArray[index].notes;
        }

        // shares specific item date
        function shareSummary(index) {
            return itemArray[index].date;
        }

        // shows which project the item belongs to
        function shareProject(index) {
           return itemArray[index].project;
        }

    return {
        printItem : pushItem,
        title: shareName,
        notes: shareNote,
        summary: shareSummary,
        notes: shareProject,
        task: shareTask,
        share: shareArray
    }
})();

// module for creating projects
const projectCreate = (function() {

    // array that contains each project
    const projectArray = [];

    // function that gathers data about each item
    function fetchItems(item) {
        const project = {  };
        project.task = item.task;
        project.notes = item.notes;
        project.date = item.date;
        project.name = item.project;

        projectArray.push(project);
    }

    // function that shares projectArray
    function shareProjectArray() {
        return projectArray;
    }

    // creates project container for all sub tasks
    function createProject(item) {

        return item.name;

    }

    return {
        fetch: fetchItems,
        shareArray: shareProjectArray,
        create: createProject
    }
})();

const newItem = (0,_Factory__WEBPACK_IMPORTED_MODULE_0__.ItemFactory)();
const button = document.querySelector('.submit');
button.addEventListener('click', newItem.createGeneralItem);

const arrayprint = document.querySelector('.formDelete');
arrayprint.addEventListener('click', () => {
    console.log(itemRef.shareArray);
})



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