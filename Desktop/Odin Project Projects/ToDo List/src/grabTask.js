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
            const sendGrabbedData = ItemFactory();
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
       
                  
                   const sendGrabbedData = ItemFactory();
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

export { grabTask }

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
