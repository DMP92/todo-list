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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


/* 
************************************************************************************
**********************************EDIT ITEMS MODULE*********************************
************************************************************************************
*/

// module made for editing and interacting with each task item
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

    function searchItem(data) {

        const array = _index_js__WEBPACK_IMPORTED_MODULE_0__.itemRef.arrayShare();

        for (var i = 0; i < array.length; i++){
            let index = array[i].task;
            if (index === data) {
                console.log(array.indexOf(array[i]));
            }
        }

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

        const task = parent.children[4].textContent;
        console.log(task);
        searchItem(task);
        // allows us to get index for event target to change status from incomplete to complete or vice versa
        const taskItems = document.querySelectorAll('.taskItem');
        const tasks = Array.from(taskItems);
        // switch statement that (based on the cssText of the clicked element) either grays out, or 
        // fills in the taskItem container div
        switch(true) {
            case parent.style.cssText === '':
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
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

    /* 
    ************************************************************************************
    **********************************APPEND EACH TASK AFTER EDIT***********************
    ************************************************************************************
    */


    // function that takes newly edited information and publishes them to the DOM
    function _appendTask() {

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

        parent.replaceChild(projectName, project);
        parent.replaceChild(taskName, name);
        parent.replaceChild(taskDate, date);
        parent.replaceChild(description, notes);

        // variable that fetches index of edited element
        const index = tasks.indexOf(parent);

        grabEditedTask.newTask(event.target, name.value, notes.value, date.value, project.value, status, index);
    }

    

    function projectArray() {

    }

    return {
    eventListeners: buttonEventListeners

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
            editedTask.status = status,
            _updateArrays(editedTask, index)
        }

        function _updateArrays(task, index) {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.manipulateTaskArray.replace(task, index)
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

        return {
            erase: eraseTasks
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

    // function to confirm there are no repeating task values
    function checkItemData(item) {

        const taskName = toDoInput();
        const notes = itemNotes();
        const date = itemDate();
        const project = itemProject();
        const status = 'incomplete';

        console.log(61);
        // requires task input to be filled out
        if (item === undefined) {
            console.log(64);
            const sendGrabbedData = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.ItemFactory)();
            sendGrabbedData.receiveTasks(taskName, notes, date, project, status);
            console.log('fisrst');
           
        } else {

            console.log(70);
            switch(true) {         
                case taskName != '':
                    if (item.task === taskName) {
                       alert('Tasks must not repeat names');
                       console.log(75);
                       break;
                   } 
       
                  if (item.notes === notes && notes != '') {
                       alert('Notes must not repeat');
                       console.log(80);
                       break;
                  } 
       
                  if (item.project === project && project != '') {
                    alert('Projects must not repeat names');
                    console.log(85);
                    break;
                  } 
       
                  
                   const sendGrabbedData = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.ItemFactory)();
                   sendGrabbedData.receiveTasks(taskName, notes, date, project, status);
                   console.log(91);
                      
               break;
               
               case taskName == '':
                console.log(100);
                   alert('All tasks must have names');
               break;
           }
   
        }

           
            
        
        
        

    }

    function sendItemData() {
       
        // variable for grabbing .task 'Task' input field
        
        const task = document.querySelector('.task');
        const keys = Object.keys(localStorage);
        const values = localStorage.getItem('itemArray', keys[i]);
        var i = 0;
        const usableArray = JSON.parse(values);

        if(usableArray === null) {
            checkItemData()
            console.log('low first');

        } else if (usableArray != null) {
            
            while (i < usableArray.length) { 
                console.log('lest first');
                checkItemData(usableArray[i])

                i++
            }
        }

        /* I'm thinking there needs to be the data accessed inside THIS function 'sendItemData()'
                THEN I'll call the function above, loop through the keys in the above function and
                inside that loop it will push each item and search each item. 
                
                It should:
                    - break out of the loop if ever there's a duplicate and return an error
                    - give an alert describing the issue
                    - and alongside breaking out of the loop, it should stop the function call altogether
                    
                The function above will then print the task item, assuming all checks were met
                
        */
        
            
        
    }

    return {
        title: toDoInput,
        notes: itemNotes,
        itemDate: itemDate,
        itemProject: itemProject,
        clear: clearItemData,
        check: checkItemData,
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
            // pushes array item to localStorage

            // gets array from local storage
          

            // let myItem = JSON.stringify(item);
            // shareItem(item, index);
            // shareArrayItems(item, index, 'index');
            // unsure what I will do with this call
            // if (item.project != '') {
            //     projectCreate.fetch(item);
            //     console.log(myItem);                
            // } else {
            //     localStorage.setItem(`T${index}`, myItem);
            //     console.log(localStorage.getItem(`T${2}`.status));
            // }
            _storagePush(item);
        }

        // pushes each item into localStorage 
        function _storagePush(item) {

            // gives index position
            const index = itemArray.indexOf(item);
           
            // stores the itemArray in localStorage
            const storeArray = JSON.stringify(itemArray);
            localStorage.setItem('itemArray', storeArray);
            
            // variable that contains the obtained reference to the locallyStored 'itemArray'
            let storedArray = JSON.parse(localStorage.getItem('itemArray'));
            console.log(storedArray[index].task);    
            shareItem(item, index);
            shareArrayItems(item, index, 'index');

        }

        function arrayShare(item) {
            
            console.log(itemArray)
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
        shareItem: shareItem
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
                task.status = status;
                printTask(task, index, status);
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
        // shareTaskItem(item);
        // itemRef.share(); // not sure why this was here?
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
        localStore: receiveLocalStorage,
        receive: receiveItem,
        unpack: unpackItem,
        print: printTask,
        createArray: createItemObject
    }

})();

/* 
************************************************************************************
*************************MODULE THAT PRINTS TAB SPECIFIC CONTENT********************
************************************************************************************
*/

const tabbedPrint = (function() {
    const myStorage = window.localStorage;
    // breaks down each array sent into it's individual items
    function arrayUnpack(array) {
        for (var i = 0; i < array.length; i++) {
           
            _arrayItem(array[i]);
        }
    }

    function _arrayItem(index) {
        const project = {};
        project.task = index.task;
        project.notes = index.notes;
        project.date = index.date;
        project.project = index.project;
        taskPrint.unpack(project);
    }

    return {
        unpack: arrayUnpack
    }
})();





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
        _grabTask__WEBPACK_IMPORTED_MODULE_0__.grabTask.clear();
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
const sideBarHighlight = (function() {

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
        operator(4);
    }

    // function that highlights the tab that is clicked and unhighlights the tabs that aren't
    function sideBarEventListeners() {

        sideBarArray.forEach(tab => tab.addEventListener('click', () => {
            const index = sideBarArray.indexOf(event.target);

            switch(true) {
                case event.target.classList.contains('hovered'):
                    event.target.classList.remove('hovered');
                    defaultTab();
                break;
                case !event.target.classList.contains('hovered'):
                    child1.classList.remove('hovered');
                    child2.classList.remove('hovered');
                    child3.classList.remove('hovered');
                    child4.classList.remove('hovered');
                    child5.classList.remove('hovered');
                    event.target.classList.add('hovered');
                    operator(index);
                break;
            }

            const hover = document.querySelector('.hovered');
            

        }))
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
    switch(true) {
        case index === 0:
           tabSelection.inbox();
        break;
        case index === 1:
            tabSelection.today();
        break;
        case index === 2:
            tabSelection.weekly();
        break;
        case index === 3:
            tabSelection.projects();
        break;
        case index === 4:
            tabSelection.all();
        break;
    }
}

/* 
************************************************************************************
****************************MODULE THAT CONTROLS EACH TAB***************************
************************************************************************************
*/

// runs logic for each tab based on which tab is clicked
const tabSelection = (function() {

    const projectArray = [];
    const itemArray = [];

    function receiveProjects(project) {
        projectArray.push(project);
       
    }

    function receiveArrayItems(item, index, page) {
       
        switch(true) {
            case page === 'index':
                itemArray.push(item);
            break;
        }
    }
    // functions for each tab

    function inboxTab() {
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
    }

    function todayTab() {
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        console.log(1);
        // whatever taks are dated for today show up in the DOM
    }

    function weeklyTab() {
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        console.log(2);
        // whatever tasks happen this week show up in the DOM
    }

    function projectsTab() {
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        console.log(3);


        _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.tabbedPrint.unpack(projectArray);
        // tasks associated with certain projects will show up in the DOM
    }

    function allTab(array) {
        
        let storedArray = JSON.parse(localStorage.getItem('itemArray'));
        
        if (storedArray != null) {
            for ( var i = 0; i < storedArray.length; i++) {
                _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.unpack(storedArray[i]);
            }
        }


    }

    return {
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