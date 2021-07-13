 import { grabTask } from "./grabTask"
import {itemRef} from "./index"
import { projects } from "./project"

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
        if (item.project != '') {
            const newProject = ProjectFactory();
            newProject.qualify(item);    
        } else {

            itemRef.printItem(item);
        }
        
    }
   
    return { receiveTasks }
}



const ProjectFactory = () => {

    // variable that gets locallyStored projectArray
    const existing = JSON.parse(localStorage.getItem('projectArray'));
   
    function qualify (item) {
        const projectName = item.project;
        if (projectName != undefined) {
            _breakDown(item);
        }
       
    }

    function _breakDown(item) {
        const taskName = item.task;
        const notes = item.notes;
        const date = item.date;
        const project = item.project;
        const status = item.status;
        receiveProjects(taskName, notes, date, project, status);
    }

    function receiveProjects(taskName, notes, date, project, status) {

        // variables for repeat or new projects
        let repeat = false;
        let newProject = false;
        console.log(existing);
        // creates each project that contains each task inside of it
        const container = {};
        container.projectName = project;
        container.tasks = [];

        const task = {};
        task.task = taskName;
        task.notes = notes;
        task.date = date;
        task.project = project;
        task.status = status;

        if (existing.length != 0) { 
            for (var i = 0; i < existing.length; i++) {
                if (existing[i].projectName === project && project != undefined) {
                    repeat = true; 
                    var projectItem = existing[i];
                    var index = [i];
                } else {
                    newProject = true;

                }
            }

            if ( repeat === true && project != '') {
                projects.add(projectItem, index, task);
                repeat = false;
            } else if ( newProject === true ) {
                container.tasks.push(task);
                projects.receiving(container);
                newProject = false;
            }

        } else if (existing.length === 0) {
            container.tasks.push(task);
            projects.receiving(container);
        }



    }

    return {qualify, receiveProjects}
}



export {ItemFactory, ProjectFactory}

/* 
I may need **************************
    - something to reference all items in itemArray and check for matching projects
    - it will grab that matching project and push the new data inside of that project's array
    - then format it so it can push THAT data on to be printed or used however is needed
 */