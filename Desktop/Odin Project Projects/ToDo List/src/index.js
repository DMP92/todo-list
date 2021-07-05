import { ItemFactory } from "./taskFactory";
import  exampe  from "./updateDOM";
import { grabTask } from "./grabTask";
import { editItems } from "./editTasks";
import { tabbedPrint, taskPrint } from "./printTasks";
import { sidebarTab } from "./updateDOM";
import { tabSelection } from "./updateDOM";
// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed

const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];
        // pushes todo item into Item array & other functions inside the itemRef Module
        function pushItem(item) {

            itemArray.push(item);
            const index = itemArray.indexOf(item);
            let myItem = JSON.stringify(item);
            shareItem(item, index);
            shareArrayItems(item, index, 'index');
            // unsure what I will do with this call
            if (item.project != '') {
                projectCreate.fetch(item);
                console.log(myItem);                
            } else {
                localStorage.setItem(`T${index}`, myItem);
                console.log(localStorage.getItem(`T${2}`.status));
            }
        }
 
        function arrayShare(item) {
            console.log(itemArray.indexOf(item));
            return itemArray;
        }

        // shares specific itemArray
        function shareArrayItems(item, index, page) {
            tabSelection.receive(item, index, page);
        }

        function shareItem(item, index) {
            taskPrint.receive(item, index);

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

        function localStore() {
            const myStorage = window.localStorage;
            return myStorage;
        }

    return {
        printItem : pushItem,
        arrayShare: arrayShare,
        title: shareName,
        notes: shareNote,
        summary: shareSummary,
        notes: shareProject,
        task: shareTask,
        share: shareArrayItems,
        shareItem: shareItem,
        localStore: localStore
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
        tabSelection.receiveProjects(project);

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
        editItems.eventListeners();
    })

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    grabTask.send();

});

window.addEventListener('load', () => {
    editItems.eventListeners();

})



/* 
    I need there to be a way to communicate with
*/


export { itemRef, projectCreate, manipulateTaskArray }


