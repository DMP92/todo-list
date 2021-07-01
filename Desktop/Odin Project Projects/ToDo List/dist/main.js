/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editTasks.js":
/*!**************************!*\
  !*** ./src/editTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editItems": () => (/* binding */ editItems)
/* harmony export */ });


/* 
************************************************************************************
**********************************EDIT ITEMS MODULE*********************************
************************************************************************************
*/

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

    /* 
    **************************** COMPLETE TASK *******************************    
    */
   
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
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                ;
            break;
            case parent.style.cssText === gray:
                event.target.classList.remove('checkedTask');
                event.target.classList.add('completeTask');
                parent.style.cssText = `${normal}`;

            break;
            case parent.style.cssText === normal:
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
            break;
        }
        
    }    

    /* 
    **************************** EDIT TASK *******************************    
    */

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

            event.target.classList.remove('editTask');
            event.target.classList.add('editingTask');
    // parent.appendChild();

        } else {
            _appendTask();
        }
    }

// function that takes newly edited information and publishes them to the DOM
function _appendTask() {

    event.target.classList.remove('editingTask');
    event.target.classList.add('editTask');

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

const deleteButton = document.querySelector('.formDelete');
deleteButton.addEventListener('click', () => {
taskPrint.createArray();
})



/***/ }),

/***/ "./src/grabTask.js":
/*!*************************!*\
  !*** ./src/grabTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grabTask": () => (/* binding */ grabTask)
/* harmony export */ });
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");

/* 
************************************************************************************
***************** MODULE THAT GRABS INFO FOR TASKS FROM INPUT FIELDS ***************
************************************************************************************
*/

const grabTask = (function() {
    
    
    // upon click will get task  item
    function toDoInput() {
        const input = document.querySelector('.task');
        
        return input.value;
    }

    // on click will get notes of todo list item
    function itemNotes() {
        const notes = document.querySelector('.notes');
        return notes.value;
    }

    // on click will get completion date
    function itemDate() {
        const itemDate = document.querySelector('.date');
        return itemDate.value;
    }

    function itemProject() {
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
       
        const taskName = toDoInput();
        const notes = itemNotes();
        const date = itemDate();
        const project = itemProject();
       
       
       const sendGrabbedData = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_0__.ItemFactory)();
       sendGrabbedData.receiveTasks(taskName, notes, date, project);
    }

    return {
        title: toDoInput,
        notes: itemNotes,
        itemDate: itemDate,
        itemProject: itemProject,
        clear: clearItemData,
        send: sendItemData
    }
})()







// Also, I'm trying to figure out how I'm to separate each thing into an array based on 
                        // projects
                        // weeks the project is intended for
                        // all projects
                        // projects due today
                        // I need to learn what the inbox feature is intended for..

// I also need to learn about webpack, and how I'm to get each module up and running, completely
// functioning. This will take a lot of time, but in the end it WILL save me a lot of time 
// if I completely learn and understand how it works. Most of my issues during this project have been
// almost entirely from not completely understanding how webpack works
// actually it has accounted for probably well over 65% of the time spent on this project


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemRef": () => (/* binding */ itemRef),
/* harmony export */   "projectCreate": () => (/* binding */ projectCreate)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/taskFactory.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_updateDOM__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grabTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grabTask */ "./src/grabTask.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");
/* harmony import */ var _printTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./printTasks */ "./src/printTasks.js");






// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed

const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];

        // pushes todo item into Item array & other functions inside the itemRef Module
        function pushItem(item) {
            itemArray.push(item);
            shareItem(item);

            // unsure what I will do with this call 
            projectCreate.create(item);
        }
        
        // shares specific itemArray
        function shareArray() {
            return itemArray;
        }

        function shareItem(item) {
            _printTasks__WEBPACK_IMPORTED_MODULE_4__.taskPrint.receive(item);
        }

    // shares specific item
    function shareTask(index) {
        console.log('sharing task');
        console.log(itemArray[index])
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
        share: shareArray,
        shareItem: shareItem
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
        console.log(project);
        createProject(project);
        projectArray.push(project);
    }

    // function that shares projectArray
    function shareProjectArray() {
        return projectArray;
    }

    // creates project container for all sub tasks
    function createProject(project) {
        

    }

    return {
        fetch: fetchItems,
        shareArray: shareProjectArray,
        create: createProject
    }
})();

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    _grabTask__WEBPACK_IMPORTED_MODULE_2__.grabTask.send();
    _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
    
});









/***/ }),

/***/ "./src/printTasks.js":
/*!***************************!*\
  !*** ./src/printTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskPrint": () => (/* binding */ taskPrint)
/* harmony export */ });

/* 
************************************************************************************
*************************MODULE THAT PRINTS INFO TO DOM*****************************
************************************************************************************
*/


// Module that prints each task item to UI
const taskPrint = (function() {

    // variables for task parent
    const taskPanel = document.querySelector('.taskPanel');
    let item = document.querySelector('.taskItem');

    function receiveItem(item) {
        // calls unpackItem to breakdown each item key
        unpackItem(item);
    }

    // takes item and breaks it down into each part
    function unpackItem(item) {
        const task = {};
        task.task = item.task;
        task.notes = item.notes;
        task.date = item.date;
        task.project = item.project;
        
        printTask(task);
    }

    // function that calls each appendChild method in order to create the task
    function printTask(task) {
        const item = document.createElement('div');
        item.classList.add('taskItem');
        
        // appends taskItem container DIV to task item section
        taskPanel.appendChild(item);

        _printProjectName(item, task.project);
        _printButtons(item);
        _printTaskName(item, task.task);
        _printTaskDate(item, task.date);
        _printDescription(item, task.notes);
        // shareTaskItem(item);

        // createItemObject(item);
    }

    // function that returns taskObjects array
    function createItemObject(item) {
        
        // if (typeof item != 'undefined') {
        //     const task = {};
        //     task.project = item.children[0].textContent;
        //     task.taskName = item.children[4].textContent;
        //     task.date = item.children[5].textContent;
        //     task.notes = item.children[6].textContent;
        //     taskObjects.push(task);
        //     console.log(task)
        // } else {
        //     console.log(taskObjects);
        //     return task
        // }
        return item
    }
    
        // variable for task container
                // prints the name of the project
                function _printProjectName(item, project) {

                    const projectName = document.createElement('div');

                    projectName.classList.add('projectName');

                    projectName.textContent = project;
                    if(projectName.textContent === '') {
                        projectName.textContent = 'Project Name: None';
                        item.appendChild(projectName);
                    } else {
                        item.appendChild(projectName);
                    }
                }

                // prints the buttons (delete, complete, edit)
                function _printButtons(item) {

                    const completeTask = document.createElement('button');
                    completeTask.classList.add('completeTask');
                    completeTask.title = "Complete Task";
                    // const completeTaskObject = {};
                    // completeTaskObject.toggle = false;
                    // completeTaskObject.object = completeTask;

                    const editTask = document.createElement('button');
                    editTask.classList.add('editTask');
                    editTask.title = 'Edit Task'

                    const itemDelete = document.createElement('button');
                    itemDelete.classList.add('itemDelete');
                    itemDelete.title = 'Delete Task'

                    item.appendChild(completeTask);
                    item.appendChild(editTask);
                    item.appendChild(itemDelete);
                }

                // prints name of task
                function _printTaskName(item, task) {
                    const taskName = document.createElement('div');
                    taskName.classList.add('taskName');

                    taskName.textContent = task;
                    item.appendChild(taskName);
                }
            
                // prints task date
                function _printTaskDate(item, date) {
                    const taskDate = document.createElement('div');
                    taskDate.classList.add('taskDate');

                    taskDate.textContent = date;
                    item.appendChild(taskDate);
                }

                // prints description / notes for task
                function _printDescription(item, notes) {
                    const description = document.createElement('div');
                    description.classList.add('description');

                    description.textContent = notes;
                    item.appendChild(description);
                }


            

    return {
        receive: receiveItem,
        unpack: unpackItem,
        print: printTask,
        createArray: createItemObject
    }

})();





/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFactory": () => (/* binding */ ItemFactory)
/* harmony export */ });
/* harmony import */ var _grabTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grabTask */ "./src/grabTask.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
 


// Module that turns task data into an object
const ItemFactory = () => {

    // receiving function that breaks down each task item and sends it onward
    function receiveTasks(taskName, notes, date, project) {
        
        const item = {
           task: taskName,
           notes: notes,
           date: date,
           project: project 
        }

        _pushItem(item);
    }

    // pushes each task into index.js where it is added to the taskArray
    function _pushItem(item) {
        _index__WEBPACK_IMPORTED_MODULE_1__.itemRef.printItem(item);
        _grabTask__WEBPACK_IMPORTED_MODULE_0__.grabTask.clear();
    }
   
    return { receiveTasks }
}



/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ (() => {



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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map