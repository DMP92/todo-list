import { ItemFactory } from "./Factory";

// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed

const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];

        // pushes todo item into Item array
        function pushItem(item) {
            itemArray.push(item);
        }
        
        // shares specific itemArray
        function shareArray() {
            console.log(itemArray);
            return itemArray;
        }

    // shares specific item
    function shareSpecificTask(index) {
        return itemArray[index];
    }

        // shares specific item title
        function shareTitle(index) {
            return itemArray[index].name;
        }

        // shares specific item description
        function shareDescription(index) {
            return itemArray[index].description;
        }

        // shares specific item summary
        function shareSummary(index) {
            return itemArray[index].summary;
        }

        // shares specific item notes
        function shareNotes(index) {
            return itemArray[index].notes;
        }

    return {
        printItem : pushItem,
        title: shareTitle,
        description: shareDescription,
        summary: shareSummary,
        notes: shareNotes,
        task: shareSpecificTask,
        share: shareArray
    }
})();

const arrayprint = document.querySelector('.array');
arrayprint.addEventListener('click', itemRef.share);

export { itemRef }