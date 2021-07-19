

/* 
************************************************************************************
***************** MODULE THAT CONTROLS PROJECT FUNCTIONALITY************************
************************************************************************************
*/

import { taskPrint } from "./printTasks";
import { projectPrint } from "./updateDOM";

// module that stores projects into localStorage
const projects = (function() {

    // array that stores each project obj
    let projectArray = [];
    const allProjects = JSON.parse(localStorage.getItem('projectArray'));
    
    

    console.log(projectArray);

    function arrayShare() {
        return allProjects;
    }
        // on window load this pushes each locally stored project into the projectArray 
        function projectArrayUpdate() {
            // gets all contents of the project array from localStorage

            if (allProjects != null) {
                // one by one pushes each project into projectArray
                for (var i = 0; i < allProjects.length; i++) {
    
                    projectArray.push(allProjects[i]);
                    
                }
            }
        }


    function projectUpdate(action, index, amount) {
        let storeProjectArray = JSON.stringify(projectArray);


    }

    // function that adds tasks to locally stored array
    function addTasks(project, index, task) {

        project.tasks.push(task);

        projectArray.splice(index, 1, project);
        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
        

        console.log(allProjects);
    }

    // function that deletes specified project from localStorage array
    function deleteProject(index) {
        projectArray.splice(index, 1);

        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
    }

    function completeProject(index) {
       
        const parent = event.target.parentElement;
        const project = parent.children[0];
        const task = parent.children[4];


        const allTasks = allProjects.map((a) => a.tasks);
        
        
        const tasks = allTasks.map((a) => a.task);
        
        
        for ( var i = 0; i < allProjects.length; i++) {
            if (project === allProjects[i].projectName) {
                console.log(project);
            } else {
                console.log(project);
            }
        }
    }

    // test function
    function convey() {
        if (allProjects != null) {
            taskPrint.projectPrint(allProjects);
            console.log('shweet')
        }
    }

    // receives each project, pushes them into the array and passes them off to be sored
    function receiveProjects(project) {
      
        projectArray.push(project);
        const index = projectArray.indexOf(project);
        storeProjects(project, index);
    }

    // stores each project in localStorage
    function storeProjects(project, index) {
        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
        const stored = JSON.parse(localStorage.getItem('projectArray'));
        console.log(stored);
    }

       
    function splice (index, i, newTask) {
        console.log (newTask);
        if (newTask === undefined) {
            let statusUpdate = projectArray[index].tasks.splice(i, 1);
            storeProjects(statusUpdate, index);
            console.log(JSON.parse(localStorage.getItem('projectArray')));
        } else if (newTask != undefined ) {
            console.log('...o.O')

            let statusUpdate = projectArray[index].tasks.splice(i, 1, newTask);
            storeProjects(statusUpdate, index);
            console.log(JSON.parse(localStorage.getItem('projectArray')));
        }
        
        if (projectArray[index].tasks.length === 0) {
            const projectPanel = document.querySelector('.projectPanel');
            taskPrint.removeProject(projectArray[index].projectName);
           let statusUpdate = projectArray.splice(index, 1);
            storeProjects(statusUpdate, index);
            projectPanel.textContent = '';
        }

    }
    
    return {
        share: arrayShare,
        receiving: receiveProjects,
        update: projectArrayUpdate,
        add: addTasks,
        complete: completeProject,
        convey: convey,
        delete: deleteProject,
        splice: splice
    }

})();


export {projects}