
const generalTask = (function() {
    
    
    // upon click will get task  item
    function toDoInput(task) {
        const input = document.querySelector('.task');
        
        return input.value;
    }

    // on click will get notes of todo list item
    function itemNotes(text) {
        const notes = document.querySelector('.notes');
        return notes.value;
    }

    // on click will get completion date
    function date(date) {
        const itemDate = document.querySelector('.date');
        return itemDate.value;
    }

    function project(title) {
        const projectTitle = document.querySelector('.project');

        
        return projectTitle.value;
    }


    function clearItemData() {
        const input = document.querySelector('.task');
        const notes = document.querySelector('.notes');
        const itemDate = document.querySelector('.date');
        const projectTitle = document.querySelector('.project');

        input.value = '';
        notes.value = '';
        itemDate.value = '';
        projectTitle.value = '';
    }

    function sendItemData() {
        toDoInput();
        itemNotes();
        date();
        project();

    }

    return {
        title: toDoInput,
        notes: itemNotes,
        date: date,
        project: project,
        clear: clearItemData,
        send: sendItemData
    }
})()




// Module that prints each task item to UI
const taskPrint = (function() {

    // function that calls each appendChild method in order to create the task
    function printTask() {
        const taskPanel = document.querySelector('.taskPanel');
        const item = document.createElement('div');
            item.classList.add('taskItem');
            taskPanel.appendChild(item);
        _printProjectName(item);
        _printButtons(item);
        _printTaskName(item);
        _printTaskDate(item);
        _printDescription(item);
    }

                // prints the name of the project
                function _printProjectName(item) {
                    const projectName = document.createElement('div');

                    projectName.classList.add('projectName');

                    projectName.textContent = generalTask.project();
                    if(projectName.textContent === '') {
                        projectName.textContent = 'Project Name: None';
                        item.appendChild(projectName);
                    } else {
                        item.appendChild(projectName);
                    }
                }

                // prints the buttons (delete, complete, edit)
                function _printButtons(item) {
                    const itemDelete = document.createElement('button');
                    itemDelete.classList.add('itemDelete');
                    itemDelete.textContent = 'D';

                    const completeTask = document.createElement('button');
                    completeTask.classList.add('completeTask');
                    completeTask.textContent = 'C';
                    const completeTaskObject = {};
                    completeTaskObject.toggle = false;
                    completeTaskObject.object = completeTask;

                    const editTask = document.createElement('button');
                    editTask.classList.add('editTask');
                    editTask.textContent = 'E';

                    item.appendChild(itemDelete);
                    item.appendChild(completeTask);
                    item.appendChild(editTask);
                }

                // prints name of task
                function _printTaskName(item) {
                    const taskName = document.createElement('div');
                    taskName.classList.add('taskName');

                    taskName.textContent = generalTask.title();
                    item.appendChild(taskName);
                }
            
                // prints task date
                function _printTaskDate(item) {
                    const taskDate = document.createElement('div');
                    taskDate.classList.add('taskDate');

                    taskDate.textContent = generalTask.date();
                    item.appendChild(taskDate);
                }

                // prints description / notes for task
                function _printDescription(item) {
                    const description = document.createElement('div');
                    description.classList.add('description');

                    description.textContent = generalTask.notes();
                    item.appendChild(description);
                }

    function shareDelete(items) {
        const deleteButtons = document.querySelectorAll('.itemDelete');
        console.log(deleteButtons);
        return deleteButtons;
    }

    return {
        print: printTask,
        share: shareDelete
    }

})();


// module made for editing and interacting with elements
const editItems = (function() {

                // variables that target DOM elements for deletion and editing
                const taskPanel = document.querySelector('.taskPanel');

    // function that houses the event listener for the deleteItem function
    function buttonEventListeners(event) {
        // variables that get each nodeList of buttons for interaction
        const deleteButtons = document.querySelectorAll('.itemDelete');
        const editButtons = document.querySelectorAll('.editTask');
        const completeButtons = document.querySelectorAll('.completeTask');


        deleteButtons.forEach(button => button.addEventListener('click', _deleteItem));
        editButtons.forEach(button => button.addEventListener('click', _editTask));
        completeButtons.forEach(button => button.addEventListener('click', _completeTask));
    }

            // private function that removes task item nodes from taskPanel
            function _deleteItem(event){
                const parent = event.target.parentElement;
                taskPanel.removeChild(parent);
            }

            // private function that marks task item as completed
            function _completeTask() {
                
                // variables that fetch and assign the cssText for the clicked completeTask button
                const parent = event.target.parentElement;
                const gray = "filter: grayscale(1);";
                const normal = "filter: grayscale(0);";

                // switch statement that (based on the cssText of the clicked element) either grays out, or 
                // fills in the taskItem container div
                switch(true) {
                    case parent.style.cssText === '':
                        parent.style.cssText = `${gray}`;
                    break;
                    case parent.style.cssText === gray:
                        parent.style.cssText = `${normal}`;
                    break;
                    case parent.style.cssText === normal:
                        parent.style.cssText = `${gray}`;
                    break;
                }
                
            }    

            // private function that allows the task info to be edited
            function _editTask() {

                // variables that get each nodeList item of the specific container the clicked button is in
                const parent = event.target.parentElement;
                const project = parent.children[0]
                const edit = parent.children[3];
                const name = parent.children[4];
                const date = parent.children[5];
                const notes = parent.children[6];

                // IF the edit button is clicked and the task.tagName is still a DIV, then the code runs
                // ELSE it will run the function called below which appends the newly edited info to the DOM
                if (name.tagName === 'DIV') {
                // variables for appending input items to taskItem
                const editProject = document.createElement('input');
                    editProject.classList.add('projectName');
                    editProject.style.cssText = 'text-align: center;';
                    editProject.placeholder = 'Edit Project Name';
                    parent.replaceChild(editProject, project);


                const editName = document.createElement('input');
                    editName.classList.add('taskName');
                    editName.placeholder = 'Edit Task Name';
                    editName.style.cssText = 'text-align: center;';
                    parent.replaceChild(editName, name);


                const editDate = document.createElement('input');
                    editDate.classList.add('taskDate');
                    editDate.type = 'date';
                    editDate.style.cssText = "background-color: White; color: black; text-align: center;";
                    editDate.placeholder = 'Edit Date';
                    parent.replaceChild(editDate, date)



                const editDescription = document.createElement('input');
                    editDescription.classList.add('description');
                    editDescription.placeholder = 'Edit Notes';
                    editDescription.style.cssText = 'text-align: center;';
                    parent.replaceChild(editDescription, notes);

            // parent.appendChild();

                } else {
                    _appendTask();
                }
            }

            // function that takes newly edited information and publishes them to the DOM
            function _appendTask() {

                // gets the container of the specific edit button clicked
                const parent = event.target.parentElement;

                // variables for appending finished items to taskItem
                const project = parent.children[0]
                const edit = parent.children[3];
                const name = parent.children[4];
                const date = parent.children[5];
                const notes = parent.children[6];
                

                const taskName = document.createElement('div');
                    taskName.classList.add('taskName');
                    taskName.textContent = name.value;

                const description = document.createElement('div');
                    description.classList.add('description');
                    description.textContent = notes.value;

                const taskDate = document.createElement('div');
                    taskDate.classList.add('taskDate');
                    taskDate.textContent = date.value;

                const projectName = document.createElement('div');
                    projectName.classList.add('projectName');
                    projectName.textContent = project.value;

                parent.replaceChild(projectName, project);
                parent.replaceChild(taskName, name);
                parent.replaceChild(taskDate, date);
                parent.replaceChild(description, notes);

            }

    return {
        eventListeners: buttonEventListeners
    }
})()



const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    taskPrint.print();
    editItems.eventListeners();
    generalTask.clear();

});

export { generalTask }


