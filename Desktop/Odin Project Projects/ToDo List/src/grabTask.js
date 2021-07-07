import { taskPrint } from "./printTasks.js";
import { ItemFactory } from "./taskFactory.js";
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
               return alert(`All ${dataSet} must be unique. `);
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

export { grabTask }
