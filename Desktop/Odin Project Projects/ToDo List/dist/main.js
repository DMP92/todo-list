/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editTasks.js":
/*!**************************!*\
  !*** ./src/editTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editItems": () => (/* binding */ editItems),
/* harmony export */   "taskUpdate": () => (/* binding */ taskUpdate)
/* harmony export */ });
/* harmony import */ var _grabTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grabTask.js */ "./src/grabTask.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _printTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printTasks.js */ "./src/printTasks.js");




/* 
************************************************************************************
**********************************EDIT ITEMS MODULE*********************************
************************************************************************************
*/

// module made for editing and interacting with each task item
const editItems = (function() {

    // array for replacing .textSpans items
    let newTextArray = [];

    // variables that target DOM elements for deletion and editing
    const taskPanel = document.querySelector('.taskPanel');

    // function that houses the event listener for the deleteItem function
    function buttonEventListeners(event) {
        // variables that get each nodeList of buttons for interaction
        const deleteButtons = document.querySelectorAll('.itemDelete');
        const editButtons = document.querySelectorAll('.editTask');
        const completeButtons = document.querySelectorAll('.completeTask');
        const checkedButtons = document.querySelectorAll('.checkedTask');


        deleteButtons.forEach(button => button.addEventListener('click', _deleteItem));
        editButtons.forEach(button => button.addEventListener('click', _editTask));     
        completeButtons.forEach(button => button.addEventListener('click', _completeTask));
        checkedButtons.forEach(button => button.addEventListener('click', _completeTask));
    }

    // private function that removes task item nodes from taskPanel
    function _deleteItem(event) {

        // variables that grab each parent + task to pinpoint the index of said task
        const parent = event.target.parentElement;
        const task = parent.children[4].textContent;
        const project = parent.children[0].textContent;
        const action = 'delete';
        // variable for task index
        
        let index = searchItem(task);
        
        // variable that fetches array 
        let itemArray = _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.arrayShare();
        
        // removes items from both the array, localStorage, and the DOM
        _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.removeProject(project);
        _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.update(action, index, 1);
        taskPanel.removeChild(parent);   
    }



        /* I think I need to get the index of each item to print upon clicking
                then I need to send that into itemRef and replace w/e item is edited
                then call for a storage Push so it updates the item
         */

    function searchItem(data) {

        const array = _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.arrayShare();

        for (var i = 0; i < array.length; i++){
            let index = array[i].task;
            if (index === data) {
                return array.indexOf(array[i]);
            }
        }

    }


    /* 
    **************************** COMPLETE TASK *******************************    
    */

    // function that grays each task out that is already marked complete
    function loadComplete(item) {
        
        const gray = "filter: grayscale(1);";
        const checkBox = item.children[1];
        
        checkBox.classList.remove('completeTask');
        checkBox.classList.add('checkedTask');
        item.style.cssText = `${gray}`;
    } 

    // private function that marks task item as completed
    function _completeTask() {
        // variables that fetch and assign the cssText for the clicked completeTask button
        const parent = event.target.parentElement;
        const gray = "filter: grayscale(1);";
        const normal = "filter: grayscale(0);";
        const action = 'complete';

        // targets specific element interacted with and returns a usable index position
        const task = parent.children[4].textContent;
        const index = searchItem(task);
        let status = 'incomplete';
        console.log(index);
        
        // switch statement that (based on the cssText of the clicked element) either grays out, or 
        // fills in the taskItem container div
        switch(true) {
            case parent.style.cssText === '':
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                status = 'complete'
                _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.update(action, index, status);
            break;
            case parent.style.cssText === "filter: grayscale(1);":
                event.target.classList.remove('checkedTask');
                event.target.classList.add('completeTask');
                parent.style.cssText = `${normal}`;
                status = 'incomplete';
                _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.update(action, index, status);
            break;
            case parent.style.cssText === "filter: grayscale(0);":
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                status = 'complete';
                _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.update(action, index, status);
            break;
        }
        completeLocalStorage(parent);
    }   
    
    function completeLocalStorage(parent) {

        // variables for grabbing identification
       
        const project = parent.children[0];
        const name = parent.children[4];

        const keys = Object.keys(localStorage);
        let i = 0;

        while (i < keys.length) {
            const items = JSON.parse(localStorage.getItem(keys[i]));
             if (items.task === name.textContent) {
                // const oldItems = JSON.parse(localStorage.getItem(keys[i]).key);
                var key = localStorage.key(i);
                const newItems = {};
                newItems.task = items.task;
                newItems.notes = items.notes;
                newItems.date = items.date;
                newItems.project = items.project;
                newItems.status = 'complete';
                const newest = JSON.stringify(newItems);
                localStorage.setItem(key, newest);
                //  localStorage.setItem(items, `{task:${task}, notes: ${notes}, date: ${date}, ${project}, ${status}}`);
                 console.log(key);
             }
            
            i++
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


        const projectTextArray = document.querySelectorAll('.textSpans');
        

        for (var i = 0; i < projectTextArray.length; i++) {
            if (projectTextArray[i].textContent === project.textContent && name.tagName === 'DIV') {
                
                newTextArray.push(projectTextArray[i]);
            } else if (projectTextArray[i].textContent === undefined) {
                console.log('hmm');
            }
        }


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
            _appendTask(newTextArray[0]);
        }
    }

    /* 
    ************************************************************************************
    **********************************APPEND EACH TASK AFTER EDIT***********************
    ************************************************************************************
    */


    // function that takes newly edited information and publishes them to the DOM
    function _appendTask(textIndex) {

        // variable for grabbing all task items
        const taskItems = document.querySelectorAll('.taskItem');
        const tasks = Array.from(taskItems);

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

            
            if(textIndex != undefined && project.value != '') {
                const projectScroll = document.querySelector('.scrollContainer');
                projectScroll.appendChild(textIndex);
                textIndex.textContent = project.value;
                newTextArray.pop();
            } else if (project.value === '') {
                const projectScroll = document.querySelector('.scrollContainer');
                projectScroll.removeChild(textIndex);
                console.log('hey');
            }


        parent.replaceChild(projectName, project);
        parent.replaceChild(taskName, name);
        parent.replaceChild(taskDate, date);
        parent.replaceChild(description, notes);

        // variable that fetches index of edited element
        const index = tasks.indexOf(parent);
        
        // conditional that prints project to scroll container if project name exists
        if (project.value != '') {
            _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.project(project.value, index, true);
        }
        _checkItemData(event.target, name.value, notes.value, date.value, project.value, status, index)
    }

    
    // function to confirm there are no repeating task values
    function _checkItemData(target, taskName, notes, date, project, status, index) {

        // variable for fetching the itemArray inside localStorage and assigning it a variable
        const arrays = JSON.parse(localStorage.getItem('itemArray'));

        // variables that help the switch statement below decide what to do based on if repeat data is found
        let existing = false;
        let dataSet = undefined;
        let projectPrompt = false;

        // loop that runs through each locallyStored item and checks if there are repeated values
        switch(true) {
            case arrays === null:     
            break;
            
            case arrays != null:
            for ( var i = 0; i < arrays.length; i++) {
                if (arrays[i].task === taskName && arrays[i].task != '') {
                    existing = true;
                    dataSet = 'tasks';
                }

                if (arrays[i].notes === notes && arrays[i].notes != '') {
                    existing = true;
                    dataSet = 'notes';
                }

                if (arrays[i].project === project && arrays[i].project != '') {
                    existing = true;
                    dataSet = 'projects';
                    projectPrompt = true;
                }
            }
        }
        // if no repeated data, print the task
            // if there IS repeated data, alert the user, and refuse their task
        switch(true) {
            case existing === false && taskName === '':
                return alert('Tasks cannot be blank!');
            break;

            case existing === false && taskName != '':
                grabEditedTask.newTask(event.target, name.value, notes.value, date.value, project.value, status, index);

            break;

            case existing === true:
                if (projectPrompt === true) {
                    alert(`If you want to add tasks to your ${dataSet}, click on the 'Projects' tab.`);
                     alert(`All ${dataSet} must be unique. `);
                     console.log('top');
                } else {
                    console.log('bottom');
                    return alert(`All ${dataSet} must be unique. `);
                }
            break;
        }

    }


    return {
    eventListeners: buttonEventListeners,
    complete: loadComplete,

    }

})();

    /* 
    ************************************************************************************
    **********************************GRAB EDITED TASK**********************************
    ************************************************************************************
    */

    // module that grabs edited task info and communicates that changes were made
    const grabEditedTask = (function() {

        /* 
            there should be a way to track back to the orignial array in index.js when you edit
            it'll figure out which index the edited item belongs to, determine if it has a project
            and rewrite that information. Keeping it's place in the array index, but updating it
        */
        // variables that grab specific task that is edited

        function receiveEditedTask(target, task, notes, date, project, status, index) {
            const editedTask = {};
            editedTask.name = task,
            editedTask.notes = notes,
            editedTask.date = date,
            editedTask.project = project,
            editedTask.status = 'incomplete',
            _updateArrays(editedTask, index)

        }

        function _updateArrays(task, index) {
            console.log(task);
            // variable that tells itemRef that the action being taken is 'edit'
            const edit = 'edit';
            _index_js__WEBPACK_IMPORTED_MODULE_1__.itemRef.update(edit, index, task)
        }

        return {
            newTask: receiveEditedTask
        }
    })();

    const deleteButton = document.querySelector('.formDelete');
        deleteButton.addEventListener('click', () => {
    })

     /* 
    ************************************************************************************
    **********************************MODULE FOR DELETING EVERY ITEM********************
    ************************************************************************************
    */

    const taskUpdate = (function() {

        // variable that grabs task container & tasks
        const mainSection = document.querySelector('.mainSection');
        const taskPanel = document.querySelector('.taskPanel');
        const allItems = taskPanel.children;
        // function that erases all tasks from panel

        function eraseTasks() {
            var child = taskPanel.lastElementChild; 
            while (child) {
                taskPanel.removeChild(child);
                child = taskPanel.lastElementChild;
            }

        }

        // function that deletes each .textSpans element so they don't spam
        function clearProjectName() {

            // variable that fetches project panel
            const scrollContainer = document.querySelector('.scrollContainer');
            var child = document.querySelectorAll('.textSpans');

            for(var i = 0; i < child.length; i++) {
                scrollContainer.removeChild(child[i]);
            }

        }

        return {
            erase: eraseTasks,
            clear: clearProjectName
        }
    })();



/***/ }),

/***/ "./src/grabTask.js":
/*!*************************!*\
  !*** ./src/grabTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grabTask": () => (/* binding */ grabTask)
/* harmony export */ });
/* harmony import */ var _printTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printTasks.js */ "./src/printTasks.js");
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");


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

    // function to confirm there are no repeating task values
    function checkItemData(taskName, notes, date, project, status) {

        // variable for fetching the itemArray inside localStorage and assigning it a variable
        const arrays = JSON.parse(localStorage.getItem('itemArray'));

        // variables that help the switch statement below decide what to do based on if repeat data is found
        let existing = false;
        let dataSet = undefined;
        let projectPrompt = false;

        // loop that runs through each locallyStored item and checks if there are repeated values
        switch(true) {
            case arrays === null:     
            break;
            
            case arrays != null:
            for ( var i = 0; i < arrays.length; i++) {
                if (arrays[i].task === taskName && arrays[i].task != '') {
                    existing = true;
                    dataSet = 'tasks';
                }

                if (arrays[i].notes === notes && arrays[i].notes != '') {
                    existing = true;
                    dataSet = 'notes';
                }

                if (arrays[i].project === project && arrays[i].project != '') {
                    existing = true;
                    dataSet = 'projects';
                    projectPrompt = true;
                }
            }
        }
        // if no repeated data, print the task
            // if there IS repeated data, alert the user, and refuse their task
        switch(true) {
            case existing === false && taskName === '':
                return alert('Tasks cannot be blank!');
            break;

            case existing === false && taskName != '':
                const sendGrabbedData = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.ItemFactory)();
                sendGrabbedData.receiveTasks(taskName, notes, date, project, status);
            break;

            case existing === true:
                if (projectPrompt === true) {
                    alert(`If you want to add tasks to your ${dataSet}, click on the 'Projects' tab.`);
                     alert(`All ${dataSet} must be unique. `);
                     console.log('top');
                } else {
                    console.log('bottom');
                    return alert(`All ${dataSet} must be unique. `);
                }
            break;
        }
       
    }

    // function that gathers all task data from each form, and pushes to the above function 'checkItemData()'
    function sendItemData() {

        const taskName = toDoInput();
        const notes = itemNotes();
        const date = itemDate();
        const project = itemProject();
        const status = 'incomplete'

        checkItemData(taskName, notes, date, project, status);
    }

    return {
        title: toDoInput,
        notes: itemNotes,
        itemDate: itemDate,
        itemProject: itemProject,
        check: checkItemData,
        send: sendItemData
    }
})()




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemRef": () => (/* binding */ itemRef),
/* harmony export */   "projectCreate": () => (/* binding */ projectCreate),
/* harmony export */   "manipulateTaskArray": () => (/* binding */ manipulateTaskArray)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/taskFactory.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _grabTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grabTask */ "./src/grabTask.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");
/* harmony import */ var _printTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./printTasks */ "./src/printTasks.js");









// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed
const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];
    
        function fillArray() {
            // gets stored array from localStorage
            const fillArray = JSON.parse(localStorage.getItem('itemArray'));
 
            // keeps itemArray filled with saved values so it doesn't reset on window load
            switch(true) {
                case fillArray != null:
                    for (var i = 0; i < fillArray.length; i++) {
                        itemArray.push(fillArray[i]);
                    }
                break;
            }
        }

        // pushes todo item into Item array & other functions inside the itemRef Module
        function pushItem(item) {
            // pushes item to array
            itemArray.push(item);
            
            storagePush(item);
        }

        // pushes each item into localStorage 
        function storagePush(item) {

            // gives index position
            const index = itemArray.indexOf(item);
           console.log(itemArray);
            // stores the itemArray in localStorage
            const storeArray = JSON.stringify(itemArray);
            localStorage.setItem('itemArray', storeArray);
            
            // variable that contains the obtained reference to the locallyStored 'itemArray'
            let storedArray = JSON.parse(localStorage.getItem('itemArray'));
            // console.log(storedArray[index].task);   
            shareItem(item, index);
            shareArrayItems(item, index, 'index');
              
        }

        function arrayUpdate(action, index, amount) {
            let storeArray = JSON.stringify(itemArray);

            switch(true) {
                case action === 'delete':
                    itemArray.splice(index, 1);
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                break;
                case action === 'edit':
                    console.log(amount);
                    const newItem = {};
                    newItem.task = amount.name;
                    newItem.notes = amount.notes;
                    newItem.date = amount.date;
                    newItem.project = amount.project;
                    newItem.status = amount.status;

                   
                    itemArray.splice(index, 1, newItem);
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                    let storedArray = JSON.parse(localStorage.getItem('itemArray'));
                    console.log(storedArray);

                    
                    
                break;
                case action === 'complete':
                    itemArray[index].status = amount;
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                break;
            }
        }

        function arrayShare(item) {
            
            return itemArray;
        }

        // shares specific itemArray
        function shareArrayItems(item, index, page) {
            _updateDOM__WEBPACK_IMPORTED_MODULE_1__.tabSelection.receive(item, index, page);
        }

        function shareItem(item, index) {
            _printTasks__WEBPACK_IMPORTED_MODULE_4__.taskPrint.receive(item, index);

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
        fillArray, fillArray,
        printItem : pushItem,
        arrayShare: arrayShare,
        title: shareName,
        notes: shareNote,
        summary: shareSummary,
        notes: shareProject,
        task: shareTask,
        share: shareArrayItems,
        shareItem: shareItem, 
        update: arrayUpdate,
    }
})();


// Module for array manipulation 
const manipulateTaskArray = (function() {
    

    function _grabArray() {
        const itemArray = itemRef.arrayShare();
        console.log(itemArray);
        return itemArray;
       
    }

    function replaceItem(item, index) {
        const itemArray = _grabArray();
        itemArray.splice(index, 1, item);
        console.log(itemArray);
    }

    return {
        replace: replaceItem
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
        project.project = item.project;
        project.status = 'unfinished';
        _updateDOM__WEBPACK_IMPORTED_MODULE_1__.tabSelection.receiveProjects(project);

        projectArray.push(project);
        const index = projectArray.indexOf(project);
        
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

// keeps all event listeners active
const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', () => {
        _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
    })

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    _grabTask__WEBPACK_IMPORTED_MODULE_2__.grabTask.send();
    _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
});

window.addEventListener('load', () => {
    _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
    itemRef.fillArray();
    _updateDOM__WEBPACK_IMPORTED_MODULE_1__.tabSelection.eventListeners();

})



/* 
    I need there to be a way to communicate with
*/







/***/ }),

/***/ "./src/printTasks.js":
/*!***************************!*\
  !*** ./src/printTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskPrint": () => (/* binding */ taskPrint),
/* harmony export */   "tabbedPrint": () => (/* binding */ tabbedPrint)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");

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

   

    function receiveLocalStorage(archive) {
        console.log(archive);
    }

    function receiveItem(item, index) {
        // calls unpackItem to breakdown each item key
        unpackItem(item, index);
    }

    // takes item and breaks it down into each part
    function unpackItem(item, index, status) {

        const taskInput = document.querySelector('.task');
        
                const task = {};
                task.task = item.task;
                task.notes = item.notes;
                task.date = item.date;
                task.project = item.project;
                task.status = item.status;
                printTask(task, index, task.status);
                // console.log(task, index);    
    }

    // function that calls each appendChild method in order to create the task
    function printTask(task, index, status) {
        const item = document.createElement('div');
        item.classList.add('taskItem');
        
        // appends taskItem container DIV to task item section
        taskPanel.appendChild(item);

        _printProjectName(item, task.project);
        _printButtons(item);
        _printTaskName(item, task.task);
        _printTaskDate(item, task.date);
        _printDescription(item, task.notes);
        if (status === 'complete') {
            _editTasks__WEBPACK_IMPORTED_MODULE_1__.editItems.complete(item);
        }

        if (task.project != '') {
            appendProjectName(task, index, status)
        }
        // shareTaskItem(item);
        // itemRef.share(); // not sure why this was here?
        // createItemObject(item);
    }

    function appendProjectName(task, index, status) {
        const scrollContainer = document.querySelector('.scrollContainer');

        if (status != true) {
            // const text span
            const textSpan = document.createElement('span');
            textSpan.classList.add('textSpans');
            const name = task.project;
            textSpan.textContent = name;

            scrollContainer.appendChild(textSpan);
        } else if (status === true) {
            const textSpan = document.querySelectorAll('.textSpans');
            for(var i = 0; i < textSpan.length; i++) {
                if (textSpan[i].textContent === '') {
                    const name = task.project;
                    textSpan[i].textContent = name;
                }
            }
        }

        // breaks up task
        
    }

    function removeProjectName (project) {

        // variable that gets each scroll project span ele
        const projectSpan = document.querySelectorAll('.textSpans');
        const scrollContainer = document.querySelector('.scrollContainer');

        for (var i = 0; i < projectSpan.length; i++) {
            if (project === projectSpan[i].textContent) {
                scrollContainer.removeChild(projectSpan[i]);
            }
        }
    }

    // function that specifically prints each clicked project item to projectPanel
    function projectToPanel(task) {

        // variable that fetches project panel
        const panel = document.querySelector('.projectPanel');

        panel.textContent = `${task}`;

    }

    
    
    
                // variable for task container
                // prints the name of the project
                function _printProjectName(item, project) {

                    const projectName = document.createElement('div');

                    projectName.classList.add('projectName');

                    projectName.textContent = project;
                    if(projectName.textContent === '') {
                        projectName.textContent = '';
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
        localStore: receiveLocalStorage,
        receive: receiveItem,
        unpack: unpackItem,
        print: printTask,
        project: appendProjectName,
        pPanel: projectToPanel,
        removeProject: removeProjectName
    }

})();

/* 
************************************************************************************
*************************MODULE THAT PRINTS TAB SPECIFIC CONTENT********************
************************************************************************************
*/

const tabbedPrint = (function() {
    // breaks down each array sent into it's individual items
    
    function arrayUnpack(array) {
        for (var i = 0; i < array.length; i++) {
           
            _arrayItem(array[i]);
        }
    }


    function _arrayItem(index) {
        const item = {};
        item.task = index.task;
        item.notes = index.notes;
        item.date = index.date;
        item.project = index.project;
        item.status = index.status;
        taskPrint.unpack(item);
    }

    return {
        unpack: arrayUnpack
    }
})();


/* 
************************************************************************************
*************************MODULE THAT PRINTS TAB SPECIFIC CONTENT********************
************************************************************************************
*/



/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFactory": () => (/* binding */ ItemFactory)
/* harmony export */ });
/* harmony import */ var _grabTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grabTask */ "./src/grabTask.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
 


// Module that turns task data into an object
const ItemFactory = () => {

    // receiving function that breaks down each task item and sends it onward
    function receiveTasks(taskName, notes, date, project, status) {
        
        // forms each group of task data into an object 
        const item = {
           task: taskName,
           notes: notes,
           date: date,
           project: project, 
           status: status
        }

        _pushItem(item);
    }

    // pushes each task into index.js where it is added to the taskArray
    function _pushItem(item) {
        _index__WEBPACK_IMPORTED_MODULE_1__.itemRef.printItem(item);
    }
   
    return { receiveTasks }
}



/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideBarHighlight": () => (/* binding */ sideBarHighlight),
/* harmony export */   "tabSelection": () => (/* binding */ tabSelection)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _editTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTasks.js */ "./src/editTasks.js");
/* harmony import */ var _printTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printTasks.js */ "./src/printTasks.js");




/* 
************************************************************************************
****************************CONTROLS WHICH SIDEBAR IS LIT UP************************
************************************************************************************
*/

// module that tracks which sidebar panel is interacted with, and then passes that info on
// so the data corresponding with that tab can be displayed in the DOM
const sideBarHighlight = (function () {

    // variables for targeting each tab
    const sideBarChildren = document.querySelector('.sidebar').children;
    // each tab element
    const child1 = sideBarChildren[0];
    const child2 = sideBarChildren[1];
    const child3 = sideBarChildren[2];
    const child4 = sideBarChildren[3];
    const child5 = sideBarChildren[4];

    // array to contain sidebar tabs
    const sideBarArray = [];
    sideBarArray.push(child1, child2, child3, child4, child5);

    function defaultTab() {
        const all = document.querySelector('.all');
        all.classList.add('hovered');
        operator(0);
    }

    // function that highlights the tab that is clicked and unhighlights the tabs that aren't
    function sideBarEventListeners(number) {

        

            if (number != undefined) {
                child1.classList.remove('hovered');
                child2.classList.remove('hovered');
                child3.classList.remove('hovered');
                child4.classList.remove('hovered');
                child5.classList.remove('hovered');
                // added by 'number'
                child5.classList.add('hovered');

            } else if (number === undefined) {

            sideBarArray.forEach(tab => tab.addEventListener('click', () => {
                const index = sideBarArray.indexOf(event.target);
                switch (true) {
                    case event.target.classList.contains('hovered'):
                        event.target.classList.remove('hovered');
                        defaultTab();
                        tabSelection.eventListeners();
                        break;
                    case !event.target.classList.contains('hovered'):
                        child1.classList.remove('hovered');
                        child2.classList.remove('hovered');
                        child3.classList.remove('hovered');
                        child4.classList.remove('hovered');
                        child5.classList.remove('hovered');
                        event.target.classList.add('hovered');
                        operator(index);
                        tabSelection.eventListeners();
                        break;
                    
                }

                const hover = document.querySelector('.hovered');


            }))
        }
    }

    // shares the array that contains each sidebar element
    function shareTabs() {
        return sideBarChildren;
    }

    return {
        default: defaultTab,
        children: sideBarEventListeners,
        share: shareTabs
    }
})();

// function that calls functions in the 'tabSelection' module based on which tab is clicked
function operator(index) {
    switch (true) {
        case index === 0:
            tabSelection.all();
            break;
        case index === 1:
            tabSelection.inbox();
            break;
        case index === 2:
            tabSelection.today();
            break;
        case index === 3:
            tabSelection.weekly();
            break;
        case index === 4:
            tabSelection.projects();
            break;
    }
}

/* 
************************************************************************************
****************************MODULE THAT CONTROLS EACH TAB***************************
************************************************************************************
*/

// runs logic for each tab based on which tab is clicked
const tabSelection = (function () {

    const projectArray = [];
    const itemArray = [];

    // listens for which project title is clicked on and prints it to the project tab display
    function eventListeners() {
        const textSpans = document.querySelectorAll('.textSpans');

        const textArray = Array.from(textSpans);
        textArray.forEach(text => text.addEventListener('click', _eventListen));
    
    }

    function _eventListen() {
        const projectPanel = document.querySelector('.projectPanel'); 
        if (projectPanel != undefined) {
                    projectName();               
        } else {
            projectsTab(true);
            projectName();
        }
    }

    function receiveProjects(project) {
        projectArray.push(project);

    }

    function receiveArrayItems(item, index, page) {

        switch (true) {
            case page === 'index':
                itemArray.push(item);
                break;
        }
    }
    
    // functions for each tab
    function inboxTab() {

        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes project panel
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
    }


    function todayTab() {
        
        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes projectpanel
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        console.log(1);
        // whatever taks are dated for today show up in the DOM
    }


    function weeklyTab() {

        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes projectPanel 
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        console.log(2);
        // whatever tasks happen this week show up in the DOM
    }
    

    function projectName() {
        const projectPanel = document.querySelector('.projectPanel');
        projectPanel.textContent = event.target.textContent;
        let currentText = event.target.textContent;

        eventListeners(currentText);
        
    }

    // controls both ways that you can get to the project tab
            // by clicking on the project tab itself
            // or, but clicking on a project name in the scroll section
    function projectsTab(condition) {
        const projectText = event.target.textContent;
        if (condition === true) {
            sideBarHighlight.children(4);
        } else {}
        // erases all tasks from prior tabs and all scroll items
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();

        // variables for finding taskSpan elements
        const text = document.querySelectorAll('.taskSpans');
        // if taskSpan elements are found, clear the projectScroll element of them
        if (text != null) {
            _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
        } 

        // variable for targeting the 'mainSection' div && adding a place for chosen project title to go
        const mainSection = document.querySelector('.mainSection');
        mainSection.style.cssText = `
        position: relative;
        grid-area: "main";
        grid-column: 4/11;
        grid-row: 1/11;
        background-color: var(--dark-color);
        z-index: 5;
        display: grid;
        grid-template-columns: repeat(4, 24%);
        grid-template-rows: repeat(10, 10%);
        grid-template-areas: 
                "form form"
                "project project"
                "items items";
        width: min(100%, 1200px);
        `;

        // const targets projectPanel div
        const projectPanel = document.createElement('div');
        projectPanel.classList.add('projectPanel');
        // variable that targets taskPanel div
        const taskPanel = document.querySelector('.taskPanel');

        taskPanel.style.cssText = `grid-row: 5/11`;
        
        // appends projectPanel to section
        mainSection.appendChild(projectPanel);
        
        // variable that allows task to print
        let check = false;
        

        

        // variable that contains the locallyStored array
        const projectItems = JSON.parse(localStorage.getItem('itemArray'));

        // pushes each project item to interface that prints them to DOM
        for (var i = 0; i < projectItems.length; i++) {
            if (projectItems[i].project === undefined) {
                _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.project();

            } else if (projectItems[i].project != '') {
                _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.unpack(projectItems[i]);
                check = true;
            }
        }
        
    }

    // controls logic involved in the selection of the All tab. Prints all tasks and projects
    function allTab(array) {
        
        // erases tasks from DOM so they don't spam themselves
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
        } 

        // const targets projectPanel div
        const projectPanel = document.querySelector('.projectPanel');

        // variable that targets taskPanel div
        const taskPanel = document.querySelector('.taskPanel');

        // variable for targeting the 'mainSection' div
        const mainSection = document.querySelector('.mainSection');

        const isPresent = mainSection.contains(projectPanel);
        // appends projectPanel to section

        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 


        let storedArray = JSON.parse(localStorage.getItem('itemArray'));

        if (storedArray != null) {
            for (var i = 0; i < storedArray.length; i++) {
                _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.unpack(storedArray[i]);
            }
        }


    }

    

    return {
        eventListeners: eventListeners,
        receive: receiveArrayItems,
        receiveProjects: receiveProjects,
        inbox: inboxTab,
        today: todayTab,
        weekly: weeklyTab,
        projects: projectsTab,
        all: allTab
    }
})();


window.addEventListener('load', () => {

    sideBarHighlight.default();
    sideBarHighlight.children();
});




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