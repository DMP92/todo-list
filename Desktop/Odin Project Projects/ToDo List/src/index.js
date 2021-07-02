import { ItemFactory } from "./taskFactory";
import  exampe  from "./updateDOM";
import { grabTask } from "./grabTask";
import { editItems } from "./editTasks";
import { taskPrint } from "./printTasks";
import { sidebarTab } from "./updateDOM";
import { housing } from "./updateDOM";
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
            taskPrint.receive(item);
            housing.con(item);
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
    grabTask.send();
    editItems.eventListeners();
});




export { itemRef, projectCreate }


