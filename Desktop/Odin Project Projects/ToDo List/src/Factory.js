import { domToDo } from "./DOM"
import {itemRef} from "./index"
// Module that creates each item in the to-do list

const ItemFactory = (name, summary, date) => {


    
    // create new item factory
    function createItem(title, text, date, projectName ) {
        const item = {};
        item.title = domToDo.title(title);
        item.description = domToDo.info(text);
        item.date = domToDo.date(date);
        item.project = domToDo.project(projectName);
        
        _pushItem(item);
    }

    function _pushItem(item) {
        itemRef.printItem(item);
    }
   
    return { createItem }
}

const newItem = ItemFactory();
const button = document.querySelector('.submit');
    button.addEventListener('click', newItem.createItem);



export {ItemFactory}