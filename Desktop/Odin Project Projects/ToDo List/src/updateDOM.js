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
const sideBarHighlight = (function () {

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
        operator(0);
    }

    // function that highlights the tab that is clicked and unhighlights the tabs that aren't
    function sideBarEventListeners() {

        sideBarArray.forEach(tab => tab.addEventListener('click', () => {
            const index = sideBarArray.indexOf(event.target);
            console.log(index);
            switch (true) {
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
    switch (true) {
        case index === 0:
            tabSelection.all();
            break;
        case index === 1:
            tabSelection.inbox();
            break;
        case index === 2:
            tabSelection.today();
            break;
        case index === 3:
            tabSelection.weekly();
            break;
        case index === 4:
            tabSelection.projects();
            break;
    }
}

/* 
************************************************************************************
****************************MODULE THAT CONTROLS EACH TAB***************************
************************************************************************************
*/

// runs logic for each tab based on which tab is clicked
const tabSelection = (function () {

    const projectArray = [];
    const itemArray = [];

    function receiveProjects(project) {
        projectArray.push(project);

    }

    function receiveArrayItems(item, index, page) {

        switch (true) {
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
        
        // erases all tasks from prior tabs
        taskUpdate.erase();

        // variable for targeting the 'mainSection' div
        const mainSection = document.querySelector('.mainSection');
        mainSection.style.cssText = `
        position: relative;
        grid-area: "main";
        grid-column: 4/11;
        grid-row: 1/11;
        background-color: var(--dark-color);
        z-index: 5;
        display: grid;
        grid-template-columns: repeat(4, 24%);
        grid-template-rows: repeat(10, 10%);
        grid-template-areas: 
                "form form"
                "project project"
                "items items";
        width: min(100%, 1200px);
        `;

        // const targets projectPanel div
        const projectPanel = document.createElement('div');
        projectPanel.classList.add('projectPanel');

        // variable that targets taskPanel div
        const taskPanel = document.querySelector('.taskPanel');

        taskPanel.style.cssText = `grid-row: 5/11`;
        
        // appends projectPanel to section
        mainSection.appendChild(projectPanel);


    

        // variable that contains the locallyStored array
        const projectItems = JSON.parse(localStorage.getItem('itemArray'));

        for (var i = 0; i < projectItems.length; i++) {
            if (projectItems[i].project === '') {
            } else if (projectItems[i].project != '') {
                taskPrint.unpack(projectItems[i]);

            }
        }
        // tasks associated with certain projects will show up in the DOM
    }

    function allTab(array) {
        taskUpdate.erase();

        // const targets projectPanel div
        const projectPanel = document.querySelector('.projectPanel');

        // variable that targets taskPanel div
        const taskPanel = document.querySelector('.taskPanel');

        // variable for targeting the 'mainSection' div
        const mainSection = document.querySelector('.mainSection');

        const isPresent = mainSection.contains(projectPanel);
        // appends projectPanel to section

        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 


        let storedArray = JSON.parse(localStorage.getItem('itemArray'));

        if (storedArray != null) {
            for (var i = 0; i < storedArray.length; i++) {
                taskPrint.unpack(storedArray[i]);
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