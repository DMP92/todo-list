import { ItemFactory } from "./taskFactory";
import  exampe, { projectPrint }  from "./updateDOM";
import { grabTask } from "./grabTask";
import { editItems, taskUpdate } from "./editTasks";
import { tabbedPrint, taskPrint } from "./printTasks";
import { sidebarTab } from "./updateDOM";
import { tabSelection } from "./updateDOM";
import { fi } from "date-fns/locale";
import { projects } from "./project";
// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed
const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];
    
        function fillArray() {
            // gets stored array from localStorage
            const fillArray = JSON.parse(localStorage.getItem('itemArray'));
 
            // keeps itemArray filled with saved values so it doesn't reset on window load
            switch(true) {
                case fillArray != null:
                    for (var i = 0; i < fillArray.length; i++) {
                        itemArray.push(fillArray[i]);
                    }
                break;
            }
        }

        // pushes todo item into Item array & other functions inside the itemRef Module
        function pushItem(item) {
            // pushes item to array
            itemArray.push(item);
            
            storagePush(item);
        }

        // pushes each item into localStorage 
        function storagePush(item) {

            // gives index position
            const index = itemArray.indexOf(item);
            // stores the itemArray in localStorage
            const storeArray = JSON.stringify(itemArray);
            localStorage.setItem('itemArray', storeArray);
            
            // variable that contains the obtained reference to the locallyStored 'itemArray'
            let storedArray = JSON.parse(localStorage.getItem('itemArray'));
            // console.log(storedArray[index].task);   
            shareItem(item, index);
            shareArrayItems(item, index, 'index');
              
        }

        function arrayUpdate(action, index, amount) {
            let storeArray = JSON.stringify(itemArray);
            
            switch(true) {
                case action === 'delete':
                    itemArray.splice(index, 1);
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                break;
                case action === 'edit':
                    
                  
                    
                    itemArray.splice(index, 1, amount);
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                    let storedArray = JSON.parse(localStorage.getItem('itemArray'));
                    console.log(storedArray);
                    
                    
                    
                break;
                case action === 'complete':
                    if (itemArray[index] === undefined) {
                        projectPrint.update();
                    } else {
                        itemArray[index].status = amount;
                        storeArray = JSON.stringify(itemArray);
                        localStorage.setItem('itemArray', storeArray);
                    }
                break;
            }
        }

        function arrayShare(item) {
            
            return itemArray;
        }

        // shares specific itemArray
        function shareArrayItems(item, index, page) {
            tabSelection.receive(item, index, page);
        }

        function shareItem(item, index) {
            const tabList = document.querySelector('.sidebar');
        let selectedTab = ''
        
        for ( var i = 0; i < tabList.children.length; i++) {
            if (tabList.children[i].classList.contains('hovered')) {
                selectedTab = tabList.children[i].textContent;
            }
        }

            if (item.project === '' && selectedTab === 'All Projects') {
                console.log('item.project === "" && selectedTab === "All Projects"');
            } else {
                
                taskPrint.receive(item, index);
            }
            

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
        fillArray, fillArray,
        printItem : pushItem,
        arrayShare: arrayShare,
        title: shareName,
        notes: shareNote,
        summary: shareSummary,
        notes: shareProject,
        task: shareTask,
        share: shareArrayItems,
        shareItem: shareItem, 
        update: arrayUpdate,
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
const getProject = (function() {

    function currentProjectArray() {
        const currentProjectArray = JSON.parse(localStorage.getItem('projectArray'));

        return currentProjectArray;
    }
    

    return {
        array: currentProjectArray,
    }
})();

    // keeps all event listeners active
    const sidebar = document.querySelector('.sidebar');
        sidebar.addEventListener('click', () => {
            editItems.eventListeners();
        });

    const submit = document.querySelector('.submit');
    submit.addEventListener('click', () => {
        const projectPanel = document.querySelector('.projectPanel');
        grabTask.send();
        projectPrint.reprint();
        if ( projectPanel != null) {
            taskPrint.project();
        } 

        

        editItems.eventListeners();
        
    });

    window.addEventListener('load', () => {
        editItems.eventListeners();
        tabSelection.eventListeners();
        itemRef.fillArray();
        projects.update();

    })



/* 
    I need there to be a way to communicate with
*/


export { itemRef, getProject, manipulateTaskArray }


