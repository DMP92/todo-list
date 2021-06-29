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


    function clearItemData() {
        const input = document.querySelector('.task');
        const notes = document.querySelector('.notes');
        const itemDate = document.querySelector('.date');
        const projectTitle = document.querySelector('.project');

        input.value = '';
        notes.value = '';
        itemDate.value = '';
        projectTitle.value = '';
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
        clear: clearItemData,
        send: sendItemData
    }
})()




// Module that prints each task item to UI
const taskPrint = (function() {

    // function that calls each appendChild method in order to create the task
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
                    const completeTaskObject = {};
                    completeTaskObject.toggle = false;
                    completeTaskObject.object = completeTask;

                    const editTask = document.createElement('button');
                    editTask.classList.add('editTask');
                    editTask.textContent = 'E';

                    item.appendChild(itemDelete);
                    item.appendChild(completeTask);
                    item.appendChild(editTask);
                }

                // prints name of task
                function _printTaskName(item) {
                    const taskName = document.createElement('div');
                    taskName.classList.add('taskName');

                    taskName.textContent = generalTask.title();
                    item.appendChild(taskName);
                }
            
                // prints task date
                function _printTaskDate(item) {
                    const taskDate = document.createElement('div');
                    taskDate.classList.add('taskDate');

                    taskDate.textContent = generalTask.date();
                    item.appendChild(taskDate);
                }

                // prints description / notes for task
                function _printDescription(item) {
                    const description = document.createElement('div');
                    description.classList.add('description');

                    description.textContent = generalTask.notes();
                    item.appendChild(description);
                }

    function shareDelete(items) {
        const deleteButtons = document.querySelectorAll('.itemDelete');
        console.log(deleteButtons);
        return deleteButtons;
    }

    return {
        print: printTask,
        share: shareDelete
    }

})();


// module made for editing and interacting with elements
const editItems = (function() {

                // variables that target DOM elements for deletion and editing
                const taskPanel = document.querySelector('.taskPanel');

    // function that houses the event listener for the deleteItem function
    function buttonEventListeners(event) {
        // variables that get each nodeList of buttons for interaction
        const deleteButtons = document.querySelectorAll('.itemDelete');
        const editButtons = document.querySelectorAll('.editTask');
        const completeButtons = document.querySelectorAll('.completeTask');


        deleteButtons.forEach(button => button.addEventListener('click', _deleteItem));
        editButtons.forEach(button => button.addEventListener('click', _editTask));
        completeButtons.forEach(button => button.addEventListener('click', _completeTask));
    }

            // private function that removes task item nodes from taskPanel
            function _deleteItem(event){
                const parent = event.target.parentElement;
                taskPanel.removeChild(parent);
            }

            // private function that marks task item as completed
            function _completeTask() {
                
                // variables that fetch and assign the cssText for the clicked completeTask button
                const parent = event.target.parentElement;
                const gray = "filter: grayscale(1);";
                const normal = "filter: grayscale(0);";

                // switch statement that (based on the cssText of the clicked element) either grays out, or 
                // fills in the taskItem container div
                switch(true) {
                    case parent.style.cssText === '':
                        parent.style.cssText = `${gray}`;
                    break;
                    case parent.style.cssText === gray:
                        parent.style.cssText = `${normal}`;
                    break;
                    case parent.style.cssText === normal:
                        parent.style.cssText = `${gray}`;
                    break;
                }
                
            }    

            // private function that allows the task info to be edited
            function _editTask() {

                // variables that get each nodeList item of the specific container the clicked button is in
                const parent = event.target.parentElement;
                const project = parent.children[0]
                const edit = parent.children[3];
                const name = parent.children[4];
                const date = parent.children[5];
                const notes = parent.children[6];

                // IF the edit button is clicked and the task.tagName is still a DIV, then the code runs
                // ELSE it will run the function called below which appends the newly edited info to the DOM
                if (name.tagName === 'DIV') {
                // variables for appending input items to taskItem
                const editProject = document.createElement('input');
                    editProject.classList.add('projectName');
                    editProject.style.cssText = 'text-align: center;';
                    editProject.placeholder = 'Edit Project Name';
                    parent.replaceChild(editProject, project);


                const editName = document.createElement('input');
                    editName.classList.add('taskName');
                    editName.placeholder = 'Edit Task Name';
                    editName.style.cssText = 'text-align: center;';
                    parent.replaceChild(editName, name);


                const editDate = document.createElement('input');
                    editDate.classList.add('taskDate');
                    editDate.type = 'date';
                    editDate.style.cssText = "background-color: White; color: black; text-align: center;";
                    editDate.placeholder = 'Edit Date';
                    parent.replaceChild(editDate, date)



                const editDescription = document.createElement('input');
                    editDescription.classList.add('description');
                    editDescription.placeholder = 'Edit Notes';
                    editDescription.style.cssText = 'text-align: center;';
                    parent.replaceChild(editDescription, notes);

            // parent.appendChild();

                } else {
                    _appendTask();
                }
            }

            // function that takes newly edited information and publishes them to the DOM
            function _appendTask() {

                // gets the container of the specific edit button clicked
                const parent = event.target.parentElement;

                // variables for appending finished items to taskItem
                const project = parent.children[0]
                const edit = parent.children[3];
                const name = parent.children[4];
                const date = parent.children[5];
                const notes = parent.children[6];
                

                const taskName = document.createElement('div');
                    taskName.classList.add('taskName');
                    taskName.textContent = name.value;

                const description = document.createElement('div');
                    description.classList.add('description');
                    description.textContent = notes.value;

                const taskDate = document.createElement('div');
                    taskDate.classList.add('taskDate');
                    taskDate.textContent = date.value;

                const projectName = document.createElement('div');
                    projectName.classList.add('projectName');
                    projectName.textContent = project.value;

                parent.replaceChild(projectName, project);
                parent.replaceChild(taskName, name);
                parent.replaceChild(taskDate, date);
                parent.replaceChild(description, notes);

            }

    return {
        eventListeners: buttonEventListeners
    }
})()



const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    taskPrint.print();
    editItems.eventListeners();
    generalTask.clear();

});






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



const interactWithDOM = (function() {

    // variable that gets DOM elements
    const taskPanel = document.querySelector('.taskPanel');
    const deleteButtons = taskPanel.querySelector('.itemDelete');
    if (deleteButtons != null) {
        console.log('what!?');
        deleteButtons.addEventListener('click', () => {
            console.log('hey1');
        });
    }

    function _deleteItem(event) {
        console.log('hey');
    }

})();




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



const itemDel = document.querySelectorAll('.itemDelete');
const itemDeleteA = Array.from(itemDel);

itemDel.forEach(button => button.addEventListener('click', (e) => {
    
    deleteButton(e);
    console.log(itemDel);
    console.log(taskIt);
}))
// module that deletes items when delete button is pressed
function deleteButton(e) {
    
    console.log(itemDeleteA.indexOf(e.currentTarget));
    console.log(itemDel);
    console.log(itemDel);
    console.log(itemDeleteA);
}








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