 import { grabTask } from "./grabTask"
import {itemRef} from "./index"

// Module that turns task data into an object
const ItemFactory = () => {

    // receiving function that breaks down each task item and sends it onward
    function receiveTasks(taskName, notes, date, project, status) {
        
        // forms each group of task data into an object 
        const item = {
           task: taskName,
           notes: notes,
           date: date,
           project: project, 
           status: status
        }

        _pushItem(item);
    }

    // pushes each task into index.js where it is added to the taskArray
    function _pushItem(item) {
        itemRef.printItem(item);
    }
   
    return { receiveTasks }
}

export {ItemFactory}