import { itemRef, manipulateTaskArray, projectCreate } from "./index.js";

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

        const array = itemRef.arrayShare();

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
            manipulateTaskArray.replace(task, index)
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

export { editItems, taskUpdate }