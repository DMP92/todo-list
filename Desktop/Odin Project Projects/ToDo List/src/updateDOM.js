import { itemRef } from "./index.js";
import { formatDistance, subDays } from 'date-fns'
import { editItems, taskUpdate } from "./editTasks.js";
import { taskPrint, tabbedPrint } from "./printTasks.js";
/* 
************************************************************************************
****************************CONTROLS WHICH SIDEBAR IS LIT UP************************
************************************************************************************
*/

// module that tracks which sidebar panel is interacted with, and then passes that info on
// so the data corresponding with that tab can be displayed in the DOM
const sideBarHighlight = (function() {

    // variables for targeting each tab
    const sideBarChildren = document.querySelector('.sidebar').children;
    // each tab element
    const child1 = sideBarChildren[0];
    const child2 = sideBarChildren[1];
    const child3 = sideBarChildren[2];
    const child4 = sideBarChildren[3];
    const child5 = sideBarChildren[4];

    // array to contain sidebar tabs
    const sideBarArray = [];
    sideBarArray.push(child1, child2, child3, child4, child5);

    function defaultTab() {
        const all = document.querySelector('.all');
        all.classList.add('hovered');
        operator(4);
    }

    // function that highlights the tab that is clicked and unhighlights the tabs that aren't
    function sideBarEventListeners() {

        sideBarArray.forEach(tab => tab.addEventListener('click', () => {
            const index = sideBarArray.indexOf(event.target);

            switch(true) {
                case event.target.classList.contains('hovered'):
                    event.target.classList.remove('hovered');
                    defaultTab();
                break;
                case !event.target.classList.contains('hovered'):
                    child1.classList.remove('hovered');
                    child2.classList.remove('hovered');
                    child3.classList.remove('hovered');
                    child4.classList.remove('hovered');
                    child5.classList.remove('hovered');
                    event.target.classList.add('hovered');
                    operator(index);
                break;
            }

            const hover = document.querySelector('.hovered');
            

        }))
    }

    // shares the array that contains each sidebar element
    function shareTabs() {
        return sideBarChildren;
    }

    return {
        default: defaultTab,
        children: sideBarEventListeners,
        share: shareTabs
    }
})();

// function that calls functions in the 'tabSelection' module based on which tab is clicked
function operator(index) {
    switch(true) {
        case index === 0:
           tabSelection.inbox();
        break;
        case index === 1:
            tabSelection.today();
        break;
        case index === 2:
            tabSelection.weekly();
        break;
        case index === 3:
            tabSelection.projects();
        break;
        case index === 4:
            tabSelection.all();
        break;
    }
}

/* 
************************************************************************************
****************************MODULE THAT CONTROLS EACH TAB***************************
************************************************************************************
*/

// runs logic for each tab based on which tab is clicked
const tabSelection = (function() {

    const projectArray = [];
    const itemArray = [];

    function receiveProjects(project) {
        projectArray.push(project);
       
    }

    function receiveArrayItems(item, index, page) {
       
        switch(true) {
            case page === 'index':
                itemArray.push(item);
            break;
        }
    }
    // functions for each tab

    function inboxTab() {
        taskUpdate.erase();
    }

    function todayTab() {
        taskUpdate.erase();
        console.log(1);
        // whatever taks are dated for today show up in the DOM
    }

    function weeklyTab() {
        taskUpdate.erase();
        console.log(2);
        // whatever tasks happen this week show up in the DOM
    }

    function projectsTab() {
        taskUpdate.erase();
        console.log(3);


        tabbedPrint.unpack(projectArray);
        // tasks associated with certain projects will show up in the DOM
    }

    function allTab(array) {
        
        if (itemArray.length != 0) {
            taskUpdate.erase();
            tabbedPrint.unpack(itemArray);
        }

        const keys = Object.keys(localStorage);
        let i = 0;

    while (i != keys.length) {
        const items = JSON.parse(localStorage.getItem(keys[i]));
        if (items.status === 'complete') {
            taskPrint.unpack(items, [i], 'complete');
            i++
        } else if (items.status === 'incomplete') {
            taskPrint.unpack(items, [i], 'incomplete');
            i++
        }

    }



    }

    return {
        receive: receiveArrayItems,
        receiveProjects: receiveProjects,
        inbox: inboxTab,
        today: todayTab,
        weekly: weeklyTab,
        projects: projectsTab,
        all: allTab
    }
})();


window.addEventListener('load', () => {
    
    sideBarHighlight.default();
    sideBarHighlight.children();
});

export { sideBarHighlight, tabSelection }