import { generalTask, taskPrint } from "./DOM-Creation"
import {itemRef} from "./index"
// Module that creates each item in the to-do list

const ItemFactory = (task, notes, date, title) => {

    // create new item factory
    function createGeneralItem(task, notes, date, title) {
        const item = {};

        
        _pushItem(taskPrint.createArray());

    }


    function _pushItem(item) {
        itemRef.printItem(item);
        generalTask.clear();
    }
   
    return { createGeneralItem }
}



export {ItemFactory}