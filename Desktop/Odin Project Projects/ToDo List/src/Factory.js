import { generalTask } from "./DOM"
import {itemRef} from "./index"
// Module that creates each item in the to-do list

const ItemFactory = (task, notes, date, title) => {

    // create new item factory
    function createGeneralItem(task, notes, date, title) {
        const item = {};
        item.task = generalTask.title(task);
        item.notes = generalTask.notes(notes);
        item.date = generalTask.date(date);
        item.project = generalTask.project(title);
        
        _pushItem(item);
    }

    function _pushItem(item) {
        itemRef.printItem(item);
    }
   
    return { createGeneralItem }
}



const interactWithDOM = (function() {

    // variable that gets DOM elements
    const taskPanel = document.querySelector('.taskPanel');
    const deleteButtons = taskPanel.querySelector('.itemDelete');
    if (deleteButtons != null) {
        console.log('what!?');
        deleteButtons.addEventListener('click', () => {
            console.log('hey1');
        });
    }

    function _deleteItem(event) {
        console.log('hey');
    }

})();


export {ItemFactory}