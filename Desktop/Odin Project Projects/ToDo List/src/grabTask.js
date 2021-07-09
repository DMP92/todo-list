import { taskPrint } from "./printTasks.js";
import { ItemFactory, ProjectFactory } from "./taskFactory.js";
import { projects } from "./project.js";
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
                    const newProject = ProjectFactory();
                    newProject.receiveProjects(taskName, notes, date, project, status);
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
                const sendGrabbedData = ItemFactory();
                sendGrabbedData.receiveTasks(taskName, notes, date, project, status);
            break;

            case existing === true:
                if (projectPrompt === true) {
                   console.log('hmm')
                } else {
                    console.log('bottom');
                    return alert(`All ${dataSet} must be unique. `);
                }
            break;
        }
       
    }

    // function that gathers all task data from each form, and pushes to the above function 'checkItemData()'
    function sendItemData() {

        const input = document.querySelector('.task');
        const notesInput = document.querySelector('.notes');
        const dateInput = document.querySelector('.date');
        const projectTitle = document.querySelector('.project'); 
        
        const taskName = toDoInput();
        const notes = itemNotes();
        const date = itemDate();
        const project = itemProject();
        
        const status = 'incomplete'
        checkItemData(taskName, notes, date, project, status);

        projectTitle.value = '';
        dateInput.value = '';
        input.value = '';
        notesInput.value = '';
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

export { grabTask }
