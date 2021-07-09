

/* 
************************************************************************************
***************** MODULE THAT CONTROLS PROJECT FUNCTIONALITY************************
************************************************************************************
*/

// module that stores projects into localStorage
const projects = (function() {

    // array that stores each project obj
    let projectArray = [];
    const existing = JSON.parse(localStorage.getItem('projectArray'));
  

    function arrayShare() {
        return projectArray;
    }
        // on window load this pushes each locally stored project into the projectArray 
        function projectArrayUpdate() {
            // gets all contents of the project array from localStorage

            if (existing != null) {
                // one by one pushes each project into projectArray
                for (var i = 0; i < existing.length; i++) {
    
                    projectArray.push(existing[i]);
                    
                }
            }
        }



    // function that adds tasks to locally stored array
    function addTasks(project, index, task) {

        project.tasks.push(task);

        projectArray.splice(index, 1, project);
        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
        

        console.log(existing);
    }

    function deleteProject(index) {
        projectArray.splice(index, 1);

        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);

    }

    function convey() {
        if (existing != null) {
            console.log(existing);
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

    }
       

    return {
        share: arrayShare,
        receiving: receiveProjects,
        update: projectArrayUpdate,
        add: addTasks,
        convey: convey,
        delete: deleteProject,
    }

})();

projects.convey();

export {projects}