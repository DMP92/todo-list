import { ItemFactory } from "./Factory";

// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed

const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];

        // pushes todo item into Item array
        function pushItem(item) {
            itemArray.push(item);
            projectCreate.fetch(item);
        }
        
        // shares specific itemArray
        function shareArray() {
            console.log(itemArray);
            return itemArray;
        }

    // shares specific item
    function shareTask(index) {
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
        share: shareArray
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

        projectArray.push(project);
    }

    // function that shares projectArray
    function shareProjectArray() {
        return projectArray;
    }

    // creates project container for all sub tasks
    function createProject(item) {

        return item.name;

    }

    return {
        fetch: fetchItems,
        shareArray: shareProjectArray,
        create: createProject
    }
})();

const newItem = ItemFactory();
const button = document.querySelector('.submit');
button.addEventListener('click', newItem.createGeneralItem);

const arrayprint = document.querySelector('.formDelete');
arrayprint.addEventListener('click', () => {
    console.log(itemRef.shareArray);
})

export { itemRef }