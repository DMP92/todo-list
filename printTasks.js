
/* 
************************************************************************************
*************************MODULE THAT PRINTS INFO TO DOM*****************************
************************************************************************************
*/

import { itemRef, projectCreate } from ".";
import { editItems, taskUpdate } from "./editTasks";
import { projects } from "./project";
import { sideBarHighlight, tabSelection } from "./updateDOM";


// Module that prints each task item to UI
const taskPrint = (function() {
    // variables for task parent
    const taskPanel = document.querySelector('.taskPanel');
    let item = document.querySelector('.taskItem');

   

    function receiveLocalStorage(archive) {
        
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
                printTask(task, task.status, index);
                   
    }

    // function that calls each appendChild method in order to create the task
    function printTask(task, status, index) {
        const item = document.createElement('div');
        item.classList.add('taskItem');
            // appends taskItem container DIV to task item section
            taskPanel.appendChild(item);
        
              // project panel
        const projectPanel = document.querySelector('.projectPanel');

        switch(true) {
            case projectPanel === null:
                _printProjectName(item, task.project);
                _printButtons(item);
                _printTaskName(item, task.task);
                _printTaskDate(item, task.date);
                _printDescription(item, task.notes);
                
                if (status === 'complete') {
                    
                    editItems.complete(item);
                }
            break;
            case projectPanel != null:
                
                printProjects(task, index, status, item);
            break;
        }
            
            if (task.project != '') {
                appendProjectName(task, index, status)
            }
        // shareTaskItem(item);
        // itemRef.share(); // not sure why this was here?
        // createItemObject(item);
    }

    function printProjects(task, index, status, items) {

        const item = document.createElement('div');
        item.classList.add('taskItem');
            // appends taskItem container DIV to task item section
        taskPanel.appendChild(item);
        // variable for fetching each tab element
        const tabList = document.querySelector('.sidebar');
        let selectedTab = ''
        
        for ( var i = 0; i < tabList.children.length; i++) {
            if (tabList.children[i].classList.contains('hovered')) {
                selectedTab = tabList.children[i].textContent;
            }
        }

        
        switch(true) {
            case selectedTab === 'All Projects' && task.project === '':
            break;

            case selectedTab === 'All Projects' && task.project != '':
                if (task.project === '') {
                    
                } else if (task.project != '') {
                    _printProjectName(item, task.project);
                    _printButtons(item);
                    _printTaskName(item, task.task);
                    _printTaskDate(item, task.date);
                    _printDescription(item, task.notes);
                    
                        if (task.status === 'complete') {
                            editItems.complete(item);
                        }
                    
                }
                
                if (status === 'complete') {
                    editItems.complete(item);
                }
            break;
        }
        
        
    }

    function appendProjectName() {

        const projectPanel = document.querySelector('.projectPanel');
        taskUpdate.clear()
        
        const scrollContainer = document.querySelector('.scrollContainer');

        // gets locallyStored project array
        let array = JSON.parse(localStorage.getItem('projectArray'));
        
        

        
        if (status != true && array != null) {
            // const text span
            let projectNames = array.map((a) => a.projectName);
            
            // variable for fetching last array item
            let last = array.length - 1;

            for (let i = 0; i < projectNames.length; i++) {

                const textSpan = document.createElement('span');
                textSpan.classList.add('textSpans');
                textSpan.textContent = projectNames[i];
                textSpan.title = "Click to see this project's tasks";
                scrollContainer.appendChild(textSpan);
    
            }
           
        } else if (status === true) {
            const textSpan = document.querySelectorAll('.textSpans');
            
            for(var i = 0; i < textSpan.length; i++) {
                if (textSpan[i].textContent === '') {
                    name = task.project;
                    textSpan[i].textContent = name;
                   
                }
            }
        }
        tabSelection.eventListeners();
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
        removeProject: removeProjectName,
        projectPrint: printProjects,
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




export { taskPrint, tabbedPrint }