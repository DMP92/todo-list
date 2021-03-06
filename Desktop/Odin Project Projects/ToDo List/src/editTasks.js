import { grabTask } from "./grabTask.js";
import { projects } from "./project.js";
import { itemRef, manipulateTaskArray, getProject } from "./index.js";
import { taskPrint } from "./printTasks.js";
import { projectPrint, tabSelection } from "./updateDOM.js";
/* 
************************************************************************************
**********************************EDIT ITEMS MODULE*********************************
************************************************************************************
*/

// module made for editing and interacting with each task item
const editItems = (function() {

    // array for replacing .textSpans items
    let newTextArray = [];

    // variables for the locallyStored projectArray
    const projectPanel = document.querySelector('.projectPanel');
    const projectS = JSON.parse(localStorage.getItem('projectArray'));
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
        editButtons.forEach(button => button.addEventListener('click', () => {
            const projectPanel = document.querySelector('.projectPanel');
            if(projectPanel === null ) {
                _editTask() 
            } else if (projectPanel != null) {
                _editProject ();
            }

        }));     
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
        const parentGroup = document.querySelectorAll('.taskItem');
        const projectPanel = document.querySelector('.projectPanel');
        let index = undefined;

        // variable for task index
        if (project === '') {
            index = searchItem(task);
        }

        switch(true) {
            case projectPanel === null:
                if (task === '') {
                    index = Array.from(parentGroup).indexOf(parent);
                   let projectIndex = searchProjectItems(project);
                    // variable that fetches array 
                    let itemArray = itemRef.arrayShare();
                    
                    // removes items from both the array, localStorage, and the DOM
                    taskPrint.removeProject(project);
                    itemRef.update(action, index, 1);
                    taskPanel.removeChild(parent);  
                    // projects.delete(projectIndex); 
                } else if ( task != '' && project === '' ) {
                    let projectIndex = searchProjectItems(project);
                    // variable that fetches array 
                    let itemArray = itemRef.arrayShare();
                   

                    // removes items from both the array, localStorage, and the DOM
                    taskPrint.removeProject(project);
                    itemRef.update(action, index, 1);
                    taskPanel.removeChild(parent);  
                    // projects.delete(projectIndex); 
                } else if ( task != '' && project != '') {
                    let projectIndex = searchProjectItems(project, task);
                    // variable that fetches array 
                    console.log(projectIndex);
                    let projectItems = JSON.parse(localStorage.getItem('projectArray'));
                    // removes items from both the array, localStorage, and the DOM
                    let tasks = projectItems[projectIndex.project].tasks[projectIndex.task];
                    
                            
                            
                            
                            projectPrint.delete(projectIndex.project, projectIndex.task);
                            taskPanel.removeChild(parent);  
                        
                    
                }
            break;
            case projectPanel != null:
                if (project === undefined) {
                //     let projectItems = JSON.parse(localStorage.getItem('projectArray'));

                let projectIndex = searchProjectItems(project);
                // variable that fetches array 
                let projectItems = JSON.parse(localStorage.getItem('projectArray'));
                
                // removes items from both the array, localStorage, and the DOM
               
        
                //    let projectIndex = searchProjectItems(project);
                //     // variable that fetches array 
                //     let itemArray = itemRef.arrayShare();
                    
                //     // removes items from both the array, localStorage, and the DOM
                //     taskPrint.removeProject(project);
                //     itemRef.update(action, index, 1);
                //     taskPanel.removeChild(parent);  
                // //     projects.delete(projectIndex); 
                } else if (project != undefined) {
                    
                   

                    let projectIndex = searchProjectItems(project, task);
                    // variable that fetches array 
                    
                    // removes items from both the array, localStorage, and the DOM
                    
                            projectPrint.delete(projectIndex.project, projectIndex.task);
                            taskPanel.removeChild(parent);  
                        
                    
                }
        }
       
        
        
    }



        /* I think I need to get the index of each item to print upon clicking
                then I need to send that into itemRef and replace w/e item is edited
                then call for a storage Push so it updates the item
         */

    function searchItem(name) {

        const array = JSON.parse(localStorage.getItem('itemArray'));

        for (var i = 0; i < array.length; i++){
            let index = array[i].task;
            
            if (index === name) {
               
                return array.indexOf(array[i]);
            }
        }

    }

    function searchProjectItems( project, task ) {
       
        const array = JSON.parse(localStorage.getItem('projectArray'));

        for (var i = 0; i < array.length; i++) {

            let index = array[i].projectName;
            let taskArray = array[i].tasks;

            if ( index === project ) {

                for ( var j = 0; j < taskArray.length; j++ ) {
                    if ( taskArray[j].task === task ) {
                        //
                        //
                        let taskIndex = taskArray.indexOf(taskArray[j]);
                        let projectIndex = array.indexOf(array[i]);
                        let newTask = {
                            task: taskIndex,
                            project: projectIndex
                        }
                        return newTask;
                    }
                }
                
                
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
        const project = parent.children[0].textContent;
        const gray = "filter: grayscale(1);";
        const normal = "filter: grayscale(0);";
        const action = 'complete';
        
        // targets specific element interacted with and returns a usable index position
        const task = parent.children[4].textContent;
        let index = searchItem(task);
        let status = 'incomplete';
        const projectColor = document.querySelector('.projects');

        // switch statement that (based on the cssText of the clicked element) either grays out, or 
        // fills in the taskItem container div
        switch(true) {
            case parent.style.cssText === '':
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                status = 'complete';

                // if the project tab is highlighted, then it updates the project array
                // else it will update item array
                if (project != '') {
                    const projectArrays = JSON.parse(localStorage.getItem('projectArray'));

                    for ( var i = 0; i < projectArrays.length; i++ ) {
                        if ( projectArrays[i].projectName === project ) {
                            index = projectArrays.indexOf(projectArrays[i]);
                            projectPrint.update(action, index, status);
                        }
                    }
                } else {

                    itemRef.update(action, index, status);
                }
            break;
            case parent.style.cssText === "filter: grayscale(1);":
                event.target.classList.remove('checkedTask');
                event.target.classList.add('completeTask');
                parent.style.cssText = `${normal}`;
                status = 'incomplete';


                 if (project != '' && index === undefined) {
                    const projectArrays = JSON.parse(localStorage.getItem('projectArray'));

                    for ( var i = 0; i < projectArrays.length; i++ ) {
                        if ( projectArrays[i].projectName === project ) {
                            index = projectArrays.indexOf(projectArrays[i]);
                           
                            projectPrint.update(action, index, status);
                        }
                    }
                } else if (project != '') {
                    index = projectPrint.search(task, project);
                   
                    projectPrint.update(action, index, status);
                } else {
                    
                    itemRef.update(action, index, status);
                }
                
            break;
            case parent.style.cssText === "filter: grayscale(0);":
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                status = 'complete';
                itemRef.update(action, index, status);
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
                 
             }
            
            i++
        }
    }

    function parentIndex ( event ) {
        const taskPanel = document.querySelector('.taskPanel');
        const parent = event.parentElement;

        switch ( true ) {
            case parent.children[0].textContent === '':
               const items = JSON.parse(localStorage.getItem('itemArray'));

                for ( var i = 0; i < items.length; i++ ) {
                    if ( parent.children[4].textContent === items[i].task ) {
                        items.indexOf ( item[i] );
                    }
                }

            break;
            case parent.children[0].textContent != '':
                
                const projects = JSON.parse(localStorage.getItem('projectArray'));

                for ( var i = 0; i < projects.length; i++ ) {
                    if ( projects[i].projectName === parent.children[0] ) {

                        const projectTasks = projects.map((a) => a.tasks);

                        for ( var j = 0; j < projectTasks.length; j++ ) {
                            if ( parent.children[4] === projectTasks[i][j].task) {
                            }
                        }

                    }
                }
            
            break;
        }

        
    }

    const currentProject = [];

    function _editProject () {
        // variables that get each nodeList item of the specific container the clicked button is in
        const parent = event.target.parentElement;
        const project = parent.children[0].textContent;
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const task = parent.children[4].textContent;

        const projectTextArray = document.querySelectorAll('.textSpans');

        for (var i = 0; i < projectTextArray.length; i++) {
            if (projectTextArray[i].textContent === project.textContent && name.tagName === 'DIV') {
                
                newTextArray.push(projectTextArray[i]);
            } else if (projectTextArray[i].textContent === undefined) {
            }
        }

        
        let newTasks = searchProjectItems( project, task );
        currentProject.push(newTasks);
       
        
        // variable that fetches array 
        let projectItems = JSON.parse(localStorage.getItem('projectArray'));
        // removes items from both the array, localStorage, and the DOM
        

        
      
        // IF the edit button is clicked and the task.tagName is still a DIV, then the code runs
        // ELSE it will run the function called below which appends the newly edited info to the DOM
        if (name.tagName === 'DIV') {
            // variables for appending input items to taskItem
    
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
            
             _appendProject ( currentProject[0].project, currentProject[0].task );

            currentProject.pop();
            currentProject.pop();
        }
    }

    function _appendProject ( ind, i ) {
        // variable for grabbing all task items
        const taskItems = document.querySelectorAll('.taskItem');
        const tasks = Array.from(taskItems);

        event.target.classList.remove('editingTask');
        event.target.classList.add('editTask');

        // gets the container of the specific edit button clicked
        const parent = event.target.parentElement;

        // variables for appending finished items to taskItem
        const project = parent.children[0].textContent
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const defaultProject = '';

        const taskName = document.createElement('div');
            taskName.classList.add('taskName');
            taskName.textContent = name.value;

        const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = notes.value;

        const taskDate = document.createElement('div');
            taskDate.classList.add('taskDate');
            taskDate.textContent = date.value;

            
            // if(textIndex != undefined ) {
            //     const projectScroll = document.querySelector('.scrollContainer');
            //     projectScroll.appendChild(textIndex);
            //     textIndex.textContent = project.value;
            //     newTextArray.pop();
            // } else if (project.value === '') {
            //     const projectPanel = document.querySelector('.projectPanel');
            //     if (projectPanel != null) {
            //         const projectScroll = document.querySelector('.scrollContainer');
            //         projectScroll.removeChild(textIndex);
            //        
            //     }
            // }


        // variable that fetches index of edited element
        const index = tasks.indexOf(parent);

        if(name.value != '') {
            
                parent.replaceChild(taskName, name);
                parent.replaceChild(taskDate, date);
                parent.replaceChild(description, notes);
               
        } else if (name.value === '') {
            
        }
        
        

        const newItem = {};
        newItem.task = name.value;
        newItem.notes = notes.value;
        newItem.date = date.value;
        newItem.project = project;
        newItem.status = 'incomplete';
        projects.splice( ind, i, newItem );

        const hovered = document.querySelector('.hovered');
        _updatePage ( hovered.textContent );

  }

  function _updatePage ( page ) {
      
        switch ( true ) {
            case page === 'Today':
                tabSelection.today();
            break;

            case page === 'Weekly':
                tabSelection.weekly();
            break;

        }
  }

    /* 
    **************************** EDIT TASK *******************************    
    */
    const taskContainer = [];

    // private function that allows the task info to be edited
    function _editTask() {
// ************************IF TASK EXISTS IN EITHER ARRAY AND LOSES THE REASON IT'S IN THAT ARRAY, SWITCH
// THE ARRAY IT'S CONTAINED IN

        // variables that get each nodeList item of the specific container the clicked button is in
        const parent = event.target.parentElement;
        const project = parent.children[0]
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const task = parent.children[4].textContent;
        
        if (project.textContent != '' ) {
            _editProject();
        } else {

            const projectTextArray = document.querySelectorAll('.textSpans');
            

            for (var i = 0; i < projectTextArray.length; i++) {
                if (projectTextArray[i].textContent === project.textContent && name.tagName === 'DIV') {
                    
                    newTextArray.push(projectTextArray[i]);
                } else if (projectTextArray[i].textContent === undefined) {
                }
            }

            const itemIndex = searchItem(task);
            taskContainer.push(itemIndex);

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
                    let tempIndex = taskContainer[0];
                    _appendTask(tempIndex);
                    taskContainer.pop();
            }
        }
    }

    /* 
    ************************************************************************************
    **********************************APPEND EACH TASK AFTER EDIT***********************
    ************************************************************************************
    */


    // function that takes newly edited information and publishes them to the DOM
    function _appendTask(textIndex, itemIndex) {

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
        const defaultProject = '';

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
                const projectPanel = document.querySelector('.projectPanel');
                if (projectPanel != null) {
                    const projectScroll = document.querySelector('.scrollContainer');
                    projectScroll.removeChild(textIndex);
                }
            }


        // variable that fetches index of edited element
        textIndex

        _checkItemData(event.target, name.value, notes.value, date.value, project.value, status, textIndex)

        if(name.value != '') {
            
                parent.replaceChild(projectName, project);
                parent.replaceChild(taskName, name);
                parent.replaceChild(taskDate, date);
                parent.replaceChild(description, notes);
           
                projectName.textContent = '';
            
           
        } else if (name.value === '') {
            
        }

        const newItem = {};
        newItem.task = name.value;
        newItem.notes = notes.value;
        newItem.date = date.value;
        newItem.project = projectName.textContent;
        newItem.status = 'incomplete';
        
        // conditional that prints project to scroll container if project name exists
        if (project.value != '') {
            alert('Tasks cannot be made into projects.')
        }
        
        itemRef.update('edit', textIndex, newItem);
        
        const hovered = document.querySelector('.hovered');
        _updatePage ( hovered.textContent );
    }

    
    // function to confirm there are no repeating task values
    function _checkItemData(target, taskName, notes, date, project, status, index) {

        const projectPanel = document.querySelector('.projectPanel');
        // variable for fetching the itemArray inside localStorage and assigning it a variable
        if ( projectPanel === null ) {
            const arrays = JSON.parse(localStorage.getItem('itemArray'));
        } else if ( projectPanel != null ) {
            const projectS = JSON.parse(localStorage.getItem('projectArray'));
        }

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
            if ( projectPanel === null ) {
                grabEditedTask.newTask(event.target, name.value, notes.value, date.value, project.value, status, index);
            } else if ( projectPanel != null ) {

            }


            break;

            case existing === true:
                if (projectPrompt === true) {
                    alert(`If you want to add tasks to your ${dataSet}, click on the 'Projects' tab.`);
                     alert(`All ${dataSet} must be unique. `);
                    
                } else {
                   
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
            // variable that tells itemRef that the action being taken is 'edit'
            const edit = 'edit';
            itemRef.update(edit, index, task)
        }

        return {
            newTask: receiveEditedTask
        }
    })();

    

    const grabEditedProject = (function () {

        function receiveEditedProject (target, task, notes, date, project, status, index ) {
            const editedProject = {};
            editedProject.name = task,
            editedProject.notes = notes,
            editedProject.date = date,
            editedProject.project = project,
            editedProject.status = 'incomplete',
            _updateArrays ( task, index )
        }

        function _updateArrays(task, index) {
            // variable that tells itemRef that the action being taken is 'edit'
            const edit = 'edit';
            projects.update(edit, index, task)
        }

        return {
            receiveEditedProject
        }
    })()

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

export { editItems, taskUpdate }