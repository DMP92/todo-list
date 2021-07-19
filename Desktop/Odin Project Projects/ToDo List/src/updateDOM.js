import { getProject, itemRef } from "./index.js";
import { formatDistance, subDays } from 'date-fns'
import { editItems, taskUpdate } from "./editTasks.js";
import { taskPrint, tabbedPrint } from "./printTasks.js";
import { projects } from "./project.js";
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

        

            // if (number != undefined) {
            //     child1.classList.remove('hovered');
            //     child2.classList.remove('hovered');
            //     child3.classList.remove('hovered');
            //     child4.classList.remove('hovered');
            //     child5.classList.remove('hovered');
            //     // added by 'number'
            //     child5.classList.add('hovered');
            //     console.log('soop')
            // } else 
            // gives each tab an event listener
            if (number === undefined) {
                sideBarArray.forEach(tab => tab.addEventListener('click', () => {
                const index = sideBarArray.indexOf(event.target);

                switch (true) {
                    // If event target contains hovered class, it will remove it, and give the hovered class
                    // to the default tab 'all'
                    case event.target.classList.contains('hovered'):
                        event.target.classList.remove('hovered');
                        defaultTab();
                        tabSelection.eventListeners();
                        break;
                    // if the event target doesn't contain the hovered class, it will remove it from all other tabs
                    // and give it to the target
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
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 1:
            tabSelection.inbox();
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 2:
            tabSelection.today();
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 3:
            tabSelection.weekly();
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 4:
            tabSelection.projects();
            // communicates that the selected tab is the 'all' tab'
            
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
        if (projectPanel != null) {
            projectName();               
        } else {
            projectsTab(true);
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

        // erases tasks from DOM so they don't spam themselves
        taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            taskUpdate.clear();
} 
        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes project panel
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        taskUpdate.erase();
    }


    function todayTab() {

        // erases tasks from DOM so they don't spam themselves
        taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            taskUpdate.clear();
        } 

        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes projectpanel
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        taskUpdate.erase();
        console.log(1);
        // whatever taks are dated for today show up in the DOM
    }


    function weeklyTab() {

        // erases tasks from DOM so they don't spam themselves
        taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            taskUpdate.clear();
        } 

        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes projectPanel 
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        taskUpdate.erase();
        console.log(2);
        // whatever tasks happen this week show up in the DOM
    }
    

    function projectName() {
        const projectPanel = document.querySelector('.projectPanel');
        projectPanel.textContent = event.target.textContent;
        let currentText = event.target.textContent;
        eventListeners(currentText);
        projectPrint.print(currentText);
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
        
        // variable that allows task to print
        let check = false;
        

        

        // variable that contains the locallyStored array
        const projectItems = JSON.parse(localStorage.getItem('projectArray'));
        // pushes each project item to interface that prints them to DOM

    //     const projectNames = JSON.parse(localStorage.getItem('projectArray'));
    //    for (var i = 0; i < projectNames.length; i++) {
    //        taskPrint.print(projectNames[i].projectName);
    //    }

        if (projectItems != null) {

            const projectNames = projectItems.map((a) => a.tasks);
        }

        taskUpdate.erase();
       taskPrint.project();

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
        
        // if the project panel is present, it's removed
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
                
                if(storedArray[i].project === '') {
                    taskPrint.unpack(storedArray[i]);
                    
                } else {
                    
                }
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


const projectPrint = (function () {

    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
    
    const projectStorage = JSON.parse(localStorage.getItem('projectArray'));
    
    // returns each project name
    if (projectStorage != null) {
        const taskNames = projectStorage.map((a) => a.projectName);
    }

    

        function reprintOnSubmit() {
        const projectPanel = document.querySelector('.projectPanel');
        
        if (projectPanel != null && projectPanel.textContent != '') {
            let projectName = projectPanel.textContent;
            console.log(projectName);
            printTasks(projectName);
        }
    }

    // function for printing a selected project's task items 
    function findTasks(project) {
        
        taskUpdate.erase();
        let allProjects = JSON.parse(localStorage.getItem('projectArray'));
        console.log(allProjects);
        for (var i = 0; i < allProjects.length; i++) {
            if (allProjects[i].projectName === project) {
                let tasks = allProjects[i].tasks;
                return tasks;
            }
        }
        
    }


    // apply a delete all and reprint all function to submit button
    function printTasks(project) {
        let allProjects = JSON.parse(localStorage.getItem('projectArray'));
        let stick = findTasks(project);
        console.log(project);
        for (var i = 0; i < stick.length; i++) {
            let index = i;
            taskPrint.projectPrint(stick[i], index);
        }
    }

    function pushDeletion(index, i) {
        
        
        projects.splice (index, i);
                
    }

    // updates each project task item with each edit
    function projectArrayUpdate(action, index, amount) {
        let storeArray = JSON.stringify(projectArray);
        console.log(event.target);
        console.log(action, index, amount);
        let projectStorage = JSON.parse(localStorage.getItem('projectArray'));

        switch(true) {
            case action === 'delete':
                console.log(index);
                storeArray = JSON.stringify(projectArray);
                localStorage.setItem('projectArray', projectArray);

            break;
            case action === 'edit':
                let indecie = findTasks(amount);
                console.log(indecie);

                console.log(amount);
                const newItem = {};
                newItem.task = amount.name;
                newItem.notes = amount.notes;
                newItem.date = amount.date;
                newItem.project = amount.project;
                newItem.status = amount.status;

               
                projectArray.splice(index, 1, newItem);
                storeArray = JSON.stringify(projectArray);
                localStorage.setItem('itemArray', projectArray);
                let storedArray = JSON.parse(localStorage.getItem('itemArray'));
                console.log(storedArray);

                
                
            break;
            case action === 'complete':
                const parent = event.target.parentElement;
                const taskText = parent.children[4];
                console.log(index);
                let completedProject = projectStorage[index].tasks;
                console.log(completedProject);
                
                let position = '';
                let taskPos = '';

                for ( var i = 0; i < completedProject.length; i++ ) {
                    if (completedProject[i].task === taskText.textContent) {
                       position = completedProject[i];
                       
                       let newTask = {};

                       newTask.task = position.task,
                       newTask.notes = position.notes,
                       newTask.date = position.date,
                       newTask.project = position.project;
                       console.log(projectStorage);
                       if (position.status === 'incomplete') {
                           newTask.status = 'complete';
                       } else if (position.status === 'complete') {
                        newTask.status = 'incomplete';
                       }


                       let sharedArray = getProject.array();
                
                       let replacement = sharedArray[index].tasks.splice(i, 1, newTask);

                        projects.splice(index, i, newTask);
                       
                    }
                }

                


                
                // for ( var i = 0; i < tasks.length; i++) {
                //     tasker = tasks[i].map((a) => a.task);
                    
                   
                // }
                // // projectArray[index].status = amount;
                // storeArray = JSON.stringify(projectArray);
                // localStorage.setItem('itemArray', storeArray);
            break;
        }
    }

    function searchItem(task, project) {

        const array = JSON.parse(localStorage.getItem('projectArray'));

        const projectPanel = document.querySelector('.projectPanel');
        const textSpans = document.querySelectorAll('.textSpans');

        parent = event.target.parentElement;
        
        const projectItem = parent.children[0];
        
        for ( var i = 0; i < textSpans.length; i++) {
            if (textSpans[i].textContent === projectItem.textContent) {
                let index = [i];
                console.log('no work?')
                return index
            }
        }
        console.log(index);

               
        // switch(true) {
        //     case projectPanel.textContent === projectItem.textContent:
        //         for ( var i = 0; i < array.length; i++){
                    

        //             if (array[i].projectName === projectItem.textContent) {
        //                let currentProjectName = array[i].projectName;
        //                 for (var i = 0; i < currentProjectName.length; i++) {
                            
        //                     if (taskMap[i].task === taskItem.textContent) {
        //                         console.log(taskMap[i]);
        //                     }
        //                 }
        //             }
        //         }
        //     break;
        // }
        // for (var i = 0; i < currentTask.length; i++) {
        //     if (currentProject.tasks[i] === task) {
        //         currentTask = currentProject.tasks[i];
        //         currentTask.indexOf(task);
        //     }
        // }

        // console.log(projectIndex);
        // console.log(taskIndex);

    }
    
    return {
        tasks: findTasks,
        print: printTasks,
        update: projectArrayUpdate,
        search: searchItem,
        reprint: reprintOnSubmit,
        delete: pushDeletion
    }

})();

window.addEventListener('load', () => {

    sideBarHighlight.default();
    sideBarHighlight.children();
});


export { sideBarHighlight, tabSelection, projectPrint }