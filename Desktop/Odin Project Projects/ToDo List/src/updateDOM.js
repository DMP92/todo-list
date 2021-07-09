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
    function sideBarEventListeners(number) {

        

            if (number != undefined) {
                child1.classList.remove('hovered');
                child2.classList.remove('hovered');
                child3.classList.remove('hovered');
                child4.classList.remove('hovered');
                child5.classList.remove('hovered');
                // added by 'number'
                child5.classList.add('hovered');

            } else if (number === undefined) {

            sideBarArray.forEach(tab => tab.addEventListener('click', () => {
                const index = sideBarArray.indexOf(event.target);
                switch (true) {
                    case event.target.classList.contains('hovered'):
                        event.target.classList.remove('hovered');
                        defaultTab();
                        tabSelection.eventListeners();
                        break;
                    case !event.target.classList.contains('hovered'):
                        child1.classList.remove('hovered');
                        child2.classList.remove('hovered');
                        child3.classList.remove('hovered');
                        child4.classList.remove('hovered');
                        child5.classList.remove('hovered');
                        event.target.classList.add('hovered');
                        operator(index);
                        tabSelection.eventListeners();
                        break;
                    
                }

                const hover = document.querySelector('.hovered');


            }))
        }
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

    // listens for which project title is clicked on and prints it to the project tab display
    function eventListeners() {
        const textSpans = document.querySelectorAll('.textSpans');

        const textArray = Array.from(textSpans);
        textArray.forEach(text => text.addEventListener('click', _eventListen));
    
    }

    function _eventListen() {
        const projectPanel = document.querySelector('.projectPanel'); 
        if (projectPanel != undefined) {
                    projectName();               
        } else {
            projectsTab(true);
            taskPrint.project();
            projectName();
        }
    }

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

    function projectName() {
        const projectPanel = document.querySelector('.projectPanel');
        projectPanel.textContent = event.target.textContent;
        let currentText = event.target.textContent;

        eventListeners(currentText);
        
    }

    // controls both ways that you can get to the project tab
            // by clicking on the project tab itself
            // or, but clicking on a project name in the scroll section
    function projectsTab(condition) {
        const projectText = event.target.textContent;
        if (condition === true) {
            sideBarHighlight.children(4);
        } else {}
        // erases all tasks from prior tabs and all scroll items
        taskUpdate.erase();

        // variables for finding taskSpan elements
        const text = document.querySelectorAll('.taskSpans');
        // if taskSpan elements are found, clear the projectScroll element of them
        if (text != null) {
            taskUpdate.clear();
        } 

        // variable for targeting the 'mainSection' div && adding a place for chosen project title to go
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

        // pushes each project item to interface that prints them to DOM
        for (var i = 0; i < projectItems.length; i++) {
            if (projectItems[i].project === '') {
            } else if (projectItems[i].project != '') {
                taskPrint.unpack(projectItems[i]);

            }
        }
        
    }

    // controls logic involved in the selection of the All tab. Prints all tasks and projects
    function allTab(array) {
        
        // erases tasks from DOM so they don't spam themselves
        taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            taskUpdate.clear();
        } 

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
        eventListeners: eventListeners,
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